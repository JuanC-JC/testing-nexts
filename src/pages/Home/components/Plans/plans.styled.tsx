import styled, { MainTheme } from "styled-components"

export const PlansStyled = styled.div.attrs({
  className: "plans"
})`

  display: flex; 
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }: { theme: MainTheme }) => theme.paddings.small};
  margin-bottom: 24px;

  h3{
    text-align: center;
  }


  & > button{
    width: 312px;
  }

  .plans__container{
    display: flex;
    gap: ${({ theme }: { theme: MainTheme }) => theme.paddings.small};
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width:1024px){
      gap: 64px;
    }
  }


  @media (min-width: 1024px){
    gap: ${({ theme }: { theme: MainTheme }) => theme.paddings.medium};
    margin-bottom: 40px;

    h3{
      font-size: 36px;
    }
    
    & > button{
      width: 360px;
    }

  }

`