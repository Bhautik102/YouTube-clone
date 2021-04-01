import { Avatar, Button, IconButton } from "@material-ui/core";
import {
  CheckCircleOutline,
  MusicNoteRounded,
  MusicNoteTwoTone,
  Notifications,
  NotificationsNoneOutlined,
} from "@material-ui/icons";
import React from "react";
import "./ChannelRow.css";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow_logo" src={image} alt={channel} />

      <div className="channelRow_text">
        <h4>
          {channel} {verified && <MusicNoteRounded />}
        </h4>
        <p>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>

      <div className="channelRow_subscribe">
        <button className='subscribe'>SUBSCRIBE</button>
        <IconButton>
          <NotificationsNoneOutlined />
        </IconButton>
      </div>
    </div>
  );
}

export default ChannelRow;
