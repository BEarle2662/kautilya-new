/** @type {import('@material-tailwind/react').ButtonStyleTypes} */
/** @type {import('@material-tailwind/react').AccordionStylesType } */

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

const accordianTheme = {
  styles: {
    base: {
      header: {
        initial: {
          borderWidth: "border-b-0 border-b-blue-gray-100",
        },
      },
      body: {
        borderWidth: "border-t border-b-blue-gray-200",
        p: {
          marginBottom: "mb-4", // Adds margin-bottom to paragraphs
          fontSize: "text-lg", // Adjust font size
        },
        a: {
          color: "text-blue-500", // Blue text color for links
          "&:hover": {
            color: "text-blue-700", // Darker blue on hover
          },
        },
      },
    },
  },
};

export const theme = {
  button: buttonTheme,
  accordion: accordianTheme,
};
