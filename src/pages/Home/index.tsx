import { ContactUsForm } from "./components/ContactUsForm";
import { FQA } from "./components/FQA";
import { HomeStyled } from "./styles";

export function Home() {
  return (
    <HomeStyled>
      <FQA/>
      <ContactUsForm/>
    </HomeStyled>
  )
}

