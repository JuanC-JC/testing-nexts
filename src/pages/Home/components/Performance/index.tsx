import { PerformanceStyled } from "./Performance.styled"
import { PerformanceForm } from "./PerformanceForm"
import { PerformanceTable } from "./PerformanceTable"

// import { useState } from "react"

export function Performance() {

    return (
        <PerformanceStyled>
            <PerformanceForm />
            <PerformanceTable />
        </PerformanceStyled>
    )
}