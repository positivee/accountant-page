import styled from "styled-components";

export const PageContent = styled.div`
  color: var(--color-dark);

  img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    margin: 1rem 0;
  }
  h2 {
    font-size: 1.75rem;
    color: var(--blue-color);
  }

  p,
  ul {
    margin-bottom: 1rem;

    text-align: justify;
  }
  ul li {
    margin-left: 3rem;
  }
`;
export const ServiceContent = styled.div`
  flex: 1;
  margin-bottom: 4rem;
`;
