"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";


export default function Card({ result }) {
  const { data: session } = useSession();

  const router = useRouter();

  const handleProfileClick = () => {

    router.push(`/movie/${result.title}`)
  };
  const handleRate = () => {

    router.push(`/wirte-movie/${result.title}`)
  };
  const handleWatch= () => {

    router.push(`/movie/${result._id}`)
  };
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      
        <Image
          src={result.img_link}
          alt='card'
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-75  transition-opacity duration-300'
          onClick={handleProfileClick}
          
        ></Image>
        <div className='p-2'>
          <p className='line-clamp-2 text-md'>{result.summary}</p>
          <h2 className='text-lg font-bold truncate'>
            {result.title}
          </h2>
          <p className='flex items-center'>
            {result.year}
            <FiThumbsUp className='h-5 mr-1 ml-3' />
            {result.rating === 'Rate' || result.rating === null
              ? (Math.random() * 1 + 3).toFixed(1)
              : result.rating}
          </p>
          {session?.user ?(
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm  cursor-pointer'
            onClick={handleRate}
          >
            Rate it
          </p>
          <p
            className='font-inter text-sm  cursor-pointer'
            // onClick={handleWatch}
          >
            Add to Watchlist
          </p>
        </div>
      ):(
        <>
        </>
      )}
        </div>
      
    </div>
  );
}