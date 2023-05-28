import styled from "styled-components";

export const BannerStyles = styled.div`
  position: relative;
  width: 100%;
  min-height: 45rem;
  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.35);
  color: var(--color-light);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10px;
    background-image: linear-gradient(
      180deg,
      rgba(89, 131, 252, 0) 0%,
      rgba(250, 249, 245, 1) 75%
    );
  }
`;

export const VideoStyles = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -50;
`;
export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;

  @media (max-width: 50em) {
    flex-direction: column;
  }
`;
export const ContentSection = styled.div`
  padding: 0 2rem;
  max-width: 50rem;

  @media (max-width: 50em) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

//Styles for secondary pages banner

export const BannerStylesSubPages = styled.div`
  background: url("/img/background.webp") no-repeat center/cover;
  border-radius: 0 0 4rem 4rem;
  height: 15rem;
  display: grid;
  place-items: center;

  color: var(--color-light);
  position: relative;
  margin-bottom: 4rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0 0 4rem 4rem;
  }
  * {
    text-align: center;
    z-index: 1;
    font-size: 2rem;
  }

  @media screen and (min-width: 50em) {
    * {
      font-size: 3rem;
    }
  }
`;
