import React from "react";
import MetaData from "./MetaData";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children, title, description, keywords, img }) => {
  return (
    <>
      <MetaData
        title={title}
        description={description}
        keywords={keywords}
        img={img}
      />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
