import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
	try {
		const { email, password } = await request.json();
		const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;

		if (existingUser.rowCount! > 0) {
			return NextResponse.json(
				{ message: "User already registered" },
				{ status: 400 }
			);
		}
		const hashedPassword = await hash(password, 10);

		await sql`INSERT INTO users (email, password) VALUES (${email}, ${hashedPassword})`;
		return NextResponse.json({ message: "User registered successfully" });
	} catch (e) {
		return NextResponse.json(
			{ message: "Error registering user" },
			{ status: 500 }
		);
	}
}
