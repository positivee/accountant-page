import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { Logo, NavWrapper } from "./headerStyles";
import Image from "next/image";

export default function Header() {
  const menuRef = useRef(null);

  return (
    <div>
      <div className="container">
        <NavWrapper ref={menuRef}>
          <Logo href={"/"}>
            <Image
              src="/favicon.ico"
              width="55"
              height="55"
              alt="Fames possimus"
            />
            Fames possimus
            <br /> Mordens Parabolas
          </Logo>

          <Navbar menuRef={menuRef} />
        </NavWrapper>
      </div>
    </div>
  );
}
