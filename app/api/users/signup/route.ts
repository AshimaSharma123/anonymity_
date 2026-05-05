import { NextResponse } from "next/server";
import { getConnection } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { full_name, email, password } = body;

    //  validation
    if (!full_name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 500 }
      );
    }

    const db = getConnection();

    //  Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  Insert into DB
    await db.query(
      `INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)`,
      [full_name, email, hashedPassword]
    );

    return NextResponse.json({ success: true });

  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
        return Response.json({ error: "Email address already exists! Please try another email address." }, { status: 500 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}