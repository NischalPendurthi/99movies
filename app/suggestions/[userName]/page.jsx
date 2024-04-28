import Link from 'next/link';
import Movie from "@models/movie";
import Review from "@models/review"
import { connectToDB } from "@utils/database";
import Results from '@/components/Results';
import SuggestionCard from '@/components/SuggestionCard'

export const GETReview = async (request) => {
    
    try {
        await connectToDB()
        
        const reviews = await Review.find({creater: request})
        return new Response(JSON.stringify(reviews), { status: 200 })
      } catch (error) {
        return new Response("Failed to fetch all reviews", { status: 500 })
      }
    }
  export const GET = async (request) => {
    try {
        await connectToDB()
        const query = { title: { $regex: new RegExp(request, "i") } };
        const movies = await Movie.find(query)
      //   console.log(movies)
        return new Response(JSON.stringify(movies), { status: 200 })
      } catch (error) {
        return new Response("Failed to fetch all movies", { status: 500 })
      }
    }
    export const GETGenre = async (request) => {
      try {
          await connectToDB()
          const query = { genres: { $regex: new RegExp(request, "i") } };
          const movies = await Movie.find(query)
        //   console.log(movies)
          return new Response(JSON.stringify(movies), { status: 200 })
        } catch (error) {
          return new Response("Failed to fetch all movies", { status: 500 })
        }
      }


export default async function SuggestionPage({ params }) {
    const name = params.userName;
    const dname = decodeURIComponent(name)
    const rev = await GETReview(dname)
    const reviews = await rev.json()
    const titles = reviews.map(review => review.movie);
    // console.log(titles)
    const findMoviesForTitles = async () => {
      const allMovies = [];
    
      for (const title of titles) {
        try {
          const response = await GET(title);
          const movies = await response.json();
          allMovies.push(...movies);
        } catch (error) {
          console.error(`Error fetching movies for title ${title}:`, error);
        }
      }
    
      return allMovies;
    };
    
    const movies = await findMoviesForTitles();
    // console.log(movies)
    const genres = movies.map(movie => movie.genres);
    // console.log(genres)
    function findMostCommonWord(genresArray) {
      // Create an object to store word counts
      const wordCounts = {};
    
      // Iterate over each genre string
      for (const genreString of genresArray) {
        // Split the genre string into words
        const words = genreString.split(' | ');
        // console.log(words)
    
        // Increment the count for each word
        for (const word of words) {
          wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
      }
    
      // Find the word with the highest count
      let mostCommonWord = null;
      let maxCount = 0;
    
      for (const word in wordCounts) {
        if (wordCounts[word] > maxCount) {
          mostCommonWord = word;
          maxCount = wordCounts[word];
        }
      }
    
      return mostCommonWord;
    }
    const result = findMostCommonWord(genres);
    console.log(`The most common word is: ${result}`);
    const sugg = await GETGenre(result)
    const suggestions = await sugg.json()
    // console.log(suggestions)
    const limitSuggestions = suggestions.slice(20, 25).concat([]);
    console.log(limitSuggestions)

    
      
  return (
    <div>
      <h4 className="text-lg font-semibold">Your Suggestions</h4>
      <Results results={limitSuggestions}/>
    </div>
  )
}

