import { ContactUsForm } from "./components/ContactUsForm";
import { FQA } from "./components/FQA";
import { Plans } from "./components/Plans";
import { HomeStyled } from "./styles";

export function Home() {
  return (
    <HomeStyled>
      <Plans/>
      <FQA/>
      <ContactUsForm/>
    </HomeStyled>
  )
}

