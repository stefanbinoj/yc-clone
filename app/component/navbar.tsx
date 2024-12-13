"use client"
import Link from "next/link";
import Image from "next/image";
import { signIn , signOut , useSession } from "next-auth/react";

const Navbar =  () => {
  const { data: session, status } = useSession();


  const handleSignIn = () =>{
    signIn('github',{redirect : false})
  }

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                
              </Link>

              <button onClick={handleSignIn}>Log out</button>

              <Link href={`/user/${session?.user?._id}`}>
                pfp
              </Link>
            </>
          ) : (
            
              <button onClick={handleSignIn}>Login</button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;