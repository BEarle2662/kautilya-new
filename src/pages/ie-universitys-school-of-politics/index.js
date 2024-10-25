import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import banner from "../../../public/assets/img/partners/partner_banner.jpg";
import Image from "next/image";
import { ksppApisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";
import { ImageBasePaths } from "@/Endpoints/imageBasePaths";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const ieUniversitysSchoolOfPolitics = ({ data, metaTagsData }) => {
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
      <ScreenWidth layoutwidth="true">
        <h5 className="mb-4 text-base font-semibold">{data.full_title}</h5>
        <Image
          height={0}
          width={0}
          src={`${ImageBasePaths.partnerShipImagesPath}desktop/${data.full_desktop_image}`}
          className="h-full w-full"
          alt={data.fullpageimage_alttag}
        />

        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="mt-4 text-sm md:text-base"
        />
      </ScreenWidth>
    </MainLayout>
  );
};

export default ieUniversitysSchoolOfPolitics;

export async function getStaticProps() {
  const partnershipInnerPage_1_Api =
    ksppApisBasePath.partnershipInnerPage_1_Api;

  const response = await axios.get(partnershipInnerPage_1_Api, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });

  const data = response.data.data;

  let metaComponentResponse = await MetaTagsComponent({
    page: "ie-universitys-school-of-politics",
  });

  return {
    props: {
      data,
      metaTagsData: metaComponentResponse,
    },
  };
}
