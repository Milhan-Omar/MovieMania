import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Genre from "./pages/Genre";
import NoFound from "./pages/NoFound";
import Search from "./pages/Search";
import Trailers from "./pages/Trailers";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/search/:name" element={<Search />}/>
      <Route path="/details/:id" element={<Details />}/>
      <Route path="/trailers/:id" element={<Trailers />}/>
      <Route path="/genre/:name/:id" element={<Genre />}/>
      <Route path="*" element={<NoFound />}/>
    </Routes>
  );
}

export default App;
