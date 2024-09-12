import React from "react";

const ScreenWidth = ({ children, layoutwidth = "false" }) => {
  return (
    <>
      {layoutwidth === "true" ? (
        <div className="mx-auto max-w-screen-xl px-5 w-full">{children}</div>
      ) : (
        <div className="mx-auto px-5 w-full">{children}</div>
      )}
    </>
  );
};
export default ScreenWidth;
