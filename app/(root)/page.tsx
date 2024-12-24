import Image from "next/image";
import SearchElement from "../component/SearchElement";

export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {
  const query = (await searchParams).query
  return (
  <div className="flex flex-col items-center">
    <h1 className="self-center pt-5">Home</h1>
    <SearchElement query={query}/>
  </div>  
  
  );
}
