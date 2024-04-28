import { connectToDB } from '@utils/database';
import Review from "@models/review";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { creater, rating, movie, review, image } = await request.json();
  await connectToDB();
  console.log(creater)
  await Review.create({ creater, rating, movie, review,image });
  return NextResponse.json({ message: "Review Successfull" }, { status: 201 });
}