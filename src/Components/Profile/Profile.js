import React from "react";
import { Link } from "react-router-dom";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import User from "../User/User";

function Profile({ getAvatar }) {
  return (
    <div className="profile">
      <div className="feed-header">
        <Link className="link" to="/">
          {" "}
          {/*bugva*/}
          Home
        </Link>
        <div className="header-icon-container">
          <AutoAwesomeOutlinedIcon className="header-icon" />
        </div>
      </div>
      <User getAvatar={getAvatar} />
    </div>
  );
}

export default Profile;
