import styled, { CSSProperties, MainTheme } from "styled-components"
import mixinsStyled from "../../../configuration/mixins.styled"


interface IPropsInputText extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  onChange?: (args:any) => void,
  formatter?: (args:any) => string
  // styles?: CSSProperties 
  //TODO SUPPORT STYLES BY OBJECT AND TRANSPILE TO STRING
  //TODO SUPPOORT FORMAT INSIDE
}

const InputTextStyled = styled.div.attrs({
  className: "inputText"
})`
  display: flex;
  width: 100%;
  gap: 16px;
  flex-direction: column;

  input{
    outline: none;
    border: 2px solid black;
    width: 100%;
    padding: 20px;
  }

  label{
    ${mixinsStyled.H5_MOBILE}
  }
`


export function InputText({ label, formatter, ...props }: IPropsInputText) {

  const handleChange = ({target}: {target: HTMLInputElement}) => {
    
    if(typeof props.onChange === "function") {
      const value = target.value
      const formatedValue = typeof formatter === "function" ? formatter(value) : value

      props.onChange({name:target.name, value: formatedValue})
    }
  }

  return (
    <InputTextStyled>
      <label>{label}</label>
      <input {...props} value={props.value} type="text" onChange={handleChange}/>
    </InputTextStyled>
  )
}
