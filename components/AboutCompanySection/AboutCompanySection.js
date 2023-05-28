import React from "react";
import { SectionIntroStyle } from "../ValuesSection/valuesStyles";
import { CompanySection } from "./aboutCompanyStyles";
import Link from "next/link";

export default function AboutCompanySection() {
  return (
    <CompanySection>
      <SectionIntroStyle>
        <span>Dlaczego my</span>
        <h2>Lorem ipsum dolor sit amet</h2>
      </SectionIntroStyle>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
        turpis quis semper dapibus. <strong>Aliquam pulvinar</strong> tincidunt
        nibh. Vivamus ullamcorper, lectus id lobortis vehicula, nulla eros
        tempus augue, in consectetur urna turpis eget enim.
      </p>
      <h3>Mauris dictum fermentum quam vitae</h3>
      <p>
        In hac habitasse platea dictumst. Pellentesque et mollis lorem.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae;
        <Link href="/uslugi/prowadzenie-ksiegi-przychodow-i-rozchodow">
          Pellentesque lobortis
        </Link>
        , odio sit amet auctor facilisis,{" "}
        <strong>lorem ipsum consectetur</strong>. Morbi ornare, sem ac suscipit
        lacinia, dui neque commodo quam, id feugiat lorem massa at urna.
      </p>
      <h3>Fusce finibus tortor quis bibendum viverra</h3>
      <p>
        Nulla facilisi. Suspendisse <strong>pharetra nisi</strong> in mauris
        malesuada, quis lacinia sem convallis. Fusce cursus semper tortor, sed
        ornare ipsum mollis in. Morbi in <strong>laoreet justo</strong>. Quisque
        ultrices condimentum massa.
      </p>
      <h3>Quisque non varius sapien, id interdum nisl</h3>
      <p>
        Quisque tempor, mi id tincidunt blandit, lacus erat tristique turpis,
        quis congue enim nibh in lorem. Sed vel{" "}
        <strong>
          <Link href="/uslugi/prowadzenie-ksiegi-przychodow-i-rozchodow">
            mollis dolor
          </Link>
        </strong>
        . Donec lacinia feugiat nulla nec viverra.
      </p>
      <h3>Pellentesque bibendum est nec purus sodales</h3>
      <p>
        Aliquam volutpat tellus sed metus sodales, quis aliquet diam posuere.
        Curabitur ut felis eu tellus auctor lobortis. Pellentesque id neque non
        turpis aliquet convallis. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae.
      </p>
    </CompanySection>
  );
}
