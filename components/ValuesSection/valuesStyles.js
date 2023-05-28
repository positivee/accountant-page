import styled from "styled-components";

export const ValuesStyles = styled.section`
  padding: 4rem 0;
  color: var(--blue-color);
`;

export const ValuesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media screen and (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

export const Column = styled.div`
  text-align: center;
  margin: 0;
  font-size: 1.75rem;
  display: grid;
  place-items: center;

  svg {
    font-size: 5rem;
    color: var(--blue-color);
  }
`;
export const Icon = styled.div`
  background: #fff;
  border-radius: 5%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  padding: 2rem;
  margin-bottom: 1rem;
`;

export const SectionIntroStyle = styled.div`
  span {
    color: var(--color-accent);
  }
  h2 {
    font-size: 3rem;
    padding: 1rem 0;
    color: var(--blue-color);
  }
`;
