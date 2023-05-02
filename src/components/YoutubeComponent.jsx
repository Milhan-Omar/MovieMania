/* eslint-disable react/prop-types */
import YouTube from "react-youtube";

const YoutubeComponent = ({ videoId }) => {
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };
  const opts = {
    height: "770px",
    width: "1450px",
  };
  return (
    <YouTube
      videoId={videoId}
      // className="trailer2"
      opts={opts}
      onReady={onPlayerReady}
    />
  );
};

export default YoutubeComponent;
