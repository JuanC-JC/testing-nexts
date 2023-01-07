import { useState } from "react"
import { PerformanceStyled } from "./Performance.styled"
import { PerformanceForm } from "./PerformanceForm"
import { PerformanceTable } from "./PerformanceTable"

// import { useState } from "react"

export interface Data {
    hColumn: (object)[],
    plans: (object)[],
    motorcycles: (object)[],
}

const dataTablePerformance : Data =  {
    hColumn: [{
            type:"Tipo de aluguel", 
            cost:"Aluguel semanal1", 
            gas:"Gasolina semanal2", 
            total:"Total semanal", 
            img:false
        }],
    plans: [
        // {type:"sel", cost:0, gas:0, total:0, img:true},
        {type:"Otro", cost:200, gas:0, total:0, img:true},
        {type:"Uno", cost:220, gas:0, total:0, img:true},
        {type:"Uno mas", cost:220, gas:0, total:0, img:true},
        {type:"Desenrola (NIU  NQi GTS)", cost:245, gas:0, total:0.1, img:true},
    ],
    motorcycles: [
        {type:"Moto à gasolina", cost:269, gas:0.1, total:0.1, img:true}
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
    
    console.log('performance',form);
    // const handleData = () =>{
    //     //otro:[{algo: "algo"}]
    //     setDataTable({...dataTablePerformance, otro:[{algo: "algo"}]})
    // }

   

    return (
        <PerformanceStyled>
            <PerformanceForm data={dataTable} changeInputForm={changeInputForm} form={form}/>
            <PerformanceTable data={dataTable} form={form}/>
        </PerformanceStyled>
    )
}
