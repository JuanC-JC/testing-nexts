import styled, { MainTheme } from 'styled-components'


export const FQAStyled = styled.div.attrs({
  className: "FQA__container"
})`
  display: flex;
  width: 100%;
  background-color: black;
  gap: ${({ theme }: { theme: MainTheme }) => theme.margins.medium};
  margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.margins.medium};

  h1{
    color: white;
    margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.margins.small};
  }

  .questions__block{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }: { theme: MainTheme }) => theme.paddings.small};
  }

  .questions__items{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 3px;
  }


  .questions__image, .questions__vector{
    display: none;
  }


  @media (min-width: 1024px) {

    justify-content: center;
    margin-left:auto;
    margin-right: auto;
    padding-bottom: 120px;
    margin-top: 100px;
    
    h1{
      margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.paddings.medium};
    }
    
    .questions__block{
      flex: 1 1 50%;
      padding-top: ${({ theme }: { theme: MainTheme }) => theme.paddings.medium};
      min-width: 450px;
    }


    .questions__image{
      display: flex;
      flex: 1 1 50%;
      max-height: 670px;
      max-width: 800px;
      position: relative;

      img{
        width: 100%;
        object-fit: cover;
      }
    }

    .questions__vector{
      width: 100%;
      display: flex;
      overflow-x: hidden;
      position: absolute;
      transform:translateY(-50%);
      z-index: 10;
      /* right: 0; */
    }


  }


  @media (min-width: 1350px){
    .questions__block{
      padding-left: ${({ theme }: { theme: MainTheme }) => theme.margins.medium};
    }
  }
`