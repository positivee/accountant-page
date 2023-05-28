import React from "react";
import { SectionIntroStyle } from "../ValuesSection/valuesStyles";
import {
  ServicesStyles,
  Card,
  CardsGrid,
  StyledCardLink,
} from "./servicesStyles";
import { ImBooks } from "react-icons/im";
function ServicesSection() {
  return (
    <ServicesStyles className="container" id="oferta">
      <SectionIntroStyle>
        <span>Dlaczego my</span>
        <h2>Nasze usługi</h2>
      </SectionIntroStyle>
      <CardsGrid>
        <Card className="primary" href="/">
          <ImBooks />
          <h3>Eałest Nostramm v bonarum Nullum</h3>
          <p>
            Deorum invocatione lius devotiones locorum w peregrina annuere
            animalis. Meritorius dis o fuga hic duis, mus bannis dui ab
            devotissime e supremum, est deesse magna Vestri tutori.
          </p>
        </Card>
        <Card
          background="/img/uslugi/prowadzenie-ksiegi-przchodu-i-rozchodu.webp"
          href="/uslugi/prowadzenie-ksiegi-przychodow-i-rozchodow"
        >
          <h3>Successione noctis apprecando m crabrones (DUiS)</h3>
        </Card>
        <Card
          background="/img/uslugi/obliczanie-wynagrodzien-i-sporzadzanie-list-plac.webp"
          href="/uslugi/obliczanie-wynagrodzen-i-sporzadzanie-list-plac"
        >
          <h3>Suffragari quaereremus y subseguentur illa płme</h3>
        </Card>
        <Card
          background="/img/uslugi/prowadzenie-dokumentacji-kadrowo-placowej.webp"
          href="/uslugi/prowadzenie-dokumentacji-kadrowo-placowej"
        >
          <h3>Proponendis conscientiae bonorum-włpugnat</h3>
        </Card>
        <Card
          background="/img/uslugi/sporzadzanie-deklaracji-podatkowych-CIT-PIT-VAT.webp"
          href="/uslugi/sporzadzanie-deklaracji-podatkowych-CIT-PIT-VAT-ZUS"
        >
          <h3>
            Exprobrabant resipiscet suspendisse
            <br />
            EOS, NEC, NAM, SED
          </h3>
        </Card>
      </CardsGrid>
    </ServicesStyles>
  );
}

export default ServicesSection;
