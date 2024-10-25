import React, { useEffect, useState } from "react";
import MetaData from "./MetaData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialLinks from "../common/SocialLinks";
import BackToTopButton from "../common/BackToTop";
// import AdmissionEnquiryBtn from "../common/AdmissionEnquiryBtn";

const MainLayout = ({ children, title, description, keywords, img }) => {
  let metaImg;

  if (img === null || img === "" || img === undefined) {
    metaImg = "https://kspp.edu.in/images/administration.jpg";
  } else {
    metaImg = `https://guprojects.gitam.edu/KSPPCMS/public/metaimages/${img}`;
  }

  return (
    <>
      <MetaData
        title={title}
        description={description}
        keywords={keywords}
        image={metaImg}
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
