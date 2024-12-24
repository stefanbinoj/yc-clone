"use client"
import React from 'react'
import Link from "next/link";
import { signIn , signOut , useSession } from "next-auth/react";


const AuthBtn  = () => {
    const { data: session, status } = useSession();

  return (
    <>
    {session && session?.user ? (
        <>
          <Link href="/startup/create">
            <span className="max-sm:hidden">Create</span>
            
          </Link>

          <button onClick={()=> signOut()}>Log out</button>

          <Link href={`/user/${session?.user?._id}`}>
            {session.user.name}
          </Link>
        </>
      ) : (
        
          <button onClick={()=>signIn('github')}>Login</button>
      )}
      </>
  )
}

export default AuthBtn