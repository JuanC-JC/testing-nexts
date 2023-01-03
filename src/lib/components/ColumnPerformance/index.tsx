// import { useState } from "react"
import styled, { CSSProperties, MainTheme } from "styled-components"
// import mixinsStyled from "../../../../src/lib/configuration/mixins.styled"


interface IPropsColumnPerformance {
  image?: string,
  styles?: any,
  dataRows: (string)[],
}


const ColumnPerformanceStyled = styled.div.attrs({
  className: "ColumnPerformance"  
})`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-around;
    align-items: center;

    .columnPerformance__row{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 10px
    }

    span{
        font-size: 16px;
    }

    @media (min-width: 720px) {

        {
            flex-direction: row;
            width: 100%;
      }
    
`


export function ColumnPerformance({ image, styles, dataRows}: IPropsColumnPerformance) {



  return (
    <ColumnPerformanceStyled style={styles}>
        {
            dataRows.map((dataRow : any)=>{
                return (
                    <div className="columnPerformance__row">
                        <span>{dataRow}</span>
                    </div>
                )
            })
        }
    </ColumnPerformanceStyled>
  )
}
