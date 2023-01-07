import React, { useState } from "react"
import { PerformanceTableStyled } from "./style"
import { ColumnPerformance } from "../../../../../lib/components/ColumnPerformance/index"
import { Data } from ".."

interface IPropsPerformanceTable {
    data: Data,
    form: any,
  }

export const PerformanceTable = ({data, form} : IPropsPerformanceTable) => {

    // interface Data {
    //     hColumn: (object)[],
    //     plans: (object)[],
    //     motorcycles: (object)[],
    // }

    // const dataTablePerformance : Data =  {
    //     hColumn: [{
    //             type:"Tipo de aluguel", 
    //             cost:"Aluguel semanal1", 
    //             gas:"Gasolina semanal2", 
    //             total:"Total semanal", 
    //             img:false
    //         }],
    //     plans: [
    //         {type:"Desenrola (NIU  NQi GTS)", cost:245, gas:0, total:0.1, img:true},
    //         {type:"Otro", cost:200, gas:0, total:0, img:true},
    //         {type:"Uno mas", cost:220, gas:0, total:0, img:true},
    //     ],
    //     motorcycles: [
    //         {type:"Moto à gasolina", cost:269, gas:0.1, total:0.1, img:true}
    //     ]

    // }

    console.log('form in TBLE>>>', form);
    

    // const currentPlan : (object)[] = data['plans'].filter((plan :any)=> plan.type === "Desenrola (NIU  NQi GTS)")
    const currentPlan : (object)[] = data['plans'].filter((plan :any)=> plan.type === form.select )
   

    const style: any = {
        background: '#DFFF00',
        fontWeight: " bold",
    }

    return (
        <PerformanceTableStyled>
            <div className="Performance__Container">
                
                <ColumnPerformance dataRows={data.hColumn}  />
                <ColumnPerformance dataRows={currentPlan} styles={style} />
                <ColumnPerformance dataRows={data.motorcycles}  />
            </div>
            <div className="Performance__annotationsBox">
                <span><sup>1</sup>Considerando plano de contratação mensal. </span>
                <span><sup>2</sup>Referências: consumo médio = 40km/L e preço médio da gasolina = R$ 4,84/L.</span>
            </div>

        </PerformanceTableStyled>
    )
}

