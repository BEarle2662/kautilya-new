import SlugsPage from "@/components/common/SlugsPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import axios from "axios";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const CapstoneProjectPage = ({ slugsData, metaTagsData }) => {
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
  const slugsBasePath = `${ksppApisBasePath.cpLists}`;

  const res = await axios.get(slugsBasePath, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });

  let metaComponentResponse = await MetaTagsComponent({
    page: "capstone-project",
  });

  const slugsData = res.data.data || [];

  return {
    props: { slugsData, metaTagsData: metaComponentResponse },
    revalidate: 60,
  };
}

export default CapstoneProjectPage;
