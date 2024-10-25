import SlugsPage from "@/components/common/SlugsPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import axios from "axios";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import CategoryHeading from "@/components/common/categoryHeading";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const BlogsPage = ({ slugsData, metaTagsData }) => {
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
      <SlugsPage pageTitle="Blogs" slugsPageData={slugsData} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const slugsBasePath = `${ksppApisBasePath.blogsListApi}`;

  const res = await axios.get(slugsBasePath, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const slugsData = res.data.data || [];
  let metaComponentResponse = await MetaTagsComponent({ page: "blogs" });

  return {
    props: {
      slugsData,
      metaTagsData: metaComponentResponse,
    }, // Provide fallback data

    revalidate: 60,
  };
}

export default BlogsPage;
