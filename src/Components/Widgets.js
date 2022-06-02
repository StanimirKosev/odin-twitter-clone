import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon className="widgets-search-icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets-widget-container">
        <h2>Trends for you</h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="naval"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
