import styled, { MainTheme } from "styled-components";

export const PerformanceTableStyled = styled.div`
  padding: 24px 24px 16px;

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
    }
  }

  @media (min-width: 720px) {
    .Performance__Container{
      flex-direction: column;
      min-width: 700px;
      max-width: 1064px;
    }
  }
`

//padding: ${({theme}: {theme: MainTheme})=> theme.paddings.small};

// h1{
//   margin-bottom: ${({theme}: {theme:MainTheme})=> theme.paddings.medium};
//   text-align: center;
//   font-size: 30px;
//   line-height: normal;
// }

// .PerformanceForm__form{
//   display: flex;
//   flex-direction: column;
//   gap: ${({theme}: {theme:MainTheme})=> theme.margins.small};
//   justify-content: center;
// }

// button{
//   width: 100%;
//   padding: 16px 0;
//   font-size: 16px;
//   font-weight: 700;
//   max-width: 334px;
//   margin-top: 36px;
//   align-self: center;

// }

// input{
//   padding: 16.5px 24px;
//   font-weight: bold;
// }

// label{
//   color: white;
// }


// @media (min-width: 720px) {
//   .PerformanceForm__form{
//       flex-direction: row;
//     }

//   .inputText, .inputSelect{
//       max-width: 334px;
//   }

//   h1{
//     margin-bottom: ${({theme}: {theme:MainTheme})=> theme.margins.medium};
//   }

//   button{
//     align-self: center;
//     /* width: 350px; */
//       }
//   }
