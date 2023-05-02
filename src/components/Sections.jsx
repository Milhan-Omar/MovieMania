/* eslint-disable react/prop-types */
import Section from "./Section";

const Sections = ({allData}) => {
  return (
   <div className="main">      
      {allData.map((data, i) => <Section key={i} sectionData={data}/>)}
    </div>
  );
};

export default Sections;
