/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../mock/constants";
import SmallMovieCard from "../components/SmallMovieCard";

const Genre = () => {
  const { name, id } = useParams();
  const [searchedData, setSearchedData] = useState([]);

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`
    )
      .then((res) => res.json())
      .then((data) => setSearchedData(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="collection-main">
      <h1 className="collection-name">{name}</h1>
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
  );
};

export default Genre;