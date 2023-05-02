/* eslint-disable react/prop-types */
import MovieCardCollection from './MovieCardCollection '
import ArrowRight from "../assets/arrow-right.svg";


const Section = ({sectionData}) => {
  return (
   <div className="section">
   <h3 className="section-title">
       <span>{sectionData.name}</span>
       <img className="imgIcon" src={ArrowRight} />
     </h3>
      <MovieCardCollection movieData={sectionData.results} />
   </div>
  )
}

export default Section