export const theme = {
  color: {
    primary: "#0867e8",
    secondary: "#f0f4ff",
    tertiary: "#0f2d4f",
    white: "#fff",
    black: "#000",
    border: "#edf1f5",
    background: "#fff",
    text: "#222",
    mutedText: "#64748b",
    dark: {
      background: "#182a41",
      text: "#ffffff",
      mutedText: "#b8c8d9",
      border: "#34475c",
      surface: "#172638",
      control: "#243b53",
      accent: "#8dc4ff",
    },
  },
  font: {
    heading: "Inter, sans-serif",
    body: "Open Sans, Arial, sans-serif",
  },
  fontsize: {
    body: "0.875rem", //14px
    medium: "1rem", //16px
    navigation: "1.125rem", //18px
    h3: "1.25rem", //20px
    h2: "1.5rem", //24px
    mobileHeading: "1.5rem", //24px
    h1: "1.875rem", //30px
  },
  fontWeight: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    body: 1.4,
    heading: 1.5,
  },
  shadow: {
    input: "inset 1px 1px 3px #0004",
    button: "0 4px 4px #0002",
  },
  radii: {
    control: "4px",
  },
  layout: {
    contentWidth: "1262px",
  },
  breakpoint: {
    mobile: "600px",
    footer: "800px",
    goals: "1000px",
    header: "1150px",
    navigation: "1400px",
  },
} as const;

export type Theme = typeof theme;
