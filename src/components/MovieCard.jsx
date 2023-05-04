/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
import { useNavigate } from "react-router-dom";
import AddIcon from "../assets/add.svg";
import PlayIcon from "../assets/play.svg";
import StarIcon from "../assets/star.svg";

export default function MovieCard({ title, imgUrl, rating, id }) {
  const navigate = useNavigate();
  
  return (
    
    <div className="card" onClick={() => navigate(`/details/${id}`)}>
      <div className="img-container">
        <img className="image" src={`https://image.tmdb.org/t/p/w500${imgUrl}`} />
      </div>
      <div className="card-info">
        <p className="stars">
          <img className="imgIcon" src={StarIcon} />
          <span>{rating}</span>
        </p>

        <p className="title">{title}</p>
        <div className="action">
          <button className="watchlist">
            <img className="imgIcon" src={AddIcon} />
            <span>Watchlist</span>
          </button>
          <button className="trailer">
            <img className="imgIcon" src={PlayIcon} />
            <span>Trailer</span>
          </button>
        </div>
      </div>
    </div>
  );
}
