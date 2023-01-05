import { Advantages, Autonomy } from "./components/Advantages";
import { ContactUsForm } from "./components/ContactUsForm";
import { FQA } from "./components/FQA";
import { Plans } from "./components/Plans";
import { HomeStyled } from "./styles";

export function Home() {
  return (
    <HomeStyled>
      <Autonomy/>
      <Advantages/>
      <Plans/>
      <FQA/>
      <ContactUsForm/>
    </HomeStyled>
  )
}

