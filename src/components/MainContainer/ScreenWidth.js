import React from "react";

const ScreenWidth = ({
  children,
  layoutwidth = "false",
  section = "common",
}) => {
  const screen_width =
    section === "common" ? "max-w-screen-xl" : "max-w-screen-2xl";

  return (
    <>
      {layoutwidth === "true" ? (
        <div className={`mx-auto  px-8 w-full py-8 ${screen_width}`}>
          {children}
        </div>
      ) : (
        <div className="mx-auto w-full px-5 md:px-0">{children}</div>
      )}
    </>
  );
};
export default ScreenWidth;
