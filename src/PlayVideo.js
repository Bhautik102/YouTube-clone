import React from "react";
import "./PlayVideo.css";
import YouTube from "react-youtube";

function PlayVideo() {
  const opts = {
    height: "630",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  var url = window.location.href;
  const id = url.split("/").pop();

  console.log(id);

  return (
    <div className="playVideo">
      <YouTube videoId={id} opts={opts} />
    </div>
  );
}

export default PlayVideo;
