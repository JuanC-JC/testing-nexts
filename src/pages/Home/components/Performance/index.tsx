import { useEffect, useState } from "react"
import { PerformanceStyled } from "./Performance.styled"
import { PerformanceForm } from "./PerformanceForm"
import { PerformanceTable } from "./PerformanceTable"

// import { useState } from "react"

export interface Data {
    hColumn: (object)[],
    plans: (object)[],
    motorcycles: (object)[],
}

const dataTablePerformance: Data = {
    hColumn: [{
        type: "Tipo de aluguel",
        cost: "Aluguel semanal1",
        gas: "Gasolina semanal2",
        total: "Total semanal",
        img: false
    }],
    plans: [
        { type: "Selecione", cost: 0, gas: 0, total: 0, img: true },
        { type: "Uno", cost: 220, gas: 0, total: 0, img: true },
        { type: "Uno mas", cost: 300, gas: 0, total: 0, img: true },
        //este no encuentar coincidencia
        { type: "Desenrola (NIU NQi GTS)", cost: 269, gas: 0, total: 0.1, img: true },
    ],
    motorcycles: [
        { type: "Moto à gasolina", cost: 245, gas: 0, total: 0, img: true }
    ]

}

export function Performance() {

    const [form, setForm] = useState({
        km: "",
        select: "",
    })

    const [dataTable, setDataTable] = useState(dataTablePerformance)

    const changeInputForm = ({ name, value }: any) => {
        setForm({
            ...form,
            [name]: value
        })


    }

// calcular el total
    dataTable.plans.map((e) => {

        if (e.type === form.select) { e.total = totalWeek(e.cost, e.gas)}

    })

    dataTable.motorcycles.map((e)=>{
        e.total = totalWeek(e.cost, e.gas)
    })

    
    const calculate = () =>{
        const moto = {...dataTable}.motorcycles[0]
       
        const price = getGasPrice(form.km)
        
        setDataTable({
            ...dataTable, 
            motorcycles: [{...moto, gas: price }]
        })

        setForm({
            ...form, 
            km: ""
        })
    }


     console.log('tabla >>>', dataTable);
     

    return (
        <PerformanceStyled>
            <PerformanceForm data={dataTable} changeInputForm={changeInputForm} form={form} calculate={calculate}/>
            <PerformanceTable data={dataTable} form={form} />
        </PerformanceStyled>
    )
}



function getGasPrice(km: number) {

    //consumption average Km/L
    const consumptionAverage = 40

    //price per day of gas L
    const gasPriceL = 4.84

    const weeklyPrice = Math.floor(((km / consumptionAverage) * gasPriceL) * 7)

    return weeklyPrice
}


function totalWeek(rentalPrice: number, gasPrice: number) {

    const total = rentalPrice + gasPrice

    return total

}
