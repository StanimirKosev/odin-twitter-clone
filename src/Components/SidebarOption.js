import React from "react";

function SidebarOption({ active, text, Icon }) {
  return (
    <div
      className={`sidebar-option ${active ? "sidebar-option-active" : null}`}
    >
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
