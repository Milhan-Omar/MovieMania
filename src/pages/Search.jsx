/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useLocation, useParams } from "react-router-dom";
import { apiKey } from "../mock/constants";

import SmallMovieCard from "../components/SmallMovieCard";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Search = () => {
  const { name } = useParams();
  const {pathname} = useLocation();
  const [searchedData, setSearchedData] = useState([]);

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setSearchedData(data.results));
  };

  useEffect(() => {
    fetchData();
  }, [pathname]);

  return (
    <>
      <NavBar />
      <div className="collection-main">
        <h1 className="collection-name">Search results for {`"${name}"`}</h1>
        <div className="sm-cards-collections">
          {searchedData.map((data) => (
            <SmallMovieCard
              key={data.id}
              title={data.original_title}
              imgUrl={data.poster_path}
              rating={data.vote_average}
              id={data.id}
              date={data.release_date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
