import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { firebaseConfig } from "../../firebase-config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  // key
  useEffect(() => {});

  const db = collection(getFirestore(), "posts");

  /*getDocs(db).then((snapshot) => {
    let arr = [];
    snapshot.docs.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });
  });*/

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
        <div className="header-icon-container">
          <AutoAwesomeOutlinedIcon className="header-icon" />
        </div>
      </div>
      <TweetBox />
      {/*<FlipMove>
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
        </FlipMove>*/}
    </div>
  );
}

export default Feed;
initializeApp(firebaseConfig);