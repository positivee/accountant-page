import React, { useState } from "react";
import { MenuItem, StyledLink } from "./navStyles";
import Dropdown from "./Dropdown";
import { AiOutlineDown } from "react-icons/ai";

export default function MenuItems({ items }) {
  const [dropdown, setDropdown] = useState(false);

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <MenuItem
      onClick={closeDropdown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <StyledLink
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            href={"#uslugi"}
            role="button"
            aria-haspopup="menu"
          >
            {items.title} <AiOutlineDown />
          </StyledLink>

          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <StyledLink href={items.url}>{items.title}</StyledLink>
      )}
    </MenuItem>
  );
}
