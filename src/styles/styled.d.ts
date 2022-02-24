import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    primarry: string;
    secondary: string;
    title: string;
    color: string;
    background: string;
    backgroundSiderBar: string;
    borderColor: string;
    grey: string;
    black: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    font: {
      fontFamily: string;
      regular: number;
      bold: number;
    };
  }
}
