import requests from "./requests";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [urldata, seturldata] = useState([]);
  console.log(urldata);

  const getdata = async () => {
    await axios
      .get(requests.requestPopular)
      .then((response) => {
       return seturldata(response.data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }; 
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      
      
        {urldata.map((elem) => {
          console.log(elem.backdrop_path)
         return (
        <div className="w-full h-screen flex flex-col"><img key={elem.id} src={`https://image.tmdb.org/t/p/w500/${elem?.backdrop_path}`} alt="" /></div>

          
        )})}
    
    </>
  );
};

export default Home;