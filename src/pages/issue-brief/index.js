import SlugsPage from "@/components/common/SlugsPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import axios from "axios";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const IssueBrief = ({ slugsData, metaTagsData }) => {
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
      <SlugsPage pageTitle="Issue Brief" slugsPageData={slugsData} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  // const slugsBasePath = `${apisBasePath.issuesBreifList}`;

  const slugsBasePath = `${ksppApisBasePath.issueBriefLists}`;

  const res = await axios.get(slugsBasePath, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });

  const slugsData = res.data.data || [];
  const metaComponentResponse = await MetaTagsComponent({
    page: "issue-brief",
  });

  console.log("issue-brief Page Meta DAta", metaComponentResponse);
  // console.log("Issue brief", slugsData);

  return {
    props: { slugsData, metaTagsData: metaComponentResponse },
    revalidate: 60,
  };
}

export default IssueBrief;

// "https://guprojects.gitam.edu/kautilya-admin/api/issues-lists";
