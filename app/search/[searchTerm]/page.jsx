
import Movie from "@models/movie";
import { connectToDB } from "@utils/database";


import Results from '@/components/Results';
export const GET = async (request) => {
    console.log(request)
  try {
      await connectToDB()
      const query = { title: { $regex: new RegExp(request, "i") } };
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
    {data &&
        data.length ===
        <h1 className='text-center pt-6'>No data found</h1>}
      {data && <Results results={data} />}
    </div>
  );
}