import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL!;

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const sql = neon(databaseUrl);

  try {
    const user = await sql`SELECT * FROM auth.users WHERE email = ${email} AND password = ${password}`;
    if (user.length === 0) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ success: true, user: user[0] });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
