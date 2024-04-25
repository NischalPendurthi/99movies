import Movie from "@models/movie";
import User from "@models/user"
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        await connectToDB()

        const movies = await Movie.find({})
        // if()
        return new Response(JSON.stringify(movies), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all movies", { status: 500 })
    }
} 