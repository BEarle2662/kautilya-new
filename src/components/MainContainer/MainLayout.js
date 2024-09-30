import React from "react";
import MetaData from "./MetaData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialLinks from "../common/SocialLinks";
import BackToTopButton from "../common/BackToTop";
import AdmissionEnquiryBtn from "../common/AdmissionEnquiryBtn";

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
      {/* <AdmissionEnquiryBtn /> */}
      <div>{children}</div>
      <SocialLinks />
      <BackToTopButton />

      <Footer />
    </>
  );
};

export default MainLayout;
