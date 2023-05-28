import React, { useState, useRef, useEffect } from "react";
import { NavStyles, Hamburger, NavList } from "./navStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { navLinks } from "./navLinks";
import MenuItems from "./MenuItems";

export default function Navbar({ menuRef }) {
  const [click, setClick] = useState(false);

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <NavStyles>
      <Hamburger onClick={() => setClick((prevClick) => !prevClick)}>
        {!click ? <GiHamburgerMenu /> : <IoClose />}
      </Hamburger>

      <NavList
        className={click && "opened"}
        onClick={() => setClick((prev) => !prev)}
      >
        {navLinks.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </NavList>
    </NavStyles>
  );
}
