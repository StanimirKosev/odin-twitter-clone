import React from "react";
import User from "../User/User";
import { useNavigate } from "react-router-dom";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useAuth } from "../../firebase-config";
import { Button } from "@mui/material";

function Profile({ getAvatar }) {
  let navigate = useNavigate();
  const currentUser = useAuth();
  return (
    <div className="profile">
      <div className="feed-header">
        <div className="arrow-back-container">
          <ArrowBackOutlinedIcon onClick={() => navigate(-1)} />
        </div>
        <h2>{currentUser?.email.split("@")[0]}</h2>
        <div className="header-icon-container">
          <AutoAwesomeOutlinedIcon className="header-icon" />
        </div>
      </div>
      <div className="profile-main">
        <div className="cover"></div>
        <div className="profile-info">
          <User getAvatar={getAvatar} />
          <h2>{currentUser?.email.split("@")[0]}</h2>
          <h4 className="at">{`@${currentUser?.email.split("@")[0]}`}</h4>
        </div>
        <div className="profile-footer">
          <Button>Tweets</Button>
          <Button>Tweets n replies</Button>
          <Button>Media</Button>
          <Button>Likes</Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
