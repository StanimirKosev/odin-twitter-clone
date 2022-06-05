import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import FlipMove from "react-flip-move";
import { Link } from "react-router-dom";
import db from "../../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts"), (snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <div className="feed">
      <div className="feed-header">
        <Link className="link" to="/odin-twitter-clone">
          Home
        </Link>
        <div className="header-icon-container">
          <AutoAwesomeOutlinedIcon className="header-icon" />
        </div>
      </div>
      <TweetBox />
      {
        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.id}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ))}
        </FlipMove>
      }
    </div>
  );
}

export default Feed;
