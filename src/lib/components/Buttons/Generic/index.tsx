import { GenericButtonStyled } from "./GenericButton.styled"

interface IPropsButton{
  text: string,
  color?: string,
}


export const Button = ({text}: IPropsButton) => {
  return (
    <GenericButtonStyled>{text}</GenericButtonStyled>
  )
}
