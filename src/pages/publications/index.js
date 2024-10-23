import DynamicTabs from "@/components/common/DynamicTabs";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { ImageBasePaths } from "@/Endpoints/imageBasePaths";
import Image from "next/image";
import React from "react";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const Publications = ({ publicationData, metaTagsData}) => {
  // const facultyTabs = publicationData.facultiesData?.filter(
  //   (each) => each.category === "Publications page"
  // );
  let metaImg;
  if (metaTagsData.meta_image !== null) {
    metaImg = `https://guprojects.gitam.edu/KSPPCMS/public/metaimages/${metaTagsData.meta_image}`;
  } else {
    metaImg = "https://kspp.edu.in/images/administration.jpg";
  }
  return (
    <MainLayout
        title={metaTagsData.title}
        description={metaTagsData.description}
        keywords={metaTagsData.keywords}
        img={metaImg}
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
  // const publicationBanner = `${apisBasePath.publicationBanner}`;
  const publicationBanner = `${ksppApisBasePath.publicationBannerData}`;

  // const publicationAcademicAssoData = `${apisBasePath.publicationAcademicAssoData}`;
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

  // const metaComponentResponse = await MetaTagsComponent({ page: "publications" });

  // console.log("publications Page Meta DAta", metaComponentResponse);
  // console.log("facultyTabs", publicationData);
  let  metaComponentResponse = await MetaTagsComponent({ page: "publications" });
  if (!metaComponentResponse) {
    console.log("No Meta Data for publications Page, fetching Home Page Meta Data");
    metaComponentResponse = await MetaTagsComponent({ page: "home" });
  } 
  console.log("publications Page Meta DAta", metaComponentResponse);

  return {
    props: { publicationData, metaTagsData: metaComponentResponse },
    revalidate: 60,
  };
}

export default Publications;
