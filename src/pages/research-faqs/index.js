import Image from "next/image";
import React from "react";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";

import faqImage from "../../../public/assets/img/FAQ-2.jpg";
import Faq from "@/components/common/Faq";
import axios from "axios";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const ResearchFaqs = ({ researchFaq, metaTagsData }) => {
  let metaImg;
  if (metaTagsData.meta_image !== null) {
    metaImg = `https://guprojects.gitam.edu/KSPPCMS/public/metaimages/${metaTagsData.meta_image}`;
  } else {
    metaImg = "https://kspp.edu.in/images/administration.jpg";
  }
  const image =
    "https://kspp.edu.in/images/placements/KSPP-Placement-Report-2023-Final.jpg";
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaImg}
    >
      <ScreenWidth layoutwidth="true">
        <Image src={faqImage} width={0} height={0} alt="faq-banner" />
        <div className="md:px-5 md:py-8">
          <Faq faqData={researchFaq} />
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};

export async function getStaticProps() {
  // let researchFaq = [];

  // try {
  //   const response = await axios.post(
  //     apisBasePath.faqdata,
  //     {
  //       type: "Research",
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   researchFaq = response.data;
  //   console.log("researchFaq", researchFaq);
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }
  const researchFaqsApi = ksppApisBasePath.researchFaqsApi;

  const response = await axios.get(researchFaqsApi, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  // const metaComponentResponse = await MetaTagsComponent({ page: "research-faqs" });

  // console.log("research-faqs Page Meta DAta", metaComponentResponse);
  let  metaComponentResponse = await MetaTagsComponent({ page: "research-faqs" });
  if (!metaComponentResponse) {
    console.log("No Meta Data for research faqs Page, fetching Home Page Meta Data");
    metaComponentResponse = await MetaTagsComponent({ page: "home" });
  } 
  console.log("research faqs Page Meta DAta", metaComponentResponse);
  const researchFaq = response.data.data || [];
  return {
    props: {
      researchFaq, metaTagsData: metaComponentResponse
    },
    revalidate: 60, 
  };
}

export default ResearchFaqs;
