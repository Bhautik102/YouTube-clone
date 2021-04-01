import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import {
  Apps,
  Notifications,
  SearchOutlined,
  VideoCall,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <img
            className="header_logo"
            src="https://www.scottbuckley.com.au/wp-content/uploads/transparent-background-youtube-logo-4.png"
            alt="logo"
          />
        </Link>
      </div>

      <div className="header_input">
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchOutlined className="header_inputButton" />
        </Link>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>

      <div className="header_icons">
        <IconButton>
          <VideoCall />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
