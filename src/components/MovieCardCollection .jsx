/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";
function MovieCardCollection({ movieData }) {
  return (
    <div className="allcards">
      {movieData.map((data) => (
          <MovieCard 
           key={data.id}
           title={data.original_title}
           imgUrl={data.poster_path}
           rating={data.vote_average}
           id={data.id}
          />
      ))}
    </div>
  );
}

export default MovieCardCollection;
