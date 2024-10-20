import Faq from "@/components/common/Faq";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { ImageBasePaths } from "@/Endpoints/imageBasePaths";
import Image from "next/image";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const PublicationsAcademicAssociates = ({ AcademicAssodata, metaTagsData }) => {
  const image =
    "https://kspp.edu.in/images/placements/KSPP-Placement-Report-2023-Final.jpg";

  // const academicAssoDatafilter = AcademicAssodata.associatesData?.filter(
  //   (each) => each.category === "Academic Associates page"
  // );

  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
      <ScreenWidth layoutwidth="true">
        <Image
          src={`${ImageBasePaths.publicAcadAssoBannerImagesPath}${AcademicAssodata.banner.desktop_banner}`}
          height={0}
          width={0}
          alt="Asso-banner"
          className="w-full h-full"
        />
        <div className="md:my-16 md:px-7">
          <Faq
            faqData={AcademicAssodata.associatesData}
            pageTitle="Pubilication Academic Asso"
          />
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

  const Associatesdata = data[1].data.filter(
    (each) => each.category === "Academic Associates page"
  );

  const AcademicAssodata = {
    banner: data[0].data[1],
    associatesData: Associatesdata,
  };

  const metaComponentResponse = await MetaTagsComponent({ page: "publications-academic-associates" });

  console.log("publications-academic-associates Page Meta DAta", metaComponentResponse);
  // console.log("AcademicAssodata", AcademicAssodata);
  return {
    props: { AcademicAssodata, metaTagsData: metaComponentResponse  },
    revalidate: 60,
  };
}

export default PublicationsAcademicAssociates;
