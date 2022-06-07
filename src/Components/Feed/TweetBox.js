import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import db, { useAuth } from "../../firebase-config";
import { serverTimestamp } from "firebase/firestore";

function TweetBox({ avatar }) {
  const [tweetMessage, setTweetMessage] = useState();
  const [tweetImage, setTweetImage] = useState("");
  const currentUser = useAuth();

  const sendTweet = async (e) => {
    e.preventDefault();

    const collRef = collection(db, "posts");
    await addDoc(collRef, {
      displayName: currentUser?.email.split("@")[0],
      username: `@${currentUser?.email.split("@")[0]}`,
      verified: true,
      text: tweetMessage,
      avatar: currentUser?.photoURL,
      image: tweetImage,
      timestamp: serverTimestamp(),
    });
    setTweetMessage("");
    setTweetImage("");
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
          />
        </div>
        <div className="tweet-box-footer">
          <input
            placeholder="Enter image URL"
            className="tweet-box-image-input"
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
          />
          <Button
            disabled={!tweetMessage}
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
