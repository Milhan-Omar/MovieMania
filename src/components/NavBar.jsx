// import React from 'react'
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import NoPhoto from "../assets/no-photo.png";
import PlayIcon from "../assets/play.svg";
import { genres } from "../mock/constants";

const NavBar = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  // const list = ["Action", "Comedy", "Drama", "Fiction", "Animation"];

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.length) {
      navigate(`/search/${searchTerm}`)
    } else {
      inputRef.current.focus();
    }
  };

  return (
    <div className="nav">
      <div className="main-nav">
        <img onClick={() => navigate('/')} src={Logo} className="logo" />
        <div className="nav-links">
          {genres.map((item) => (
            <p key={item.id} className="link" onClick={() => navigate(`/genre/${item.name.toLocaleLowerCase()}/${item.id}`)}>{item.name}</p>
            ))}
        </div>
        <img src={NoPhoto} className="logo" />
      </div>
      <div className="main-search">
        <h1>Find Movies and More</h1>
        <form className="form" onSubmit={handleSearch}>
          <input ref={inputRef} type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <div className="search-btn" onClick={handleSearch}>
            {/* <img src={Logo} width={10} height={10} /> */}
            <img className="imgIcon" src={PlayIcon} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
