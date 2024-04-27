
import Movie from "@models/movie";
import { connectToDB } from "@utils/database";

import Results from '@/components/Results';
export const GET = async (request) => {
    console.log(request)
    const decodedrequest = decodeURIComponent(request)
    console.log(decodedrequest)
  try {
      await connectToDB()
      const query = { title: { $regex: new RegExp(decodedrequest, "i") } };
      const movies = await Movie.find(query)
      return new Response(JSON.stringify(movies), { status: 200 })
  } catch (error) {
      return new Response("Failed to fetch all movies", { status: 500 })
  }
} 
export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  
  const res = await GET(searchTerm)
  const data =  await res.json();
  
  return (
    <div>
    {data && data.length === 0 && (
        <h1 className='text-center pt-6'>No such movies found</h1>
      )}
      {data && data.length > 0 && <Results results={data} />}
    </div>
  );
}