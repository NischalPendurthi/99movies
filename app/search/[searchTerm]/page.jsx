import Link from 'next/link';
import Movie from "@models/movie";
import { connectToDB } from "@utils/database";

import Results from '@/components/Results';


function findMaxIntersectionTitle(titles, query) {
  const queryChars = new Set(query.toLowerCase().split(''));
  let maxIntersection = 0;
  let maxTitle = null;

  for (const title of titles) {
    const titleChars = new Set(title.toLowerCase().split(''));
    const intersection = new Set([...titleChars].filter(char => queryChars.has(char)));
    const intersectionLen = intersection.size;

    if (intersectionLen > maxIntersection) {
      maxIntersection = intersectionLen;
      maxTitle = title;
    }
  }

  return maxTitle;
}

export const GET = async (request) => {
    // console.log(request)
    const decodedrequest = decodeURIComponent(request)
    // console.log(decodedrequest)
  try {
      await connectToDB()
      const query = { title: { $regex: new RegExp(decodedrequest, "i") } };
      const movies = await Movie.find(query)
      
      return new Response(JSON.stringify(movies), { status: 200 })
    } catch (error) {
      return new Response("Failed to fetch all movies", { status: 500 })
    }
  } 
  const titles = ['Anbe Sivam', 'Nayakan', 'Pather Panchali', 'Vikram Vedha', 'Raatchasan', 'The World of Apu', 'Manichitrathazhu', 'Pariyerum Perumal', '96', 'Thalapathi', 'Drishyam', 'Aruvi', 'Visaaranai', 'Thani Oruvan', 'The Unvanquished', 'Asuran', 'Vada Chennai', 'Kannathil Muthamittal', 'Kaithi', 'Dhuruvangal Pathinaaru', 'Peranbu', 'Premam', 'Soodhu Kavvum', 'Bangalore Days', 'Jigarthanda', 'Mahanati', 'Super Deluxe', 'Anniyan', 'Mudhalvan', 'Ustad Hotel', 'Sairat', 'Roja', 'Theeran Adhigaaram Ondru', 'Maheshinte Prathikaaram', 'Baashha', 'Bombay', 'Bommarillu', 'Lucia', 'Indian', 'Athadu', 'Arjun Reddy', 'Ulidavaru Kandanthe', 'Pizza', 'Vedam', 'Rangasthalam', 'Vaaranam Aayiram', 'Baahubali: The Beginning', 'K.G.F', 'Vettaiyaadu Vilaiyaadu', 'Baahubali 2: The Conclusion', 'Manam', 'Hey Ram', 'Okkadu', 'Charlie', 'Pokiri', 'Samsara', 'RangiTaranga', 'Eega', 'Intelligent Khiladi', '24', 'Magadheera', 'Thuppakki', 'Irudhi Suttru', 'Kaththi', '1: Nenokkadine', 'Ghilli', 'Ghajini', 'Geetha Govindam', 'Sivaji', 'Mankatha', 'Khaleja', 'Kireedam', 'Sandesham', 'Nadodikattu', 'Kumbalangi Nights', 'Devasuram', 'Chithram', 'Spadikam', 'In Harihar Nagar', 'Kilukkam', 'Thoovanathumbikal', 'Godfather', 'A Northern Story of Valour', 'Ramji Rao Speaking', 'Yoddha', 'Kaalapani', 'Guru', 'Bharatham', 'Thanmathra', 'Pranchiyettan and the Saint', 'Take Off', 'Namukku Parkkan Munthiri Thoppukal', 'Thaniyavartanam', 'Thondi Muthalum Driksakshiyum', 'Vadakkunokkiyantram', 'Android Kunjappan Version 5.25', 'Pathemari', 'Ee. Ma. Yau.', 'Sudani from Nigeria', 'Amaram']
  export default async function SearchPage({ params }) {
    const searchTerm = params.searchTerm;
    const decodedTerm = decodeURIComponent(searchTerm)
    const result = findMaxIntersectionTitle(titles, decodedTerm);
    const resq = await GET(result)
  const res = await GET(searchTerm)
  const data =  await res.json();
  const fata = await resq.json();
  console.log(fata[0].id)
  
  return (
    <div>
    {data && data.length === 0 && (
        <h1 className='text-center pt-6'>No such movies found,Do you mean <Link href={`/movie/${fata[0]._id}?id=${fata[0].id}`}>{result}</Link> </h1>
        
      )}
      {data && data.length > 0 && <Results results={data} />}
    </div>
  );
}