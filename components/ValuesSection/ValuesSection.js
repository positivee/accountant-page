import { FaBalanceScaleLeft, FaLock, FaRegHandshake } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import {
  ValuesRow,
  Column,
  SectionIntroStyle,
  Icon,
  ValuesStyles,
} from "./valuesStyles";

function ValuesSection() {
  return (
    <>
      <ValuesStyles>
        <SectionIntroStyle>
          <span>Dlaczego my</span>
          <h2>Nasze wartości</h2>
        </SectionIntroStyle>

        <ValuesRow>
          {[
            { icon: <FaBalanceScaleLeft />, text: "Consulere" },
            { icon: <FaRegHandshake />, text: "Consultationum" },
            { icon: <FaLock />, text: "Princeps" },
            { icon: <GoBriefcase />, text: "Recordationem" },
          ].map(({ icon, text }, index) => (
            <Column key={index}>
              <Icon>{icon}</Icon>
              {text}
            </Column>
          ))}
        </ValuesRow>
      </ValuesStyles>
    </>
  );
}

export default ValuesSection;
