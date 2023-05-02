import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import NoFound from "./pages/NoFound";
import Search from "./pages/Search";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/search/:name" element={<Search />}/>
      <Route path="/genre/:name/:id" element={<Genre />}/>
      <Route path="*" element={<NoFound />}/>
    </Routes>
  );
}

export default App;
