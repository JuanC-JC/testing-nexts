import React, { useEffect, useState } from "react"
import { PerformanceTableStyled } from "./style"
import { ColumnPerformance } from "../../../../../lib/components/ColumnPerformance/index"
import { Data } from ".."

interface IPropsPerformanceTable {
    data: Data,
    form: any,
  }

export const PerformanceTable = ({data, form} : IPropsPerformanceTable) => {

    const [columnPlan, setcolumnPlan] = useState([{ type: "Selecione", cost: 0, gas: 0, total: 0, img: true }])
    
    const currentPlan : (object)[] = data['plans'].filter((plan :any)=> plan.type === form.select )

    // setcolumnPlan(currentPlan)

   

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

