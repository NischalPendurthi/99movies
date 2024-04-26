import { connectToDB } from '@utils/database';
import User from "@models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, username, image } = await request.json();
  await connectToDB();
  await User.create({ email, username, image });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}