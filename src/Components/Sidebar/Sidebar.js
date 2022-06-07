import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SidebarOption from "./SidebarOption";
import { Button, Avatar } from "@mui/material";
import { logOut, useAuth } from "../../firebase-config";

function Sidebar({ logInMenu, avatar, logOutBtn }) {
  const [logOutModal, setLogOutModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  async function handleLogOut() {
    setLoading(true);
    try {
      await logOut();
      logInMenu();
    } catch {
      alert("Error");
    }
    setLoading(false);
  }
  return (
    <div className="sidebar">
      <SidebarOption Icon={TwitterIcon} logo link path="/odin-twitter-clone" />
      <SidebarOption
        active
        text="Home"
        Icon={HomeOutlinedIcon}
        link
        path="/odin-twitter-clone"
      />
      <SidebarOption text="Explore" Icon={TagIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Messages" Icon={EmailOutlinedIcon} />
      <SidebarOption text="Bookmark" Icon={BookmarkBorderOutlinedIcon} />
      <SidebarOption text="Lists" Icon={ListAltIcon} />
      <SidebarOption
        active
        text="Profile"
        Icon={PermIdentityIcon}
        link
        path="/odin-twitter-clone/profile"
      />
      <SidebarOption text="More" Icon={MoreHorizIcon} />
      <Button variant="outlined" className="sidebar-tweet" fullWidth>
        Tweet
      </Button>
      <div
        className="profile-sidebar-bottom"
        onClick={() => setLogOutModal(!logOutModal)}
      >
        <Avatar src={avatar} sx={{ width: 45, height: 45 }} />
        <div>
          <div>{currentUser?.email.split("@")[0]}</div>
          <div className="at">{`@${currentUser?.email.split("@")[0]}`}</div>
        </div>
        <MoreHorizIcon />
        {logOutModal ? (
          <div className="log-out-modal">
            <Button
              disabled={loading || logOutBtn}
              onClick={handleLogOut}
              className="btns-login-menu log-out-btn"
            >
              Log Out
            </Button>
            <p>*Enabled in home tab</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Sidebar;
