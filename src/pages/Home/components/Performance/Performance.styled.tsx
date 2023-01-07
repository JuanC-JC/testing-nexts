import styled, { MainTheme } from 'styled-components'


export const PerformanceStyled = styled.div.attrs({
  className: "Performance"
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  // background-color: black;
  margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.margins.medium};

  h1{
    color: white;
    margin-bottom: ${({ theme }: { theme: MainTheme }) => theme.margins.small};
  }

  @media (min-width: 720px) {
  
    h1{
      font-size: 48px;
      margin-bottom: 100px;
    }
  }
  
`

