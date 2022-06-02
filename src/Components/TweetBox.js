import React from "react";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweet-box">
      <form>
        <div className="tweet-box-input">
          <Avatar />
          <input placeholder="What's happening?" type="text" />
        </div>
        <Button className="tweet-box-tweet-btn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
