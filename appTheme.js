/** @type {import('@material-tailwind/react').ButtonStyleTypes} */

const buttonTheme = {
    defaultProps: {
      variant: "filled",
      size: "lg",
      color: "#b11016",
      fullWidth: false,
      ripple: true,
      className: "rounded-none",
    },
  };
  
  export const theme = {
    button: buttonTheme,
  };