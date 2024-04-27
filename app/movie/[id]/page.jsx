import Link from 'next/link';
import Image from 'next/image';
import Movie from "@models/movie";
import User from "@models/user";
import { connectToDB } from "@utils/database";

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
      
      const reviews = await Review.find({})
      return new Response(JSON.stringify(reviews), { status: 200 })
    } catch (error) {
      return new Response("Failed to fetch all reviews", { status: 500 })
    }
  }
  export const GETUserImage= async (creaters) => {
    
    try {
        await connectToDB()
        
        const users = await User.find({ username: { $in: creaters } });
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
    // console.log(searchTerm)
    const res = await GET(searchTerm)
    const rev = await GETReview()
    const review =  await rev.json();
    const creaters = await extractCreaters(review);
    const user = await GETUserImage(creaters)
    
    const users = await user.json();
    const data =  await res.json();
    const movie = await data[0];
    console.log(users)

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
              : movie.rating}</span>
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
      <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">What Our Customers Are Saying</h2>
    </div>
    <ul role="list"
      className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
      <li>
        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                <path
                  d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                </path>
              </svg>
              <blockquote className="relative">
                <p className="text-lg tracking-tight text-slate-900">{review[0].review}</p>
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <div className="font-display text-base text-slate-900">{review[1].creater}</div>
                </div>
                <div className="overflow-hidden rounded-full bg-slate-50">
                <Image 
                    alt=""
                    className="h-14 w-14 object-cover"
                    style={{color: 'transparent'}}
                    src="https://randomuser.me/api/portraits/women/15.jpg"
                    width={56}
                    height={56}
                    />
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </li>
      <li>
        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                <path
                  d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                </path>
              </svg>
              <blockquote className="relative">
                <p className="text-lg tracking-tight text-slate-900">As a professional athlete, I rely on high-performance
                  gear for my training. This site offers a great selection of top-notch products.</p>
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <div className="font-display text-base text-slate-900">Leland Kiehn</div>
                </div>
                <div className="overflow-hidden rounded-full bg-slate-50">
                <Image 
                    alt=""
                    className="h-14 w-14 object-cover"
                    style={{color: 'transparent'}}
                    src="https://randomuser.me/api/portraits/women/15.jpg"
                    width={56}
                    height={56}
                    />                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </li>
      <li>
        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                <path
                  d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                </path>
              </svg>
              <blockquote className="relative">
                <p className="text-lg tracking-tight text-slate-900">The fitness apparel I bought here fits perfectly and
                  feels amazing. I highly recommend this store to anyone looking for quality gear.</p>
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <div className="font-display text-base text-slate-900">Peter Renolds</div>
                </div>
                <div className="overflow-hidden rounded-full bg-slate-50">
                <Image 
                    alt=""
                    className="h-14 w-14 object-cover"
                    style={{color: 'transparent'}}
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    width={56}
                    height={56}
                    />                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</section>
        </>
  )
}
  