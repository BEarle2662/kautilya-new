const buttonTheme = {
  defaultProps: {
    variant: "filled",
    size: "lg",
    color: "#b11016",
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
        // borderWidth: "border-t border-b-blue-gray-200",
        p: {
          marginBottom: "mb-4", // Adds margin-bottom to paragraphs
          fontSize: "text-xl", // Adjust font size
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
  defaultProps: {
    className: "",
    orientation: "horizontal",
  },
  styles: {
    base: {
      overflow: "overflow-visible",
    },
    horizontal: {
      display: "block",
    },
    vertical: {
      display: "flex ",
    },
  },
};

const tabsHeaderTheme = {
  defaultProps: {
    className: "",
  },
  styles: {
    base: {
      display: "flex",
      position: "relative",
      bg: "bg-transparent",
      bgOpacity: "bg-opacity-60",
      borderRadius: "rounded-none",
      p: "p-0",
    },
    horizontal: {
      flexDirection: "flex-row",
    },
    vertical: {
      flexDirection: "flex-col",
    },
  },
};

const tabTheme = {
  defaultProps: {
    className: "bg-white mr-2 border-2 border-gray-200 w-full",
    activeClassName: "text-white border-2 border-slate-800",
    disabled: false,
  },
  styles: {
    base: {
      tab: {
        initial: {
          display: "flex",
          alignItems: "items-center",
          justifyContent: "justify-center",

          width: "w-full",
          height: "h-full",
          position: "relative",
          bg: "bg-transparent",
          py: "py-3",
          px: "px-2",
          fontSize: "text-base",
          fontWeight: "font-semibold",
        },
      },
      indicator: {
        position: "absolute",
        inset: "inset-0",
        zIndex: "z-10",
        height: "h-full",
        bg: "bg-[#b11016]",

        borderRadius: "rounded-none",
      },
    },
  },
};

const tabPanelTheme = {
  defaultProps: {
    className: "",
  },
  styles: {
    base: {
      width: "w-full",
      height: "h-max",
      p: "p-6",
      fontSmoothing: "antialiased",
      fontSize: "text-base",
      lineHeight: "leading-relaxed",
    },
  },
};

const tabsBodyTheme = {
  defaultProps: {
    animate: {
      unmount: {},
      mount: {},
    },
    className: "",
  },
  styles: {
    base: {
      display: "block",
      width: "w-full",
      position: "relative",
      bg: "bg-white",
      overflow: "overflow-visible",
      boxShadow: "shadow-lg shadow-cyan-500/50",
    },
  },
};

const dialogTheme = {
  defaultProps: {
    size: "md",
    dismiss: {},
    animate: {
      unmount: {},
      mount: {},
    },
    className: "",
  },

  styles: {
    base: {
      backdrop: {
        display: "grid",
        placeItems: "place-items-center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "w-screen",
        height: "h-full",
        backgroundColor: "bg-black",
        backgroundOpacity: "bg-opacity-60",
        backdropFilter: "backdrop-blur-sm",
        overflow: "overflow-auto",
        p: "p-6",
      },
      container: {
        position: "relative",
        bg: "bg-white",
        m: "5rem",

        borderRadius: "rounded-none",
        boxShadow: "shadow-2xl",
        color: "text-blue-gray-500",
        fontSmoothing: "antialiased",

        fontSize: "text-base",

        lineHeight: "leading-relaxed",
      },
    },
  },
};

const menuTheme = {
  defaultProps: {
    placement: "bottom",
    offset: 5,
    dismiss: {
      itemPress: true,
    },
    animate: {
      unmount: {},
      mount: {},
    },
    lockScroll: false,
  },
  styles: {
    base: {
      menu: {
        bg: "bg-white",
        minWidth: "min-w-[180px]",
        p: "p-0",

        border: "border border-blue-gray-50",
        borderRadius: "rounded-none",
        boxShadow: "shadow-lg shadow-blue-gray-500/10",
        color: "text-blue-gray-500",
        overflow: "overflow-auto",
        outline: "focus:outline-none",
        zIndex: "z-[999]",
      },
      item: {
        initial: {
          display: "block",
          width: "w-full",
          pt: "pt-[9px]",
          pb: "pb-2",
          px: "px-6",
          borderRadius: "rounded-none",
          textAlign: "text-start",
          lightHeight: "leading-tight",
          cursor: "cursor-pointer",
          userSelect: "select-none",
          transition: "transition-all",
          bg: "hover:bg-blue-gray-50 hover:bg-opacity-0 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80",
          color:
            "hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900",
          outline: "outline-none",
        },
      },
    },
  },
};

export const customTheme = {
  button: buttonTheme,
  accordion: accordianTheme,
  tabs: tabsTheme,
  tabsHeader: tabsHeaderTheme,
  tab: tabTheme,
  tabsBody: tabsBodyTheme,
  tabPanel: tabPanelTheme,
  dialog: dialogTheme,
  menu: menuTheme,
};
