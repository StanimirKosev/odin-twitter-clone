import React from "react";
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
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOption Icon={TwitterIcon} logo link path="/" />
      <SidebarOption active text="Home" Icon={HomeOutlinedIcon} link path="/" />
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
        path="/profile"
      />
      <SidebarOption text="More" Icon={MoreHorizIcon} />
      <Button variant="outlined" className="sidebar-tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
