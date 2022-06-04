import React from "react";
import { Link } from "react-router-dom";

function SidebarOption({ text, Icon, logo, link, path, active }) {
  return (
    <div>
      {link ? (
        <Link
          to={path}
          className={`sidebar-option ${text} 
          } ${logo ? "twitter-icon-container" : null}
          ${active ? "sidebar-option-active" : null}`}
        >
          <Icon className={`sidebar-icons ${logo ? "twitter-icon" : null}`} />
          <h2>{text}</h2>
        </Link>
      ) : (
        <div className={`sidebar-option ${text}`}>
          <Icon className={"sidebar-icons"} />
          <h2>{text}</h2>
        </div>
      )}
    </div>
  );
}

export default SidebarOption;
