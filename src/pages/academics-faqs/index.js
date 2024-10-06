import CategoryHeading from "@/components/common/categoryHeading";
import Faq from "@/components/common/Faq";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import { apisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";

const AcademicFaqs = ({ academicfaq }) => {
  const image =
    "https://kspp.edu.in/images/placements/KSPP-Placement-Report-2023-Final.jpg";

  return (
    <MainLayout
      title={"AcademicFaqs page Testing for metatags"}
      description={"AcademicFaqs page Testing for metatags"}
      keywords={"GIMSR, GITAM, Hospital"}
      img={image}
    >
      <ScreenWidth layoutwidth="true">
        <CategoryHeading heading="Academics FAQs" />
        <Faq faqData={academicfaq} />
      </ScreenWidth>
    </MainLayout>
  );
};

// export async function getStaticProps() {
//   let academicfaq = [];

//   try {
//     const response = await fetch(
//       apisBasePath.faqdata,

//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           type: "Academics",
//         }),
//       }
//     );
//     academicfaq = await response.json();
//     console.log("academicfaq", academicfaq);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }

//   return {
//     props: {
//       academicfaq,
//     },
//   };
// }

export async function getStaticProps() {
  let academicfaq = [];

  try {
    const response = await axios.post(
      apisBasePath.faqdata,
      {
        type: "Academics",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    academicfaq = response.data;
    console.log("academicfaq", academicfaq);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      academicfaq,
    },
  };
}

export default AcademicFaqs;

// "https://guprojects.gitam.edu/kautilya-admin/api/fetch-faqdata",
