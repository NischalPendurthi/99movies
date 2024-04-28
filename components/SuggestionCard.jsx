import Link from "next/link"
import { FiThumbsUp } from 'react-icons/fi';

export default function SuggestionCard({result}) {
  return (
    <div className="w-full max-w-[1200px] mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
          
          <img
            alt="Movie poster"
            className="[grid-area:stack] object-cover w-full aspect-[4/2] sm:rounded-t-lg"
            height="1200"
            src={result.img_link}
            width="1200"
          />
          <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-90 transition-opacity text-white p-4 lg:p-8 justify-end flex flex-col gap-2">
            <h3 className="font-semibold tracking-tight text-2xl">{result.title}</h3>
            <div className="flex items-center gap-1">
            <FiThumbsUp className='h-5 mr-1 ml-3' />
              <span className="text-sm ml-2">{result.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}