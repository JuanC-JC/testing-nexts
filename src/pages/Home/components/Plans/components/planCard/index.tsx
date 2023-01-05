import { FileIcon, BikeIcon, SettingsIcon, BatteryIcon, PlusIcon } from "../../../../../../lib/components/Icons"
import { PlanCardStyled, Separation, PlanCardItemStyled, PlanCardPriceStyled } from "./planCard.styled"


export const PlanCard = ({ plan }: any) => {

  const color = plan.color

  return (
    <PlanCardStyled>
      <h4 className="title">{plan.name}</h4>

      <div className="planCard__body">

        <PlanCardItemStyled>
          <BikeIcon />
          <p>{plan.bikeName}</p>
        </PlanCardItemStyled>

        <Separation color={color} />

        <PlanCardItemStyled >
          <BatteryIcon />
          <div>Troca de bateria: {plan.batteries}</div>
        </PlanCardItemStyled>

        <Separation color={color} />

        <PlanCardItemStyled>
          <SettingsIcon />
          <div>Manutenção inclusa</div>
        </PlanCardItemStyled>

        <PlanCardItemStyled>
          <FileIcon />
          <div>Seguro e IPVA pagos</div>
        </PlanCardItemStyled>

        <PlanCardItemStyled>
          <BikeIcon />
          <div>Moto reserva</div>
        </PlanCardItemStyled>

        <Separation color={color} />

        <div className="planCard__descriptions">
          <div>além de:</div>
          <div>
            {
              plan.descriptions && plan.descriptions.map((description: string) => {
                return (
                  <PlanCardItemStyled>
                    <PlusIcon />
                    <p>{description}</p>
                  </PlanCardItemStyled>
                )
              })
            }
          </div>
        </div>


      </div>

      <PlanCardPriceStyled color={color}>
        R$ {plan.price}/semana
      </PlanCardPriceStyled>
    </PlanCardStyled>
  )
}