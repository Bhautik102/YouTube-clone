import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlined />
        <h2>FILTERS</h2>
      </div>

      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwniHWfpc4XCCwOEC1h7A2MiUb6psKob7TSPFJ54ZYA=s88-c-k-c0x00ffffff-no-rj"
        channel="TheFatRat"
        verified
        subs="5.35M"
        noOfVideos="88"
        description="TheFatRat is the EDM moniker of Göttingen, Germany's Christian Büttner, whose music ranges from euphoric progressive house ..."
      />

      <hr />

      <h3>Latest from TheFatRat</h3>

      <VideoRow
        param="DT61L8hbbJ4"
        image="https://i.ytimg.com/vi/DT61L8hbbJ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8E6Kv_X3EKzBlz2PnQtL8D0uxDw"
        title="TheFatRat - MAYDAY feat. Laura Brehm"
        channel="TheFatRat"
        views="174M views"
        timestamp="5 years ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniHWfpc4XCCwOEC1h7A2MiUb6psKob7TSPFJ54ZYA=s88-c-k-c0x00ffffff-no-rj"
        description="... The Arcadium's music to fanmail@the-arcadium.de #thefatrat #fatrat #laurabrehm #thecalling #music #gamingmusic #freemusic ..."
      />
      <VideoRow
        param="B7xai5u_tnk"
        image="https://i.ytimg.com/vi/B7xai5u_tnk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBc0wrfRpdhzbEk69YAg7R04HfFgg"
        title="TheFatRat - Monody (feat. Laura Brehm)"
        channel="TheFatRat"
        views="174M views"
        timestamp="5 years ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniHWfpc4XCCwOEC1h7A2MiUb6psKob7TSPFJ54ZYA=s88-c-k-c0x00ffffff-no-rj"
        description="... The Arcadium's music to fanmail@the-arcadium.de #thefatrat #fatrat #laurabrehm #thecalling #music #gamingmusic #freemusic ..."
      />
      <VideoRow
        param="KR-eV7fHNbM"
        image="https://i.ytimg.com/vi/KR-eV7fHNbM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkMgNKzQQCEjff29exYRizUj96AQ"
        title="TheFatRat - The Calling (feat. Laura Brehm)"
        channel="TheFatRat"
        views="174M views"
        timestamp="5 years ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniHWfpc4XCCwOEC1h7A2MiUb6psKob7TSPFJ54ZYA=s88-c-k-c0x00ffffff-no-rj"
        description="... The Arcadium's music to fanmail@the-arcadium.de #thefatrat #fatrat #laurabrehm #thecalling #music #gamingmusic #freemusic ..."
      />
      <VideoRow
        param="DT61L8hbbJ4"
        image="https://i.ytimg.com/vi/DT61L8hbbJ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8E6Kv_X3EKzBlz2PnQtL8D0uxDw"
        title="TheFatRat - MAYDAY feat. Laura Brehm"
        channel="TheFatRat"
        views="174M views"
        timestamp="5 years ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniHWfpc4XCCwOEC1h7A2MiUb6psKob7TSPFJ54ZYA=s88-c-k-c0x00ffffff-no-rj"
        description="... The Arcadium's music to fanmail@the-arcadium.de #thefatrat #fatrat #laurabrehm #thecalling #music #gamingmusic #freemusic ..."
      />
      <VideoRow
        param="B7xai5u_tnk"
        image="https://i.ytimg.com/vi/B7xai5u_tnk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBc0wrfRpdhzbEk69YAg7R04HfFgg"
        title="TheFatRat - Monody (feat. Laura Brehm)"
        channel="TheFatRat"
        views="174M views"
        timestamp="5 years ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniHWfpc4XCCwOEC1h7A2MiUb6psKob7TSPFJ54ZYA=s88-c-k-c0x00ffffff-no-rj"
        description="... The Arcadium's music to fanmail@the-arcadium.de #thefatrat #fatrat #laurabrehm #thecalling #music #gamingmusic #freemusic ..."
      />
      <VideoRow
        param="KR-eV7fHNbM"
        image="https://i.ytimg.com/vi/KR-eV7fHNbM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkMgNKzQQCEjff29exYRizUj96AQ"
        title="TheFatRat - The Calling (feat. Laura Brehm)"
        channel="TheFatRat"
        views="174M views"
        timestamp="5 years ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniHWfpc4XCCwOEC1h7A2MiUb6psKob7TSPFJ54ZYA=s88-c-k-c0x00ffffff-no-rj"
        description="... The Arcadium's music to fanmail@the-arcadium.de #thefatrat #fatrat #laurabrehm #thecalling #music #gamingmusic #freemusic ..."
      />
      <VideoRow
        param="B7xai5u_tnk"
        image="https://i.ytimg.com/vi/B7xai5u_tnk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBc0wrfRpdhzbEk69YAg7R04HfFgg"
        title="TheFatRat - Monody (feat. Laura Brehm)"
        channel="TheFatRat"
        views="174M views"
        timestamp="5 years ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniHWfpc4XCCwOEC1h7A2MiUb6psKob7TSPFJ54ZYA=s88-c-k-c0x00ffffff-no-rj"
        description="... The Arcadium's music to fanmail@the-arcadium.de #thefatrat #fatrat #laurabrehm #thecalling #music #gamingmusic #freemusic ..."
      />
      <VideoRow
        param="KR-eV7fHNbM"
        image="https://i.ytimg.com/vi/KR-eV7fHNbM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkMgNKzQQCEjff29exYRizUj96AQ"
        title="TheFatRat - The Calling (feat. Laura Brehm)"
        channel="TheFatRat"
        views="174M views"
        timestamp="5 years ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniHWfpc4XCCwOEC1h7A2MiUb6psKob7TSPFJ54ZYA=s88-c-k-c0x00ffffff-no-rj"
        description="... The Arcadium's music to fanmail@the-arcadium.de #thefatrat #fatrat #laurabrehm #thecalling #music #gamingmusic #freemusic ..."
      />
    </div>
  );
}

export default SearchPage;
