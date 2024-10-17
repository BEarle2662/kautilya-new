import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

// import banner from "../../../public/assets/img/partners/partner_banner2.jpg";
import Image from "next/image";
import { ksppApisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";
import { ImageBasePaths } from "@/Endpoints/imageBasePaths";

const InnerPage = ({ data }) => {
  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        <h5 className="mb-4 text-base font-semibold">{data.full_title}</h5>
        <Image
          height={0}
          width={0}
          src={`${ImageBasePaths.partnerShipImagesPath}desktop/${data.full_desktop_image}`}
          className="h-full w-full"
          alt={data.fullpageimage_alttag}
        />

        {/* <p className="mt-4 text-sm md:text-base">
          Kautilya School of Public Policy has signed an MoU with IE
          University’s School of Politics, Global Affairs and Economics (SPEGA)
          for student exchange, research collaboration, faculty exchange amongst
          other areas of collaboration. The student exchange will be in effect
          from the academic year 2024-25.
        </p>
        <p className="text-sm md:text-base">
          The student exchange would mean students from Kautilya would study
          various courses at SPEGA . There will be a merit based competitive
          process for the selection of interested students. The credit
          equivalence has been established.
        </p> */}
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="mt-4 text-sm md:text-base"
        />
      </ScreenWidth>
    </MainLayout>
  );
};

export default InnerPage;

export async function getStaticProps() {
  const partnershipInnerPage_2_Api =
    ksppApisBasePath.partnershipInnerPage_2_Api;

  const response = await axios.get(partnershipInnerPage_2_Api, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });

  const data = response.data.data;

  return {
    props: {
      data,
    },
  };
}
