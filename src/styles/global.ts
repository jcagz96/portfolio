import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${props => props.theme.colors.body};
    color: ${props => props.theme.colors.text};
  }

  a{
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }

  a:hover{
    color: ${props => props.theme.colors.secondaryText};
  }

  *:focus {
    outline: none;
}


`;