import Link from 'next/link';
import Image from 'next/image';
import Movie from "@models/movie";
import User from "@models/user";
import { connectToDB } from "@utils/database";
import ReviewCard from '@components/ReviewCard';
import ReviewCards from '@components/ReviewCards';

import Results from '@/components/Results';
import Review from '@models/review';

function UsersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
  function StarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }
  function UserIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }
export const GET = async (request) => {
    const decodedrequest = decodeURIComponent(request)
  try {
      await connectToDB()
      const query = { title: { $regex: new RegExp(decodedrequest, "i") } };
      const movies = await Movie.find(query)
    //   console.log(movies)
      return new Response(JSON.stringify(movies), { status: 200 })
    } catch (error) {
      return new Response("Failed to fetch all movies", { status: 500 })
    }
  }
  export const GETReview = async (request) => {
    
  try {
      await connectToDB()
      
      const reviews = await Review.find({movie: request})
      return new Response(JSON.stringify(reviews), { status: 200 })
    } catch (error) {
      return new Response("Failed to fetch all reviews", { status: 500 })
    }
  }
  export const GETUserImage= async (creaters) => {
    
    try {
        await connectToDB()
        
        const users = await User.find({ username: { $in: Object.values(creaters) } });
        return new Response(JSON.stringify(users), { status: 200 })
      } catch (error) {
        return new Response("Failed to fetch all users", { status: 500 })
      }
    }
  export  async function extractCreaters(reviews) {
    const creaters = [];
    for (const review of reviews) {
        if (review.creater) { // Check if the review has a 'creater' property
            creaters.push(review.creater);
        }
    }
    return creaters;
}
  export default async function MoviePage({ params }) {
    const searchTerm = params.id;
    const dname = decodeURIComponent(searchTerm)
    // console.log(searchTerm)
    const res = await GET(searchTerm)
    const rev = await GETReview(dname)
    const reviews =  await rev.json();
    
    const data =  await res.json();
    const movie = await data[0];
    console.log(reviews)
    async function renderReviews() {
      return reviews.map((review, index) => (
        <ReviewCard
          key={index}
          review={review}
          
          i={index}
        />
      ));
    }
    // console.log(rcreaters)
    // console.log(creaters)


    return (
        <>
        <div className="relative h-[500px] overflow-hidden rounded-lg">
        <img
        alt="Movie Poster"
        className="h-full w-full object-cover"
        height={1080}
        src={movie.img_link}
        style={{
        aspectRatio: "1920/1080",
        objectFit: "cover",
        }}
        width={1920}
        />
        <img 
        src={movie.img_link} 
        alt="Small Overlay Image" 
        class="overlay-image" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 py-8 md:px-12 md:py-12">
        <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-white md:text-5xl">{movie.title}</h1>
        <div className="mt-4 flex items-center space-x-4 text-gray-300">
        <div>{movie.year}</div>
        <div className="h-4 w-px bg-gray-500" />
        <div>{movie.duration} min</div>
        <div className="h-4 w-px bg-gray-500" />
        <div className="flex items-center space-x-1">
        <StarIcon className="h-5 w-5 fill-yellow-500" />
        <span>{movie.rating === 'Rate' || movie.rating === null
              ? (Math.random() * 7 + 3).toFixed(1)
              : movie.rating} [IMDB]</span>
        </div>
        <div className="h-4 w-px bg-gray-500" />
        <div>{movie.genres}</div>
        </div>
        </div>
        </div>
        </div>
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
        <div>
        <h2 className="text-2xl font-bold">About the Movie</h2>
        <p className="mt-4 text-gray-600">
        {movie.summary}
        </p>
        <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-2">
        <UserIcon className="h-5 w-5 text-gray-500" />
        <span className="text-gray-600">Directed by {movie.director}</span>
        </div>
        <div className="flex items-center space-x-2">
        <UsersIcon className="h-10 w-10 text-gray-500" />
        <span className="text-gray-600">Starring {movie.cast}</span>
        </div>
        </div>
        </div>
        <div>
        <h2 className="text-2xl font-bold">Synopsis</h2>
        <p className="mt-4 text-gray-600">
        {movie.summary}
        </p>
        </div>
        </div>
        </div>
        <section id="testimonials" aria-label="What our customers are saying" class="bg-slate-50 py-20 sm:py-32">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl md:text-center">
      <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">What Our Users Are Saying</h2>
    </div>
    
      
      
    {reviews.length === 0 ?(
      <h1 className='text-center pt-6'>Users not reviewed this movie,Wanna review it <Link href="/write-review/review">Give a Review</Link> </h1>
    ):(
      <div>{renderReviews({reviews})}</div>
    )}
      
    
  </div>
</section>
        </>
  )
}
  