import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
     margin: 0;
    padding: 0;
}
body{
     background-color: ${(props) => props.theme.background};
     color: ${(props) => props.theme.color};
     font-family: ${(props) => props.theme.font.fontFamily};
     font-weight: ${(props) => props.theme.font.regular};
}
a{
     text-decoration: none;
}
li{
     list-style: none;
}
input:focus {
    outline: none;
}
::placeholder{
     color:  ${(props) => props.theme.borderColor};
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
}
input[type=number] {
     -moz-appearance: textfield;
}
button::-moz-focus-inner,
button {
     background-color: transparent;
     font-family: inherit;
     font-size: inherit;
     font-style: inherit;
     font-weight: inherit;
     line-height: inherit;
     padding: 0;
     border: 0;
}
`;
