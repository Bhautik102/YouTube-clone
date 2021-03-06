import { Avatar } from "@material-ui/core";
import { MusicNoteRounded } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./VideoRow.css";

function VideoRow({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  description,
  param
}) {
  return (
    <Link
      to={`/PlayVideo/${param}`}
      className="videoRow"
      style={{ textDecoration: "none" }}
    >
        <img className="videoRow_thumbnail" src={image} alt="" />
        <div className="videoRow_info">
          <h4>{title}</h4>
          <p>
            {views} . {timestamp}
          </p>
          <div className="videoRow_channel">
            <Avatar
              className="videoRow_avatar"
              alt={channel}
              src={channelImage}
            />
            <p>{channel}</p>
            <MusicNoteRounded />
          </div>
          <p>{description}</p>
        </div>
    </Link>
  );
}

export default VideoRow;
