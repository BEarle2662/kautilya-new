import SlugsPage from "@/components/common/SlugsPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import axios from "axios";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";

const IssueBrief = ({ slugsData }) => {
  const image =
    "https://programmes.gitam.edu/mbbs/static/media/academic_1.792758fcc02309368071.png";

  //   console.log("Issue Brief", slugsData);

  return (
    <MainLayout
      title={"Issue Brief page Testing for metatags"}
      description={"Issue Brief page Testing for metatags"}
      keywords={"GIMSR, GITAM, Hospital"}
      img={image}
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

  // console.log("Issue brief", slugsData);

  return {
    props: { slugsData },
  };
}

export default IssueBrief;

// "https://guprojects.gitam.edu/kautilya-admin/api/issues-lists";
