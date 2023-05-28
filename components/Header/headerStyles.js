import Link from "next/link";
import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;

  a {
    color: var(--blue-color);
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
`;
