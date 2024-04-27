"use client"

import Link from 'next/link';
import Image from 'next/image';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';
import {signIn,signOut,useSession,getProviders} from "next-auth/react"
import {useState,useEffect} from "react"


export default function Header() {
    const { data: session} = useSession();
// alert(session)
const [providers,setProviders] = useState(null)

useEffect(()=>{
    const setUpProviders = async () => {
        const response = await getProviders()
        setProviders(response)
    }
    setUpProviders()
})
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
        <MenuItem title='home' address='/' Icon={AiFillHome} />
        <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex items-center gap-4'>
        <DarkModeSwitch />
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
            99movies
          </span>
          {/* <span className='text-xl hidden sm:inline'>Sign In</span> */}
        </Link>
        {session?.user ? (
                <div className="flex gap-3 md:gap-5">
                    
                    
                    <Link href="/write-review/id"
                    className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
                        Rate Movies
                    </Link>
                    <button type="button" onClick={signOut} className="text-xl">
                        Sign Out
                    </button>
                    <Link href="/profile" >
                        <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                        />

                        
                    </Link>
                </div>
            ):(
                <>
                <div className="flex gap-3 md:gap-5">
                    
                {providers && 
                 Object.values(providers).map((provider) => (
                    <button
                     type="button"
                     key={provider.name}
                     onClick={()=>signIn(provider.id)}
                     className="text-xl"
                     >
                        Sign In
                    </button>
                ))}
                </div>
                </>
            )}
      </div>
    </div>
  );
}