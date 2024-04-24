"use client";
// import json
import { useState, useEffect } from "react";
import Results from '@components/Results'
const Feed = () => {
    const [allPosts, setAllPosts] = useState([]);
    const fetchPosts = async () => {
        try{
            const response = await fetch("./data.json");
            const data = await response.json();
            setAllPosts(data);
        }
        catch(error){
            console.log('Error fetching data:', error)
        }
    
      };
    
      useEffect(() => {
        fetchPosts();
      }, []);
      
  return (
    <Results results={allPosts}/>
  )
}

export default Feed