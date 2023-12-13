import color from 'color';

const base = {
  red: '#D8434E',
  error: '#ff1744',
  paleRed: '#de5246',
  rustyRed: '#d12d17',
  vermillion: '#e8331d',
  alert: '#FF0928',

  green: '#4CAF50',
  greenValid: '#17d142',
  valid: '#14CC70',

  yellow: '#fdc200',

  primary: '#2271E9',
  link: '#407DC8',
  cloudyBlue: '#9fbee4',
  blueyGrey: '#8090b4',
  softBlueTwo: '#6f9ed6',
  softBlue: '#66a0e6',
  dodgerBlue: '#3894fa',
  clearBlue: '#2e84ed',
  coolBlue: '#407dc8',
  coolBlueTwo: '#407ec9',
  windowsBlue: '#3972bd',
  midBlue: '#2867b2',
  blue: '#015bd7',
  denimBlue: '#40588e',
  marine: '#011e5c',
  marineBlue: '#012169',
  darkIndigo: '#082241',

  white: '#ffffff',
  whiteTwo: '#fafafa',
  tint5: '#F2F2F2',
  paleGrey: '#f2f3f4',
  paleGreyTwo: '#eff3f8',
  paleGreyThree: '#f2f3f4',
  lightPeriwinkle: '#dddfe1',
  veryLightPinkFour: '#dedede',
  veryLightPinkThree: '#e7e7e7',
  tint4: '#E8E8E8',
  tint6: '#EAEAEA',
  lightBlueGrey: '#cdcfd0',
  veryLightPink: '#d8d8d8',
  silverTwo: '#dddfe1',
  silver: '#cfd0d0',
  lightGrey: '#BDC3C7',
  greyish: '#b9b9b9',
  veryLightPinkTwo: '#b9b9b9',
  coolGrey: '#9ea1a1',
  blueGrey: '#8e8e93',
  brownGrey: '#939393',
  brownGreyTwo: '#959595',
  tint1: '#ABACAC',
  tint2: '#C0C1C1',
  tint3: '#CCCCCB',
  warmGrey: '#707070',
  brownishGreyTwo: '#707070',
  brownishGreyThree: '#5f5f5f',
  brownishGrey: '#5c5c5c',
  greyishBrown: '#4a4a4a',
  gray: '#5C5C5C',
  textGray: '#444545',

  black: '#000000',
  blackTwo: '#1f1f1f',
};

const named = {
  background: '#F7F7F7',
  secondary: '#2271E9',
};


export const withAlpha = (val: string, alpha: number) => color(val).alpha(alpha).toString();

export const withDark = (val: string, darken: number) => color(val).darken(darken).toString();

export const colors = {
  ...base,
  ...named,
  withAlpha,
  withDark,
};
