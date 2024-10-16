import SlugsPage from "@/components/common/SlugsPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import axios from "axios";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";

const CapstoneProjectPage = ({ slugsData }) => {
  const image =
    "https://programmes.gitam.edu/mbbs/static/media/academic_1.792758fcc02309368071.png";

  // console.log("Capstone", slugsData);

  return (
    <MainLayout
      title={"Capstone page Testing for metatags"}
      description={"Capstone page Testing for metatags"}
      keywords={"GIMSR, GITAM, Hospital"}
      img={image}
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

  const slugsData = res.data.data || [];
  // console.log("capstone", slugsData);
  return {
    props: { slugsData },
  };
}

export default CapstoneProjectPage;
