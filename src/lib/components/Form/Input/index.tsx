import { useState } from "react"
import styled, { CSSProperties, MainTheme } from "styled-components"
import mixinsStyled from "../../../configuration/mixins.styled"


interface IPropsInputText extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  onChange?: (args: any) => void,
  formatter?: (args: any) => string,
  pattern?: RegExp ,
}

const InputTextStyled = styled.div.attrs({
  className: "inputText"
})`
  display: flex;
  width: 100%;
  
  flex-direction: column;

  input{
    margin-top: 16px;
    outline: none;
    border: 2px solid black;
    width: 100%;
    padding: 20px;
  }

  .inputText__error{
      border: 2px solid #DF3F3F;
      color: #DF3F3F;
  }

  label{
    ${mixinsStyled.H5_MOBILE}
  }

  p{
    opacity: 0;
  }

  .textError{
    color: #DF3F3F;
    font-size: 16px;
    opacity: 1;
  }
  
`


export function InputText({ label, formatter, pattern, ...props }: IPropsInputText) {

  const [error, setError] = useState(false);

  const handleChange = ({ target }: { target: HTMLInputElement }) => {

    if (typeof props.onChange === "function") {
      const value = target.value

      const formatedValue = typeof formatter === "function" ? formatter(value) : value

      props.onChange({ name: target.name, value: formatedValue })
    }
  }

  const handleBlur = ({ target }: { target: HTMLInputElement }) => {

    console.log({
      pattern: pattern,
      value: target.value,
    });
    const currentPattern: any = target.pattern
    const currentValue: string = target.value

    // if (target.validity.patternMismatch) {
    if (pattern.test(currentValue)) {
      console.log('validity', target.validity.patternMismatch, pattern);
      setError(false)
    } else {
      console.log('do not validate');
      setError(true)

    }
  }

  return (
    <InputTextStyled >
      <label>{label}</label>
      <input {...props} value={props.value} type="text" onChange={handleChange} pattern={pattern} onBlur={handleBlur} className={error === true ? 'inputText__error' : ''} />
      {
        error && (
          <p className='textError'>Error</p>
        )
      }
    </InputTextStyled>
  )
}
