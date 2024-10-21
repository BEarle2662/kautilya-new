// /** @type {import('@material-tailwind/react').ButtonStyleTypes} */
/** @type {import('@material-tailwind/react').AccordionStylesType } */
/** @type {import('@material-tailwind/react').TabsHeaderStylesType } */

const buttonTheme = {
  defaultProps: {
    variant: "filled",
    size: "sm",
    fullWidth: false,
    ripple: true,
    className: "rounded-none bg-[#b11016]",
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

const tabsTheme = {
  styles: {
    base: {
      display: "flex",
      position: "relative",
      bg: "bg-white",
      bgOpacity: "bg-opacity-0",
      borderRadius: "rounded-none",
      padding: "p-6",
    },
  },
};

const headerTheme = {
  styles: {
    base: {
      bg: "bg-transparent",
      bgOpacity: "bg-opacity-0",
      borderRadius: "rounded-0",
      padding: "p-0",
    },
  },
};

const tabTheme = {
  defaultProps: {
    className: "border-2",
    activeClassName: "text-white border-2",
    disabled: false,
  },
  styles: {
    base: {
      tab: {
        initial: {
          bg: "bg-transparent",
          py: "py-2",
          px: "px-2",
          fontWeight: "font-semibold",
          width: "w-full",
          height: "h-full",
          mx: "mx-2",
          className: "border border-primary",
        },
      },
      indicator: {
        position: "absolute",
        inset: "inset-0",
        zIndex: "z-10",
        height: "h-full",
        bg: "bg-[#b11016]",
        borderRadius: "rounded-none",
        boxShadow: "none",
      },
    },
  },
};

const tabsBody = {
  defaultProps: {
    className: "border-2",
    activeClassName: "text-white border-2",
    disabled: false,
  },
  styles: {
    base: {
      tabsBody: {
        initial: {
          bg: "bg-transparent",
          py: "py-4",
          px: "px-4",
          borderWidth: "border-1 border-gray",
          fontWeight: "font-semibold",
          width: "w-full",
          height: "h-full",
          mx: "mx-2",
        },
      },
    },
  },
};
export const customTheme = {
  button: buttonTheme,
  accordion: accordianTheme,
  tabs: tabsTheme,
  tabsHeader: headerTheme,
  tabsBody: tabsBody,
  tab: tabTheme,
};
