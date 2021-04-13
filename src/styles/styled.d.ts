import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    color: {
      primaryColor: string;
    };
    fonts: {
      normal: string;
    };
  }
}
