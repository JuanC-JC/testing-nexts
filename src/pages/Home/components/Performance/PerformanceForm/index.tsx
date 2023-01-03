import React, { useState } from "react"
import { Button, InputText, InputSelect } from "../../../../../lib/components"
import { PerformanceFormStyled } from "./style"


interface IPropsEventInputForm extends React.FormEvent<HTMLInputElement> {
    name?: string
}



//TODO: do validations
export const PerformanceForm = () => {


    const [form, setForm] = useState({
        km: "",
        select: "",
    })


    const changeInputForm = ({ name, value }: any) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    const optionsArray = ["Desenrola (NIU NQi GTS)", "Algo", "otro"]
    return (
        <PerformanceFormStyled>
            <h1>Quer saber se vale a pena mudar para uma moto elétrica?</h1>
            <div className="PerformanceForm__form">

                <InputText
                    style={{ padding: "16.5px 24px", fontWeight: "bold" }}
                    name="km"
                    onChange={changeInputForm}
                    placeholder="Ex: 160"
                    label="Quantos km você roda por dia?"
                    value={form.km}
                />

                <InputSelect
                    style={{ padding: "16px 24px", fontWeight: "bold" }}
                    name="select"
                    onChange={changeInputForm}
                    placeholder="Selecione"
                    label="Selecione um plano para comparar"
                    optionsSelect={optionsArray}
                />

                <Button text={"Calcular"} />
            </div>
        </PerformanceFormStyled>
    )
}
