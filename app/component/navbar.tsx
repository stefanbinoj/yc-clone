import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next";
import { authOptions } from '../api/auth/[...nextauth]/options';

const Navbar = async() => {
    const session = await getServerSession(authOptions);
    return (
    <header className='shadow-xl font-work-sans bg-white text-black px-5 py-3 text-xl'>
        <nav className='flex justify-betweeen item-center' >
            <Link href="/">
                <Image src="/logo.png" alt="logo" height={30} width={144} />
            </Link>

            <div className='flex item-center gap-5'>
                {session && session.user? (
                    <>
                        <Link href='/startup/create'><span>create</span></Link>
                        <button onClick={signOut} ><span>sign out</span></button>
                        <Link href={`/user/${session?._id}/`}><span>{session?.user?.name}</span></Link>
                    </>
                ) : (
                <>
                    

                </>)
                }
            </div>
        </nav>

    
    </header>
  )
}

export default Navbar