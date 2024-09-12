import SlugsPage from "@/components/common/SlugsPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import axios from "axios";
import React from "react";

import { apisBasePath } from "@/Endpoints/apisBase";

const BlogsPage = ({ slugsData }) => {
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
      <SlugsPage pageTitle="Blogs" slugsPageData={slugsData} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const slugsBasePath = `${apisBasePath.blogsList}`;
  // "https://guprojects.gitam.edu/kautilya-admin/api/blog-lists";

  const res = await axios.get(slugsBasePath, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });

  const slugsData = res.data.data;

  return {
    props: { slugsData },
  };
}

export default BlogsPage;
