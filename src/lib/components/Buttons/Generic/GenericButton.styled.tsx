import styled from "styled-components";

export const GenericButtonStyled= styled.button`
  background-color: ${(props:any)=> props.color || props.theme.colors.primary};
  color: white;
  outline: none;
  border: none;
  padding: 20px;
`