import SlugsPage from "@/components/common/SlugsPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import axios from "axios";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const CapstoneProjectPage = ({ slugsData, metaTagsData }) => {
  // console.log("Capstone", slugsData);

  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
      <SlugsPage pageTitle="Capstone Project" slugsPageData={slugsData} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  // const slugsBasePath = `${apisBasePath.capstoneProjectsList}`;

  const slugsBasePath = `${ksppApisBasePath.cpLists}`;

  // "https://guprojects.gitam.edu/kautilya-admin/api/cp-lists";

  const res = await axios.get(slugsBasePath, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const metaComponentResponse = await MetaTagsComponent({
    page: "capstone-project",
  });

  console.log("capstone-project Page Meta DAta", metaComponentResponse);

  const slugsData = res.data.data || [];
  // console.log("capstone", slugsData);
  return {
    props: { slugsData, metaTagsData: metaComponentResponse },
    revalidate: 60,
  };
}

export default CapstoneProjectPage;
