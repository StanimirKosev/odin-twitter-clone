import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useAuth, upload } from "../../firebase-config";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { Button } from "@mui/material";

export default function User({ getAvatar }) {
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
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
      getAvatar(currentUser.photoURL);
    }
  }, [currentUser, getAvatar]);

  return (
    <div className="user">
      <Avatar
        src={photoURL}
        sx={{ width: 145, height: 145 }}
        className="profile-pic"
      />
      <div className="change-profile">
        <label className="label-profile-pic">
          <div className="avatar-img-input-container">
            <AddPhotoAlternateOutlinedIcon fontSize="large" />
          </div>
          <input type="file" onChange={handleChange} />
        </label>
        <Button
          disabled={loading || !photo}
          onClick={handleClick}
          className="avatar-btn"
        >
          Upload
        </Button>
      </div>
    </div>
  );
}
