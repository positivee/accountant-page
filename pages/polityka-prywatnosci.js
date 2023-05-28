import React from "react";
import { PolitykaPrywantosciSection } from "../styles/politykaStyles";
import Head from "next/head";

export default function PolitykaPrywantosci() {
  return (
    <>
      <Head>
        <title>Inimicus Caesarianis - Omnis Curiosus Noverca Manebimus</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <PolitykaPrywantosciSection>
        <h1>Polityka prywatności</h1>

        <div>Tutaj polityka</div>
      </PolitykaPrywantosciSection>
    </>
  );
}
