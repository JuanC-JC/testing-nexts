import styled, { MainTheme } from "styled-components";

export const ContactUsFormStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1440px;

  padding: ${({theme}: {theme: MainTheme})=> theme.paddings.small};

  h1{
    margin-bottom: ${({theme}: {theme:MainTheme})=> theme.margins.small};
    text-align: center;
  }

  .contactUsForm__form{
    display: flex;
    flex-wrap: wrap;
    gap: ${({theme}: {theme:MainTheme})=> theme.margins.small};
  }

  .contactUsForm__formSection{
    flex: 1 1 calc(50% - ${({theme}: {theme:MainTheme})=> theme.margins.small});
    min-width: 280px;
    display: flex;
    flex-direction: column;
    gap: ${({theme}: {theme:MainTheme})=> theme.margins.small};
  }

  button{
    margin-top: ${({theme}: {theme:MainTheme})=> theme.margins.medium};
    /* justify-self: start; */
  }


  @media (min-width: 720px) {
    h1{
      margin-bottom: ${({theme}: {theme:MainTheme})=> theme.margins.medium};
    }

    button{
      align-self: center;
      width: 350px;
    }
  }

`