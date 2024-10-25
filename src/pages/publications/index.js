import DynamicTabs from "@/components/common/DynamicTabs";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { ImageBasePaths } from "@/Endpoints/imageBasePaths";
import Image from "next/image";
import React from "react";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const Publications = ({ publicationData, metaTagsData }) => {
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
      <ScreenWidth layoutwidth="true">
        {/* <div> */}
        <Image
          src={`${ImageBasePaths.publicAcadAssoBannerImagesPath}${publicationData.banner.desktop_banner}`}
          width={0}
          height={0}
          className="w-full h-full"
        />
        {/* </div> */}

        <div className="mt-6">
          <DynamicTabs tabData={publicationData.facultiesData} />
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const publicationBanner = `${ksppApisBasePath.publicationBannerData}`;

  const publicationAcademicAssoData = `${ksppApisBasePath.publicationTabsData}`;

  const responses = await Promise.all([
    fetch(publicationBanner, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }),
    fetch(publicationAcademicAssoData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }),
  ]);

  const data = await Promise.all(responses.map((response) => response.json()));

  const facultiesdata = data[1].data.filter(
    (each) => each.category === "Faculties page"
  );

  const publicationData = {
    banner: data[0].data[0],
    facultiesData: facultiesdata,
  };

  let metaComponentResponse = await MetaTagsComponent({ page: "publications" });

  return {
    props: { publicationData, metaTagsData: metaComponentResponse },
    revalidate: 60,
  };
}

export default Publications;
