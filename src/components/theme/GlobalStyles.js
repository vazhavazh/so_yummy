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
    --greyImageToDarkGrey: #ebf3d4;
    --darkToAccent: #22252A;
    --dartToLightForRemove: #1F242E;
  }

.dark-mode {
  --mainBgColorWhite: #1E1F28;
  --secondaryBgColorWhite: #2A2C36;
  --mainTextColor: #fafafa;
  --mainAccentColor: #8baa36;
  --secondaryAccentColor: #fafafa99;
  --darkGreytoGreen: #8baa36;
  --shadowColor: #e0e0e0;
  --wrapperBgGrey: #1E1F28;
  --greenToWhite: #fafafa;
  --greenToGrey: #1E1F28;
  --whiteToWhite: #fafafa;
  --darkToWhite: #fafafa;
  --greyImageToDarkGrey: #2A2C36;
  --darkToAccent: #8baa36;
  --dartToLightForRemove: #fafafa;
}

`;
