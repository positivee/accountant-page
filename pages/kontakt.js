import React from "react";
import ContactSection from "../components/ContatctSection/ContactSection";

import { BannerSection } from "../components/Banner/BannerSection";
import { SectionIntroStyle } from "../components/ValuesSection/valuesStyles";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail, MdCall } from "react-icons/md";
import { ContactIcons, Column, Map } from "../styles/kontaktStyles";
import Head from "next/head";

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>Activus - Minaci - Dolor Crudeles Persona Opprimere</title>
        <meta
          name="description"
          content="Arcui Gravatam Adversa Vestrorum polonia coronadonis sełqui promoveram. Recesserunt ea Ruinae saecula promotionem. Moderno ab Enim civibus!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSection headingName="Kontakt" />

      <div className="container">
        <SectionIntroStyle>
          <span>Rerum porta</span>
          <h2>Quos animi</h2>
        </SectionIntroStyle>

        <ContactIcons>
          <Column>
            <HiLocationMarker />
            <div>
              <h3>Lokalizacja</h3>
              <p>Lorem ipsum dolor sit amet</p>
              <p>consectetur adipiscing elit</p>
              <p>12345 Ipsum Street</p>
              <p>City, State</p>
              <p>NIP: 123-456-789</p>
            </div>
          </Column>
          <Column>
            <MdCall />
            <div>
              <h3>Zadzwoń</h3>

              <a href="tel:854246341">(+48) 854 246 341</a>
            </div>
          </Column>
          <Column>
            <MdEmail />
            <div>
              <h3>Napisz do mnie</h3>
              <a href="mailto:test@testert.pl">test@testert.pl</a>
            </div>
          </Column>
        </ContactIcons>

        <ContactSection withMap={false} />

        <SectionIntroStyle>
          <span>Mapa</span>
          <h2>Augue morbi ab dolor</h2>
        </SectionIntroStyle>

        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5639288.619154475!2d8.294745021311627!3d47.86445873237724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1685298127553!5m2!1spl!2spl"
          height="400"
          style={{ border: 0, marginBottom: "4rem" }}
          aria-hidden="false"
        ></Map>
      </div>
    </>
  );
}
