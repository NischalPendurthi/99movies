import Movie from "@models/movie";
import User from "@models/user"
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

const searchTerm = 'Baahu';
const regex = new RegExp(`^${searchTerm}`, 'i');
export const GET = async (request) => {
    try {
        await connectToDB()

        const movies = await Movie.find({name: { $regex: regex }})
        
        return new Response(JSON.stringify(movies), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all movies", { status: 500 })
    }
} 


// const searchTerm = 'Baahu';
// const regex = new RegExp(`^${searchTerm}`, 'i'); // 'i' flag for case-insensitive search

// // Using mongoose
// MovieModel.find({ name: { $regex: regex } }, (err, movies) => {
//   if (err) {
//     // Handle error
//   } else {
//     // Use the fetched movies data
//     console.log(movies);
//   }
// });