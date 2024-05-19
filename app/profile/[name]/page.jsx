

import Link from 'next/link';
import Image from 'next/image';
import { connectToDB } from "@utils/database";
import Review from '@models/review';
import User from "@models/user";
import ReviewCard from '@components/ReviewCard';



export const GETReview = async (request) => {
    
    try {
        await connectToDB()
        
        const reviews = await Review.find({creater: request})
        return new Response(JSON.stringify(reviews), { status: 200 })
      } catch (error) {
        return new Response("Failed to fetch all reviews", { status: 500 })
      }
    }
export const GETUser= async (request) => {
    
    try {
        await connectToDB()
        
        const users = await User.find({ username: request });
        return new Response(JSON.stringify(users), { status: 200 })
      } catch (error) {
        return new Response("Failed to fetch all users", { status: 500 })
      }
    }


export default async function Component({params}) {
    const name = params.name;
    const dname = decodeURIComponent(name)
    
    const res = await GETUser(dname)
    const user = await res.json()
    const res2 = await GETReview(dname)
    const reviews = await res2.json()
    console.log(user)
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
    
    return (
        <>
      <h2 className='head_text text-left'>
        <span className='blue_gradient'>Your Profile</span>
      </h2>
      <section className='w-full'>
      
      <p className='desc text-left'></p>
      <img
              alt="Cody Nolan"
              className="rounded-full"
              height={64}
              width={64}
  
              src={user[0].image}
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
            />
                <h3 className="text-lg font-semibold">{user[0].username}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{user[0].email}</p>
      </section>
      <h4 className="text-lg font-semibold"> Your Reviews</h4>
      {reviews.length === 0 ?(
      <h1 className='text-center pt-6'>Users not reviewed this movie,Wanna review it <Link href="/write-review/review">Give a Review</Link> </h1>
    ):(<>
      <div>{renderReviews()}</div>
      <Link href={`/suggestions/${user[0].username}`} className='flex justify-center'>
            <button className="flex bg-orange-500 hover:bg-orange-700 text-white text-lg text-center font-bold py-2 px-4 rounded">
              Get Suggestions
            </button>
            </Link>
            <br />
            <br />
      </>
    )}
      </>
    )
  }