import NavBar from "../components/NavBar";
import Sections from "../components/Sections";
import { now_playing, popular, top_rated, upcoming } from "../mock/movieData";

const Home = () => {
  return (
    <>
      <NavBar />
      <Sections allData={[now_playing, popular, top_rated, upcoming]} />
    </>
  );
};

export default Home;
