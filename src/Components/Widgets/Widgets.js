import React from "react";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input-container">
        <SearchIcon className="widgets-search-icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets-widget-container">
        <h2>Trends for you</h2>
        <TwitterTweetEmbed tweetId="1514564966564651008" />
        <TwitterTweetEmbed tweetId="1518629257622163456" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="naval"
          options={{ height: 600 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
