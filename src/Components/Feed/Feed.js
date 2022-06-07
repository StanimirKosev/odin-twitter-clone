import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import FlipMove from "react-flip-move";
import { Link } from "react-router-dom";
import db from "../../firebase-config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Feed({ avatar, toggleLogOutBtn }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const collRef = collection(db, "posts");
    const q = query(collRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  }, []);

  useEffect(() => {
    document.title = "Home / Twitter";
    toggleLogOutBtn(false);
  });

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
      <TweetBox avatar={avatar} sx={{ width: 50, height: 50 }} />
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
