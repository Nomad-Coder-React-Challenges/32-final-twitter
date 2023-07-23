import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: {
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
      };
      second: {
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
      };
      error: {
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
      };
      mono: {
        black: string;
        400: string;
        300: string;
        200: string;
        100: string;
        white: string;
      };
    };
  }
}
