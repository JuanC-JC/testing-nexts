import { ContactUsForm } from "./components/ContactUsForm";
import { FQA } from "./components/FQA";
import { HomeStyled } from "./styles";
import { Performance } from "./components/Performance";

export function Home() {
  return (
    <HomeStyled>
      <Performance/>
      <FQA/>
      <ContactUsForm/>
    </HomeStyled>
  )
}

