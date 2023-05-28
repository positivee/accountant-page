import styled from "styled-components";
import Link from "next/link";

export const NavStyles = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  z-index: 2;

  @media screen and (max-width: 50em) {
    display: none;
    position: absolute;
    top: 5rem;
    left: 0;
    width: 100%;

    background: var(--color-light);
    &.opened {
      display: block;
    }
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
  }
`;
export const Hamburger = styled.div`
  display: none;

  cursor: pointer;
  font-size: 2.5rem;
  transition: all 0.4s ease-in-out;
  color: var(--blue-color);
  svg:is(:focus, :hover) {
    transform: scale(1.05);
  }

  @media screen and (max-width: 50em) {
    display: block;
  }
`;

export const MenuItem = styled.li`
  position: relative;
`;

export const StyledLink = styled(Link)`
  height: 5rem;

  display: grid;
  place-items: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  transition: all 0.2s ease-in-out;

  display: flex;
  gap: 0.3rem;
  justify-content: center;

  :hover {
    color: var(--color-dark);
    border-top: 5px solid var(--color-dark);
  }

  &.all-border {
    :hover {
      border: 1px solid black;
    }
  }
  @media screen and (max-width: 50em) {
    :hover {
      border: 1px solid black;
    }
  }
`;

export const SubMenu = styled.ul`
  display: block;
  position: absolute;
  top: 5rem;
  right: 0;

  background: var(--color-light);
  min-width: 550px;
  display: none;
  z-index: 2;

  &.active {
    display: block;
  }
  @media screen and (max-width: 50em) {
    position: static;
    background: var(--color-light-low);
    min-width: auto;
    display: block;
  }
`;
