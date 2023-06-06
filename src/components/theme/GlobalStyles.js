import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --mainBgColorWhite: #fafafa;
    --secondaryBgColorWhite: #ffffff;
    --mainTextColor: #3e4462;
    --mainAccentColor: #8baa36;
    --secondaryAccentColor: #22252a;
    --darkGreytoGreen: #1E1F28;
    --shadowColor: #e0e0e0;
    --wrapperBgGrey: #ebf3d4;
    --greenToWhite: #8baa36;
    --greenToGrey: #8baa36;
    --whiteToWhite: #fafafa;
    --darkToWhite: #22252a;
  }

  .dark-mode {
    --darkToWhite: #fafafa;
    --darkGreytoGreen: #8baa36;
    --whiteToWhite: #fafafa;
    --greenToGrey: #1E1F28;
    --wrapperBgGrey: #1E1F28;
    --greenToWhite: #fafafa;
    --mainBgColorWhite: #1E1F28;
    --secondaryBgColorWhite: #2A2C36;
    --mainTextColor: #fafafa;
    --mainAccentColor: #8baa36;
    --secondaryAccentColor: #fafafa99;
  }

`;
