import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import db, { useAuth } from "../../firebase-config";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

function TweetBox({ avatar }) {
  const [tweetMessage, setTweetMessage] = useState("");
  const currentUser = useAuth();
  // image input

  const sendTweet = async (e) => {
    e.preventDefault();

    const collRef = collection(db, "posts");
    await addDoc(collRef, {
      displayName: currentUser?.email.split("@")[0],
      username: `@${currentUser?.email.split("@")[0]}`,
      verified: true,
      text: tweetMessage,
      avatar: "", // hardcoded
      image: "https://pbs.twimg.com/media/EkVEHXoXcAcOrN4?format=png&name=orig",
    });
    setTweetMessage("");
  };

  return (
    <div className="tweet-box">
      <form>
        <div className="tweet-box-input">
          <Avatar src={avatar} sx={{ width: 50, height: 50 }} />
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
