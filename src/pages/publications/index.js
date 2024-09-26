import DynamicTabs from "@/components/common/DynamicTabs";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath } from "@/Endpoints/apisBase";
import { ImageBasePaths } from "@/Endpoints/imageBasePaths";
import Image from "next/image";
import React from "react";

const Publications = ({ publicationData }) => {
  const facultyTabs = publicationData.facultiesData?.filter(
    (each) => each.category === "Publications page"
  );

  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        {/* <div> */}
        <Image
          src={`${ImageBasePaths.publicAcadAssoBannerImagesPath}${publicationData.banner.desktop_banner}`}
          width={0}
          height={0}
          className="w-full h-full"
        />
        {/* </div> */}

        {/* <div> */}
        <DynamicTabs tabData={facultyTabs} />
        {/* </div> */}
      </ScreenWidth>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const publicationBanner = `${apisBasePath.publicationBanner}`;

  const publicationAcademicAssoData = `${apisBasePath.publicationAcademicAssoData}`;

  const responses = await Promise.all([
    fetch(publicationBanner),
    fetch(publicationAcademicAssoData),
  ]);

  const data = await Promise.all(responses.map((response) => response.json()));

  const publicationData = {
    banner: data[0].data[0],
    facultiesData: data[1].data,
  };
  //   console.log("facultyTabs", publicationData);
  return {
    props: { publicationData },
  };
}

export default Publications;
