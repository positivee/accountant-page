import React from "react";
import { FooterStyles, Copyright, FooterContainer } from "./footerStyles";
import Link from "next/link";

function Footer() {
  return (
    <>
      <FooterStyles>
        <div>
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum 4a</p>
          <p>11-321 Lorem ipsum</p>
          <p>NIP: 222-145-89-58</p>
          <p>
            e-mail: <a href="mailto:tekstor@test.pl">tekstor@test.pl</a>
          </p>
          <p>
            telefon: <a href="tel:123456789">123 456 789</a>
          </p>
        </div>
        <div>
          Strona stworzona przez{" "}
          <Link href="https://github.com/positivee">Me</Link> |{" "}
          <Link href="/polityka-prywatnosci" rel="nofollow">
            Amplecti Carthaginem
          </Link>
        </div>
      </FooterStyles>
    </>
  );
}

export default Footer;
