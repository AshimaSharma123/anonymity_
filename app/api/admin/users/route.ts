import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";

    const offset = (page - 1) * limit;

    let query = supabase.from("users").select("id, full_name, email", { count: "exact" });

    if (search.trim()) {
      query = query.or(`full_name.ilike.%${search}%,email.ilike.%${search}%`);
    }

    const { data, error, count } = await query
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.log(error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    const totalPages = count ? Math.ceil(count / limit) : 0;

    return NextResponse.json({
      users: data,
      pagination: {
        total: count,
        page,
        limit,
        totalPages,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { full_name, email } = body;

    // Validation
    if (!full_name || !full_name.trim()) {
      return NextResponse.json(
        { error: "User name is required" },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "Email address is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Check existing user
    const { data: existingUsers } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .limit(1);

    if (existingUsers && existingUsers.length > 0) {
      return NextResponse.json(
        { error: "This email address is already registered. Please use a different email address." },
        { status: 400 }
      );
    }

    // Insert user
    const { data, error } = await supabase
      .from("users")
      .insert([{ full_name: full_name.trim(), email: email.trim() }])
      .select("id, full_name, email");

    if (error) {
      console.log(error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, user: data[0] });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, full_name, email } = body;

    // Validation
    if (!id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    if (!full_name || !full_name.trim()) {
      return NextResponse.json(
        { error: "User name is required" },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "Email address is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Check if email already exists for a different user
    const { data: existingUsers } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .neq("id", id)
      .limit(1);

    if (existingUsers && existingUsers.length > 0) {
      return NextResponse.json(
        { error: "This email address is already registered. Please use a different email address." },
        { status: 400 }
      );
    }

    // Update user
    const { data, error } = await supabase
      .from("users")
      .update({ full_name: full_name.trim(), email: email.trim() })
      .eq("id", id)
      .select("id, full_name, email");

    if (error) {
      console.log(error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, user: data[0] });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("users")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
