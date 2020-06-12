const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  blue1: '#0066CB',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  gray1: '#7D8797',
  gray2: '#E9E9E9',
  gray3: '#EDEEF0',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  white: 'white',
  black: 'black',
  disabled: mainColors.gray3,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.gray1,
    inactive: mainColors.dark2,
    active: mainColors.green1,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
  border: mainColors.gray2,
  card: {
    primary: mainColors.green2,
  },
};
