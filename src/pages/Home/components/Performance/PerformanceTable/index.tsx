import React, { useState } from "react"
import { PerformanceTableStyled } from "./style"
import { ColumnPerformance } from "../../../../../lib/components/ColumnPerformance/index"





//TODO: do validations
export const PerformanceTable = () => {

    const data1: (string)[] = ["Tipo de aluguel", "Aluguel semanal1", "Gasolina semanal2", "Total semanal"]
    const data2: (string)[] = ["alogo", "dos", "semanal2", "Total"]

    const style: any = {
        background: '#DFFF00'
    }

    const optionsArray = ["Desenrola (NIU NQi GTS)", "Algo", "otro"]
    return (
        <PerformanceTableStyled>
            <div className="Performance__Container">
                <ColumnPerformance dataRows={data1} styles={{ background: "white" }} />
                <ColumnPerformance dataRows={data2} styles={style} />
                <ColumnPerformance dataRows={data1} styles={{ background: "white" }} />
            </div>

        </PerformanceTableStyled>
    )
}
