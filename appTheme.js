/** @type {import('@material-tailwind/react').ButtonStyleTypes} */
/** @type {import('@material-tailwind/react').AccordionStylesType } */
/** @type {import('@material-tailwind/react').TabsStylesType } */
/** @type {import('@material-tailwind/react').TabsHeaderStylesType } */
/** @type {import('@material-tailwind/react').TabsBodyStylesType } */
/** @type {import('@material-tailwind/react').TabPanelStylesType  } */
/** @type {import('@material-tailwind/react').TabStylesType } */

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
          marginBottom: "mb-4",
          fontSize: "text-lg",
        },
        a: {
          color: "text-blue-500",
          "&:hover": {
            color: "text-blue-700",
          },
        },
      },
    },
  },
};
const tabTheme = {
  tabs: {
    tabsHeader: {
      styles: {
        base: {
          display: "flex",
          position: "relative",
          bg: "!bg-primary",
          bgOpacity: "bg-opacity-10",
          borderRadius: "rounded-lg",
          p: "p-1",
          active: "bg-primary text-white",
        },
      },
    },
    tab: {
      className: "text-primary text-left",
      bg: "bg-transparent",
    },
    tabsBody: {
      className: "border-t border-gray-100 border-2",
      bg: "!bg-transparent",
      overflow: "overflow-hidden",
    },
  },
};

export const theme = {
  button: buttonTheme,
  accordion: accordianTheme,
  tabs: tabTheme,
};
