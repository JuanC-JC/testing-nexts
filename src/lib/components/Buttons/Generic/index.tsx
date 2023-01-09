import { GenericButtonStyled } from "./GenericButton.styled"

interface IPropsButton{
  text: string,
  color?: string,
  calculate?: () => void,
}


export const Button = ({text, calculate}: IPropsButton) => {
  return (
    <GenericButtonStyled onClick={()=>{calculate()}}>{text}</GenericButtonStyled>
  )
}
