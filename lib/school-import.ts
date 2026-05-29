import * as XLSX from "xlsx";

export type SchoolImportRecord = {
  school_name: string;
  street_address: string;
  city: string;
  state: string;
  zipcode: string;
  school_association: string;
  school_district_name: string | null;
  school_year: string;
  grade_level: string[];
};

const HEADER_MAP: Record<string, keyof Omit<SchoolImportRecord, "school_association" | "school_district_name" | "school_year" | "grade_level">> = {
  "school name": "school_name",
  schoolname: "school_name",
  name: "school_name",
  "street address": "street_address",
  address: "street_address",
  street: "street_address",
  city: "city",
  state: "state",
  zip: "zipcode",
  zipcode: "zipcode",
  "zip code": "zipcode",
};

export function getCurrentSchoolYear(): string {
  const now = new Date();
  const startYear = now.getMonth() >= 7 ? now.getFullYear() : now.getFullYear() - 1;
  return `${startYear}-${startYear + 1}`;
}

export function inferAssociationFromFilename(filename: string): string {
  const lower = filename.toLowerCase();
  if (lower.includes("char") && lower.includes("private")) {
    return "Public, Charter & Private";
  }
  if (lower.includes("private")) {
    return "Private";
  }
  if (lower.includes("charter")) {
    return "Charter";
  }
  return "Public";
}

function normalizeHeader(header: string): string {
  return header.trim().toLowerCase().replace(/\s+/g, " ");
}

type MappedField = (typeof HEADER_MAP)[keyof typeof HEADER_MAP];

function getCell(row: Record<string, unknown>, field: MappedField): string {
  for (const [header, value] of Object.entries(row)) {
    const mapped = HEADER_MAP[normalizeHeader(header)];
    if (mapped === field) {
      return String(value ?? "").trim();
    }
  }
  return "";
}

function mapRow(
  row: Record<string, unknown>,
  association: string,
  schoolYear: string
): SchoolImportRecord | null {
  const school_name = getCell(row, "school_name");
  if (!school_name) {
    return null;
  }

  const zipRaw = getCell(row, "zipcode");
  const zipcode = zipRaw ? String(zipRaw).replace(/\.0$/, "") : "";

  return {
    school_name,
    street_address: getCell(row, "street_address"),
    city: getCell(row, "city"),
    state: getCell(row, "state"),
    zipcode,
    school_association: association,
    school_district_name: null,
    school_year: schoolYear,
    grade_level: [],
  };
}

export function parseSchoolExcel(
  buffer: ArrayBuffer,
  filename: string
): SchoolImportRecord[] {
  const workbook = XLSX.read(buffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];

  if (!sheetName) {
    return [];
  }

  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, {
    defval: "",
  });

  const association = inferAssociationFromFilename(filename);
  const schoolYear = getCurrentSchoolYear();

  const seen = new Set<string>();
  const schools: SchoolImportRecord[] = [];

  for (const row of rows) {
    const mapped = mapRow(row, association, schoolYear);
    if (!mapped) {
      continue;
    }

    const key = `${mapped.school_name}|${mapped.state}|${mapped.zipcode}|${mapped.street_address}`.toLowerCase();
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    schools.push(mapped);
  }

  return schools;
}

export function chunkArray<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}
