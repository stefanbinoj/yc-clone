import Link from "next/link";
import Image from "next/image";
import AuthBtn from "./authBtn";
const Navbar =  () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          <AuthBtn />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;