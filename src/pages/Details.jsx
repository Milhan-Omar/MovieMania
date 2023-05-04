/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { apiKey } from "../mock/constants";

import { useNavigate, useParams } from "react-router-dom";
import PlayIcon from "../assets/play.svg";

const Details = () => {
  const [detailsData, setDetailsData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`
    )
      .then((res) => res.json())
      .then((data) => setDetailsData(data));
  };

  const goToTrailers = () => navigate(`/trailers/${detailsData.id}`);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [])
  

  console.log(detailsData);
  if (detailsData)
    return (
      <div className="details-page">
        <div className="img-wrapper">
          <img
            className="backDrop-img"
            src={`https://image.tmdb.org/t/p/original/${detailsData.backdrop_path}`}
          />
          <div className="play" onClick={goToTrailers}>
            <img className="imgIcon-big" src={PlayIcon} />
          </div>
        </div>
        <div className="det-card">
          <div className="detail-img-card">
            <img
              className="img-detail"
              src={`https://image.tmdb.org/t/p/w500/${detailsData.poster_path}`}
            />
          </div>
          <div className="detail-card-info">
            <div className="btn-watch" onClick={goToTrailers}>
              <img className="play--watch" src={PlayIcon} />
              <p>Watch trailers</p>
            </div>
            <h3 className="detail-title">{detailsData.original_title}</h3>
            <p>{detailsData.overview}</p>
            <p>Released: {detailsData.release_date} </p>
            <div className="grp">
              <p>Genre: </p>
              <div className="grp-wrapper">
                {detailsData?.genres?.map((genre, i) => (
                  <span key={i}>{genre.name},</span>
                ))}
              </div>
            </div>
            <div className="grp">
              <p>Country: </p>
              <div className="grp-wrapper">
                {detailsData?.production_countries?.map((item, i) => (
                  <span key={i}>{item.name}</span>
                ))}
              </div>
            </div>
            <div className="grp">
              <p>Production: </p>
              <div className="grp-wrapper">
                {detailsData?.production_companies?.map((item, i) => (
                  <span key={i}>{item.name},</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return <></>;
};

export default Details;
