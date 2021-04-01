import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import HomeIcon from "@material-ui/icons/Home";
import Whatshot from "@material-ui/icons/Whatshot";
import Subscriptions from "@material-ui/icons/Subscriptions";
import {
  ExpandMore,
  ExpandMoreOutlined,
  Explore,
  History,
  OndemandVideo,
  ThumbDownAlt,
  ThumbDownAltOutlined,
  VideoLibrary,
  WatchLater,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <SidebarRow selected Icon={HomeIcon} title="Home" />
      </Link>
      <SidebarRow Icon={Explore} title="Explore" />
      <SidebarRow Icon={Subscriptions} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibrary} title="Library" />
      <SidebarRow Icon={History} title="History" />
      <SidebarRow Icon={OndemandVideo} title="Your videos" />
      <SidebarRow Icon={WatchLater} title="Watch Later" />
      <SidebarRow Icon={ThumbDownAltOutlined} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
