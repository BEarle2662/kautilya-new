import CategoryHeading from "@/components/common/categoryHeading";
import Faq from "@/components/common/Faq";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const AcademicFaqs = ({ academicFaqData, metaTagsData }) => {
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

  let metaComponentResponse = await MetaTagsComponent({
    page: "academics-faqs",
  });

  const academicFaqData = academicFaqDataRes.data.data;

  return {
    props: {
      academicFaqData,
      metaTagsData: metaComponentResponse,
    },
    revalidate: 60,
  };
}

export default AcademicFaqs;
