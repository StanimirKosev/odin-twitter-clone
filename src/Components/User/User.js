import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useAuth, upload } from "../../firebase-config";

export default function User() {
  const currentUser = useAuth();
  const [photoURL, setPhotoURL] = useState();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    if (e.target.files[0]) setPhoto(e.target.files[0]);
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) setPhotoURL(currentUser.photoURL);
  }, [currentUser]);

  return (
    <div className="user">
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>
        Upload
      </button>
      <Avatar src={photoURL} />
    </div>
  );
}
