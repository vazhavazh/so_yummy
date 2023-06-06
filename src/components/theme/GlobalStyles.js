import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --mainBgColorWhite: #fafafa;
    --secondaryBgColorWhite: #ffffff;
    --mainTextColor: #3e4462;
    --mainAccentColor: #8baa36;
    --secondaryAccentColor: #22252a;
    --hoverAnimation: 0.2s ease;
    --shadowColor: #e0e0e0;
    --wrapperBgGrey: #ebf3d4;
  }

  .dark-mode {
    --mainBgColorWhite: #1E1F28;
    --secondaryBgColorWhite: #2A2C36;
    --mainTextColor: #fafafa;
    --mainAccentColor: #8baa36;
    --secondaryAccentColor: #fafafa99;
  }

`;

// .my - special -case {
//   --mainBgColor: #ff0000; /* Желаемый цвет для частного случая */
//   --mainTextColor: #00ff00; /* Желаемый цвет для частного случая */
// }