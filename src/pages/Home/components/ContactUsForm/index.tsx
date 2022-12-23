import React, { useState } from "react"
import { Button, InputText } from "../../../../lib/components"
import { ContactUsFormStyled } from "./style"


interface IPropsEventInputForm extends React.FormEvent<HTMLInputElement> {
  name?: string
}

function formatPhoneNumber(value:any) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, '');

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length;

  // we need to return the value with no formatting if its less then four digits
  // this is to avoid weird behavior that occurs if you  format the area code to early

  if (phoneNumberLength < 4) return phoneNumber;

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

function formatCPF(value:string) {
  if(!value) return value;

  const number = value.replace(/[^\d]/g, '');

  const length = number.length

  if(length < 4 ) return number

  if(length < 7) return `${number.slice(0,3)}.${number.slice(3)}`

  if(length < 10) return `${number.slice(0,3)}.${number.slice(3,6)}.${number.slice(6)}`

  return `${number.slice(0,3)}.${number.slice(3,6)}.${number.slice(6,9)}-${number.slice(9,11)}`

}

//TODO: do validations
export const ContactUsForm = () => {


  const [form, setForm] = useState({
    name: "",
    cpf: "",
    phone: "",
    address: ""
  })


  const changeInputForm = ({name, value}:any) => {
    setForm({
      ...form,
      [name]: value
    })
  }


  return (
    <ContactUsFormStyled>
      <h1>Preencha seus dados abaixo para entraremos em contato</h1>
      <div className="contactUsForm__form">
        <div className="contactUsForm__formSection">
          <InputText
            name="name"
            onChange={changeInputForm}
            placeholder="Ex: José Antonio"
            label="Nome complete"
            value={form.name}
          />
          <InputText
            name="cpf"
            placeholder='Ex: 000.000.000-00'
            label="CPF"
            value={form.cpf}
            onChange={changeInputForm}
            formatter={formatCPF}
          />
        </div>
        <div className="contactUsForm__formSection">
          <InputText
            name="phone"
            placeholder="Ex: (11) 912334-5678"
            label="Celular"
            value={form.phone}
            onChange={changeInputForm}
            formatter={formatPhoneNumber}
          />
          <InputText
            name="address"
            placeholder="Ex: vila Olímpia"
            label="Barrio onde mora"
            value={form.address}
            onChange={changeInputForm}
          />
        </div>
      </div>
      <Button text={"Enviar"} />
    </ContactUsFormStyled>
  )
}
