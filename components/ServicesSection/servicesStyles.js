import Link from "next/link";
import styled from "styled-components";

export const ServicesStyles = styled.section`
  padding: 4rem 0;
  width: 100%;
`;
export const CardsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-auto-columns: auto;
  grid-template-areas:
    "one"
    "two"
    "three"
    "four"
    "five";

  @media (min-width: 50em) {
    grid-template-areas:
      "one one two two"
      "one one three three"
      "four four five five";
  }
`;

export const Card = styled(Link)`
  min-height: 250px;
  border-radius: 15px;
  text-align: center;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 3rem;

  color: var(--color-light);
  background-color: var(--blue-color);
  background-image: linear-gradient(
      to bottom,
      rgba(30, 30, 30, 0),
      rgba(30, 30, 30, 1)
    ),
    url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  font-size: 1.125rem;

  h3 {
    z-index: 2;
  }

  &.primary {
    background-color: var(--blue-color);
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-decoration: none;
    pointer-events: none;

    svg {
      font-size: 5rem;
    }

    p {
      margin: 1.5rem 0;
    }
  }
  // Grid names
  &:nth-child(1) {
    grid-area: one;
    background-image: none;
  }
  &:nth-child(2) {
    grid-area: two;
  }
  &:nth-child(3) {
    grid-area: three;
  }
  &:nth-child(4) {
    grid-area: four;
  }
  &:nth-child(5) {
    grid-area: five;
  }

  &:hover {
    color: var(--blue-color);
    background-color: var(--blue-color);

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 15px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
