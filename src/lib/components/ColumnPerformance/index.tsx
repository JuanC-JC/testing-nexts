// import { useState } from "react"
import styled, { CSSProperties, MainTheme } from "styled-components"
// import mixinsStyled from "../../../../src/lib/configuration/mixins.styled"
import icon from "../../../assets/images/icon_vammo.png"

interface IPropsColumnPerformance {
    styles?: any,
    dataRows: (string | object)[],
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
    padding: 10px;

    .columnPerformance__row{
        width: 100%;
        min-height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 16px;
    }   

    img {
        width: 24px;
    }

    .columnPerformance__rowImg{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .title{
        font-weight: bold;
    }

    @media (min-width: 720px) {

        {
            flex-direction: row;
            width: 100%;
      }
    
`


export function ColumnPerformance({ styles, dataRows }: IPropsColumnPerformance) {

    return (
        <ColumnPerformanceStyled style={styles}>
            {
                dataRows.map((dataRow: any) => {

                    return (
                        <>
                            <div className="columnPerformance__row title">
                                <span className={dataRow.img === true ? "columnPerformance__rowImg" : ""}>
                                    { dataRow.img === true ? <img src={icon} alt=""/> : <></>}
                                    {dataRow.type}
                                </span>
                            </div>
                            <div className="columnPerformance__row">
                                <span>
                                    { dataRow.img === true ? `R$ ${dataRow.cost}`:`${dataRow.cost}`}
                                </span>
                            </div>
                            <div className="columnPerformance__row">
                                <span>
                                    {dataRow.img === true ? `R$ ${dataRow.gas}`:`${dataRow.gas}`}   
                                </span>
                            </div>
                            <div className={dataRow.img === true ? "columnPerformance__row" : "columnPerformance__row title"}>
                                <span>
                                    {dataRow.img === true ? `R$ ${dataRow.total}`:`${dataRow.total}`}
                                </span>
                            </div>
                        </>
                            
                    )
                })
            }
        </ColumnPerformanceStyled>
    )
}
