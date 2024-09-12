import React from "react";

const ScreenWidth = ({ children, layoutwidth = "false" }) => {
  return (
    <>
      {layoutwidth === "true" ? (
        <div className="mx-auto max-w-screen-2xl px-5 w-full py-8">
          {children}
        </div>
      ) : (
        <div className="mx-auto  w-full px-5 md:px-0">{children}</div>
      )}
    </>
  );
};
export default ScreenWidth;
