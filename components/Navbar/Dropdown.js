import React from "react";
import { StyledLink, SubMenu } from "./navStyles";
export default function Dropdown({ submenus, dropdown }) {
  return (
    <SubMenu className={dropdown && "active"}>
      {submenus.map((item, index) => (
        <li key={index}>
          <StyledLink className={"all-border"} href={item.url}>
            {item.title}
          </StyledLink>
        </li>
      ))}
    </SubMenu>
  );
}
