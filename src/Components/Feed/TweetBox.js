import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  // image input

  const sendTweet = (e) => {
    e.preventDefault();

    const posts = collection(getFirestore(), "posts"); // same as other
    addDoc(posts, {
      displayName: "Stanimir Kosev",
      username: "stanimir",
      verified: true,
      text: tweetMessage,
      avatar: "",
      image: "https://pbs.twimg.com/media/EkVEHXoXcAcOrN4?format=png&name=orig",
    });

    setTweetMessage("");
  };

  return (
    <div className="tweet-box">
      <form>
        <div className="tweet-box-input">
          <Avatar />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <div className="tweet-box-footer">
          <div className="picture-icon-container">
            <ImageOutlinedIcon className="picture-icon" />
          </div>
          <Button
            onClick={sendTweet}
            type="submit"
            className="tweet-box-tweet-btn"
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
