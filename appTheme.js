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
        py: "py-4",
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
    className: "border-2",
    activeClassName: "text-white border-2",
    disabled: false,
  },
  styles: {
    base: {
      tab: {
        initial: {
          display: "flex",
          alignItems: "items-center",
          justifyContent: "md:justify-center",

          width: "w-auto",
          height: "h-auto",
          position: "relative",
          bg: "bg-transparent",
          py: "py-4",
          px: "px-2",
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
      p: "p-4",
      fontSmoothing: "antialiased",
      fontSize: "text-base",
      lineHeight: "leading-relaxed",
      overflow: "overflow-x-auto",
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

        border:
          "hover:border-b-2  focus:border-b-2  active:border-b-2  hover:border-blue-gray-50 focus:border-blue-gray-50  active:border-blue-gray-50",
        borderRadius: "rounded-none",
        boxShadow: "shadow-lg shadow-blue-gray-500/10",
        color: "text-black",
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
          bg: "hover:bg-primary hover:bg-opacity-1 focus:bg-primary focus:bg-opacity-1 active:bg-primary active:bg-opacity-1",
          color: "hover:text-black focus:text-black active:text-black",
          outline: "outline-none",
        },
      },
    },
  },
};

const cardTheme = {
  styles: {
    base: {
      initial: {
        borderRadius: "rounded-none",
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
  tabsHeader: tabsHeaderTheme,
  tabsBody: tabsBody,
  tab: tabTheme,
  tabsBody: tabsBodyTheme,
  tabPanel: tabPanelTheme,
  dialog: dialogTheme,
  menu: menuTheme,
  card: cardTheme,
};
