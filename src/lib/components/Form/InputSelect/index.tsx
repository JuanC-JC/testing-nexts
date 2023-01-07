import { useState } from "react"
import styled, { CSSProperties, MainTheme } from "styled-components"
import mixinsStyled from "../../../configuration/mixins.styled"


interface IPropsInputSelect extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  optionsSelect: (string)[]
  onChange?: (args: any) => void,
  setOption: (args: any) => void,
}


const InputSelectStyled = styled.div.attrs({
  className: "inputSelect"
})`
  display: flex;
  width: 100%;
  gap: 16px;
  flex-direction: column;

  .select{
    outline: none;
    border: 2px solid black;
    width: 100%;
    background: #fff;
    background: url('../../../../assets/images/icon_select.png') no-repeat 95% 50% white !important;
  }

  select{
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 20px;
    width: 100%;
    outline: none;
   /*  background: url('../../../../assets/images/icon_select.png') no-repeat 95% 50% white !important; */
  }

  selected {
    background: red;
    color: black;
  }


  label{
    ${mixinsStyled.H5_MOBILE}
  }
`


export function InputSelect({ label, optionsSelect, ...props }: IPropsInputSelect) {
  
  const [option, setOption] = useState("")


  const handleChange = ({ target }: { target: HTMLInputElement }) => {

    if (typeof props.onChange === "function") {

      props.onChange({ name: target.name, value: target.value })
      setOption(target.value)
    }



  }

  return (
    <InputSelectStyled >
      <label>{label}</label>
      <div className="select">
        <select {...props} value={option} onChange={handleChange}>
          {
            optionsSelect.map((optSelect: string) => {
              return (
                <option>{optSelect}</option>
              )
            })
          }
        </select>
      </div>
    </InputSelectStyled>
  )
}
