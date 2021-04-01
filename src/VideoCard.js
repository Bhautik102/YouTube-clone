import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";
import PlayVideo from "./PlayVideo";

function VideoCard({ image, title, channel, views, timestamp, channelImage, param}) {
  const [video, setVideo] = useState("");

  return (
    <Link to={`/PlayVideo/${param}`} style={{ textDecoration: "none" }}>
      <div className="videoCard">
        <img className="videoCard_thumbnail" src={image} alt="" />
        <div className="videoCard_info">
          <Avatar
            className="videoCard_avatar"
            alt={channel}
            src={channelImage}
          />
          <div className="videoCard_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views} . {timestamp}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
