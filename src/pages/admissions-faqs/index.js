import Image from "next/image";
import React from "react";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";

import faqImage from "../../../public/assets/img/FAQ-2.jpg";
import Faq from "@/components/common/Faq";
import axios from "axios";

const AdmissionFaqs = ({ admissionFaqs }) => {
  const image =
    "https://kspp.edu.in/images/placements/KSPP-Placement-Report-2023-Final.jpg";
  return (
    <MainLayout
      title={"Admission Faq page Testing for metatags"}
      description={"Admission Faq page Testing for metatags"}
      keywords={"GIMSR, GITAM, Hospital"}
      img={image}
    >
      <ScreenWidth layoutwidth="true">
        <Image src={faqImage} width={0} height={0} alt="faq-banner" />
        <div className="md:px-5 md:py-8">
          <Faq faqData={admissionFaqs} />
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};

export async function getStaticProps() {
  // let admissionFaqs = [];

  // try {
  //   const response = await fetch(
  //     apisBasePath.faqdata,

  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         type: "Admissions",
  //       }),
  //     }
  //   );
  //   admissionFaqs = await response.json();
  //   console.log("admissionFaqs", admissionFaqs);
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }

  const admissionFaqApi = ksppApisBasePath.admissionFaqApi;

  const response = await axios.get(admissionFaqApi, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });

  const admissionFaqs = response.data.data;

  return {
    props: {
      admissionFaqs,
    },
  };
}

export default AdmissionFaqs;
