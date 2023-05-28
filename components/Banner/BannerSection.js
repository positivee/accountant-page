import React from "react";

import { BannerStylesSubPages, BannerStyles } from "./bannerStyles";
import { ButtonStyles } from "../../styles/buttonStyles";
import { AiFillPhone } from "react-icons/ai";
import { ButtonSection, VideoStyles, ContentSection } from "./bannerStyles";
import Link from "next/link";

export function BannerSectionMain() {
  return (
    <BannerStyles>
      <ContentSection>
        <h1>Lorem Ipsum Dolor Sit Amet</h1>
        <p>
          Consectetur adipiscing elit. Nulla interdum mi sed est fermentum, ac
          dignissim ipsum blandit. Quisque id purus eget eros ullamcorper
          volutpat.
        </p>

        <ButtonSection>
          <ButtonStyles className="outline btn-large btn-hero" href="#oferta">
            Magna poloni
          </ButtonStyles>
          <ButtonStyles className="primary btn-large" href="/kontakt">
            Mutationem est v ipsa
            <AiFillPhone />
          </ButtonStyles>
        </ButtonSection>
      </ContentSection>
      <VideoStyles
        src="/videos/banner-video.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        poster="img/background.webp"
      />
    </BannerStyles>
  );
}
export function BannerSection({ headingName }) {
  return (
    <BannerStylesSubPages>
      <div className="container">
        <h1>{headingName}</h1>
      </div>
    </BannerStylesSubPages>
  );
}
