import React from "react";
import { SectionIntroStyle } from "../ValuesSection/valuesStyles";
import { ReferenceSection, ImgSection } from "./referencesStyles";
import Image from "next/image";

function ReferencesSection() {
  return (
    <ReferenceSection>
      <SectionIntroStyle>
        <span>Dlaczego my</span>
        <h2>Nasze referencje</h2>
      </SectionIntroStyle>
      <ImgSection>
        <a href="/img/referencje/certyfikat.webp" target="_blank">
          <Image
            src="/img/referencje/certyfikat.webp"
            alt="Certyfikat"
            width={350}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </a>
        <a href="/img/referencje/kurs.webp" target="_blank">
          <Image
            src="/img/referencje/kurs.webp"
            alt="Kurs"
            width={350}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </a>
        <a href="/img/referencje/swiadectwo.webp" target="_blank">
          <Image
            src="/img/referencje/swiadectwo.webp"
            alt="Świadectwo"
            width={350}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </a>
      </ImgSection>
    </ReferenceSection>
  );
}

export default ReferencesSection;
