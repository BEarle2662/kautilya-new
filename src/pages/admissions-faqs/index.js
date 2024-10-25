import Image from "next/image";
import React from "react";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";

import faqImage from "../../../public/assets/img/FAQ-2.jpg";
import Faq from "@/components/common/Faq";
import axios from "axios";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const AdmissionFaqs = ({ admissionFaqs, metaTagsData }) => {
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
      <Image
        src={faqImage}
        width={0}
        height={0}
        className="w-full"
        alt="faq-banner"
      />
      <ScreenWidth layoutwidth="true">
        <div className="md:px-5 md:py-8">
          <Faq faqData={admissionFaqs} />
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const admissionFaqApi = ksppApisBasePath.admissionFaqApi;

  const response = await axios.get(admissionFaqApi, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });

  const admissionFaqs = response.data.data;

  let metaComponentResponse = await MetaTagsComponent({
    page: "admissions-faqs",
  });

  return {
    props: {
      admissionFaqs,
      metaTagsData: metaComponentResponse,
    },
    revalidate: 60,
  };
}

export default AdmissionFaqs;
