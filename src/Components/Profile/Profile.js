import React from "react";
import { Link } from "react-router-dom";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

function Profile() {
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
    </div>
  );
}

export default Profile;
