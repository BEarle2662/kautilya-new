import React, { useEffect, useState } from "react";
import MetaData from "./MetaData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialLinks from "../common/SocialLinks";
import BackToTopButton from "../common/BackToTop";
// import AdmissionEnquiryBtn from "../common/AdmissionEnquiryBtn";

const MainLayout = ({ children, title, description, keywords, img }) => {
  // const metaImg =
  //   img !== undefined
  //     ? `https://guprojects.gitam.edu/KSPPCMS/public/metaimages/${img}`
  //     : "https://kspp.edu.in/images/administration.jpg";

  // console.log("Img", img);
  // console.log("MetaImage", metaImg);
  return (
    <>
      <MetaData
        title={title}
        description={description}
        keywords={keywords}
        image={img}
      />
      <Navbar />
      {/* <AdmissionEnquiryBtn /> */}
      <div>{children}</div>
      <SocialLinks />
      <BackToTopButton />

      <Footer />
    </>
  );
};

export default MainLayout;
