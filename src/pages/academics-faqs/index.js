import CategoryHeading from "@/components/common/categoryHeading";
import Faq from "@/components/common/Faq";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const AcademicFaqs = ({ academicFaqData, metaTagsData}) => {
  const image =
    "https://kspp.edu.in/images/placements/KSPP-Placement-Report-2023-Final.jpg";

  // console.log("academicfaq", academicfaq);

  return (
    <MainLayout
    title={metaTagsData.title}
    description={metaTagsData.description}
    keywords={metaTagsData.keywords}
    img={metaTagsData.meta_image}
    >
      <ScreenWidth layoutwidth="true">
        <CategoryHeading heading="Academics FAQs" />
        <Faq faqData={academicFaqData} />
      </ScreenWidth>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const academicFaqApi = `${ksppApisBasePath.academicFaq}`;
  const academicFaqDataRes = await axios.get(academicFaqApi, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const metaComponentResponse = await MetaTagsComponent({ page: "academics-faqs" });

  console.log("academics-faqs Page Meta DAta", metaComponentResponse);
  const academicFaqData = academicFaqDataRes.data.data;
  // console.log("A Faq", academicFaqData);
  return {
    props: {
      academicFaqData,metaTagsData: metaComponentResponse 
    },
    revalidate: 60,
  };
}

// export async function getStaticProps() {
//   let academicfaq = [];

//   try {
//     const response = await axios.post(
//       apisBasePath.faqdata,
//       {
//         type: "Academics",
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     academicfaq = response.data;
//     // console.log("academicfaq", academicfaq);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }

//   return {
//     props: {
//       academicfaq,
//     },
//   };
// }

export default AcademicFaqs;

// "https://guprojects.gitam.edu/kautilya-admin/api/fetch-faqdata",
