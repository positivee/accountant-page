import styled from "styled-components";

export const ContactIcons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  svg {
    font-size: 4rem;
    color: var(--blue-color);
  }

  @media screen and (max-width: 50em) {
    flex-direction: column;
    gap: 4rem;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    text-align: center;
  }
  h3 {
    color: var(--color-dark);
    font-size: 1.4rem;
    padding: 1rem 0;
  }
  a {
    color: var(--blue-color);
  }
  a:hover {
    color: var(--accent-color);
  }
`;

export const Map = styled.iframe`
  width: 100%;
`;
