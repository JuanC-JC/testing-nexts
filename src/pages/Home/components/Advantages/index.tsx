import { SettingsIcon } from "../../../../lib/components/Icons"
import { AdvantageCardStyled, AdvantagesStyled, AutonomyStyled } from "./advantages.styled"
import SecondImage from '../../../../assets/images/advantages_second.png'
import MockupMap from '../../../../assets/images/mockup_map.png'

export const Advantages = () => {
  return (
    <AdvantagesStyled>
      <h3>Você cuida do seu corre, nós de todo o resto</h3>
      <div className="advantages__container">
        <AdvantageCard advantage={{
          title: "Manutenção inclusa",
          description: "Menos problemas, resolvidos mais rápido e sem custo",
          color: "#FF8032"
        }} />
        <AdvantageCard advantage={{
          title: "Manutenção inclusa",
          description: "Sem custos e burocracia extras",
          color: "#FF8032"
        }} />
        <AdvantageCard advantage={{
          title: "Manutenção inclusa",
          description: "Baterias sempre disponíveis próximas a você",
          color: "#FF8032"
        }} />
        <AdvantageCard advantage={{
          title: "Manutenção inclusa",
          description: "Nunca fique na mão",
          color: "#FF8032"
        }} />
      </div >
      <img src={SecondImage}></img>
    </AdvantagesStyled>
  )
}

export const Autonomy = () => {
  return (
    <AutonomyStyled>
      <div className="autonomy__container">
        <h3>Com nossas estações de troca, autonomia não é um problema</h3>
        <img src={MockupMap} />

        <div className="autonomy__items">
          <div>
            <div>Icon</div>
            <p>Estações abertas</p>
          </div>
          <div>
            <div>Icon</div>
            <p>Estações abertas</p>
          </div>
        </div>

        <div className="autonomy__cardsContainer">
          <AdvantageCard advantage={{
            title: "Manutenção inclusa",
            description: "Chegou, trocou, saiu. Leva menos de 3 minutos.",
            color: "#2EC2FF"
          }} />
          <AdvantageCard advantage={{
            title: "Troca assistida",
            description: "Tenha um atendente sempre disponível para facilitar sua troca.",
            color: "#2EC2FF"
          }} />
          <AdvantageCard advantage={{
            title: "Rede 24h",
            description: "Nossas estações operam 365 dias no ano e algumas 24 horas.",
            color: "#2EC2FF"
          }} />
          <AdvantageCard advantage={{
            title: "Atendimento de qualidade",
            description: "Acesso a banheiro, água e café.",
            color: "#2EC2FF"
          }} />
        </div >

      </div>
    </AutonomyStyled>
  )
}

export const AdvantageCard = ({ advantage }: any) => {
  return (
    <AdvantageCardStyled color={advantage.color}>
      <div className="advantageCard__iconsContainer">
        <SettingsIcon size={30} />
      </div>
      <div className="advantageCard__title">{advantage.title}</div>
      <div className="advantageCard__description">{advantage.description}</div>
    </AdvantageCardStyled>
  )
}