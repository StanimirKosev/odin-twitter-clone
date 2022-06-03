import React from "react";

function SidebarOption({ active, text, Icon, logo }) {
  return (
    <div
      className={`sidebar-option ${text} ${
        active ? "sidebar-option-active" : null
      } ${logo ? "twitter-icon-container" : null}`}
    >
      <Icon className={`sidebar-icons ${logo ? "twitter-icon" : null}`} />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
