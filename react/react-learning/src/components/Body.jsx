import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import requests from "../Backend/requests.jsx";

console.log("Requests object:", requests);

const Body = () => {
  const [movies, setMovies] = useState([]);
  console.log("Movies state:", movies);

  const fetchMovies = async () => {
    axios
      .get(requests.requestTopRated)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
      fetchMovies();
    }, []);

  return (
    <>
     
       
      {movies.map((elem) => {
        return (
          <>
            <div>
              <img className="w-full p-0.5"
                src={`https://image.tmdb.org/t/p/w500/${elem.backdrop_path}`}
                alt="image"
              />
            </div>
          </>
        );
      })}
    </>
  );
};

export default Body;
