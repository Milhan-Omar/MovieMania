/* eslint-disable react/prop-types */
// import React from "react";
import StarIcon from "../assets/star.svg";
import NotFound from "../assets/not-found.jpeg";
import { useNavigate } from "react-router-dom";

const SmallMovieCard = ({imgUrl, date, rating, title, id}) => {
 const navigate = useNavigate();
  return (
    <div className="small-card" onClick={() => navigate(`/details/${id}`)}>
      <img
        className="small-img"
        src={imgUrl ? `https://image.tmdb.org/t/p/w500/${imgUrl}` : NotFound}
      />
      <div className="sm-info">
        <p>{title}</p>
        <div className="sm-date">
          <span>{date}</span>
          <div className="dot"/>
          <p className="stars">
            <img className="imgIcon-sm" src={StarIcon} />
            <span>{rating}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallMovieCard;
