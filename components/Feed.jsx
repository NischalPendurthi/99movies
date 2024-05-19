"use client";

import { useState, useEffect } from "react";
import Results from '@components/Results'
const Feed = () => {
  const [allMovies, setAllMovies] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  
  const fetchMovies = async () => {
    try{
      const response = await fetch("http://localhost:3000/api/movies");
      const data = await response.json();
      console.log(data)
      setAllMovies(data);
    }
    catch(error){
      console.log('Error fetching data:', error)
    }
    
  };
  
  useEffect(() => {
    fetchMovies();
  }, []);

  const filterMovies = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allMovies.filter(
      (item) =>
        regex.test(item.genres) ||
        regex.test(item.title) ||
        regex.test(item.year)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterMovies(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  }

  
  return (
    <section className='feed'>
        <form className='flex justify-between px-5 max-w-6xl mx-auto'>
						<input
						  type='text'
						  placeholder='Search for a movie or genre'
						  value={searchText}
						  onChange={handleSearchChange}
						  required
						  className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'
						/>
					  </form>
    {searchText ? (
    <Results results={searchedResults}/>
    ) : (
      <Results results={allMovies}/>
    )}
    </section>
  )
}

export default Feed