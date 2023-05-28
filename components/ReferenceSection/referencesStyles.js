import styled from "styled-components";

export const ReferenceSection = styled.section`
  padding: 4rem 0;
`;
export const ImgSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  a {
    margin: auto;
  }

  @media screen and (max-width: 50em) {
    flex-direction: column;
  }
`;
