import { NextResponse } from "next/server";
import { getConnection } from "@/lib/supabase";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    const db = getConnection();

    //  Find user by email
    const [rows]: any = await db.query(
      "SELECT id, full_name, email, password FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const user = rows[0];

    //  Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    //  Success (DO NOT return password)
            const response = NextResponse.json({
            success: true,
            user: {
            id: user.id,
            name: user.full_name,
            email: user.email,
            },
        });

        //  Set cookie
        response.cookies.set("auth", String(user.id), {
            httpOnly: true,
            path: "/",
        });

        return response;

  } catch (error) {
    console.error("Signin Error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}