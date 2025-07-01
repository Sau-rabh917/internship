import React, { use } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import requests from "../Backend/requests.jsx";

console.log("Requests object:", requests);

const About = () => {
  const [movies, setMovies] = useState("");
  console.log("Movies state:", movies);

  const fetchMovies = async () => {
    axios
      .get("localhost:3000/" )
      .then((response) => setMovies(response))
      .catch((error) => console.error("Error fetching data:", error));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
{/*     
      {movies.map((elem) => {
        return (
          <> */}
            <div>
              {/* <img className="w-full p-0.5"
                src={`https://image.tmdb.org/t/p/w500/${elem.backdrop_path}`}
                alt="image"
              /> */}
              {movies}
            </div>
          {/* </> */}
    </>
  );
};

export default About;
