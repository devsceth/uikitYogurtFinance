import { Colors } from "./types";

export const baseColors = {
  failure: "#ED7F10",
  primary: "#f8dec7",
  primaryBright: "#f8dec7",
  primaryDark: "#f8dec7",
  secondary: "#f8dec7",
  success: "#32D9C8",
  successalt: "#e2f4ff",
  warning: "#f8dec7",
  soon: "#f8dec7",
};

export const brandColors = {
  binance: "#f8dec7",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#E3D6BF",
  backgroundDisabled: "#E3D6BF",
  backgroundAlt: "#E3D6BF",
  contrast: "#191326",
  dropdown: "#E3D6BF",
  invertedContrast: "#FFFFFF",
  input: "#E3D6BF",
  inputSecondary: "#E3D6BF",
  tertiary: "#E3D6BF",
  text: "#f8dec7",
  textDisabled: "#BDC2C4",
  textSubtle: "#f8dec7",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #eff8ff 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#f8dec7",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#011A27",
  inputSecondary: "#66578D",
  primaryDark: "#f8dec7",
  tertiary: "#353547",
  text: "#e2effc",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #2a4654 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  },
};
