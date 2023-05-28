import Link from "next/link";
import styled from "styled-components";

export const ButtonStyles = styled(Link)`
  font-family: var(--ff-headline);
  padding: 8px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--color-light);
  color: var(--color-light);

  text-transform: uppercase;
  font-weight: bold;
  margin-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &.btn {
    display: flex;
    justify-content: center;
  }
  &.primary {
    background-color: var(--color-light);
    color: var(--color-dark);
    svg {
      fill: var(--color-dark);
    }
  }
  &.primary:hover {
    background-color: transparent;
    color: var(--color-light);
    svg {
      fill: var(--color-light);
    }
  }

  &.outline {
    color: var(--color-light);
  }

  &.btn-hero {
    margin-right: 1rem;
  }
  &.btn-large {
    font-size: 1.25rem;
    padding: 12px 26px;
  }
  svg {
    margin-left: 0.2rem;
  }
`;
