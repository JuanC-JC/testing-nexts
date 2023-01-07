import styled, { MainTheme } from "styled-components";

export const PerformanceTableStyled = styled.div`
  padding: 24px 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Performance__Container{
    width: 90%;
    min-width: 300px;
    max-width: 1064px;
    border: 8px solid black;
    padding: 8px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
    // }
  }

  .Performance__annotationsBox{
    width: 90%;
    min-width: 300px;
    max-width: 1064px;
    margin: 16px auto 0;
    font-size: 12px;
    color: #767676;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (min-width: 720px) {
    .Performance__Container{
      flex-direction: column;
      min-width: 650px;
      max-width: 1064px;
    }

    .Performance__annotationsBox{
      justify-content: flex-end;
    }
  }
`
