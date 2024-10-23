import SlugsPage from "@/components/common/SlugsPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import axios from "axios";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import CategoryHeading from "@/components/common/categoryHeading";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const BlogsPage = ({ slugsData,metaTagsData }) => {
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
      <SlugsPage pageTitle="Blogs" slugsPageData={slugsData} />
    </MainLayout>
  );
};

// export async function getStaticProps() {
//   const slugsBasePath = `${apisBasePath.blogsList}`;

//   const res = await axios.get(slugsBasePath, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
//     },
//   });

//   const slugsData = res.data.data;

//   return {
//     props: { slugsData },
//     revalidate: 60,
//   };
// }

export async function getStaticProps() {
  // const slugsBasePath = `${apisBasePath.blogsList}`;

  const slugsBasePath = `${ksppApisBasePath.blogsListApi}`;

  const res = await axios.get(slugsBasePath, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const slugsData = res.data.data || [];
  let  metaComponentResponse = await MetaTagsComponent({ page: "blogs" });
  if (!metaComponentResponse) {
    console.log("No Meta Data for blogs Page, fetching Home Page Meta Data");
    metaComponentResponse = await MetaTagsComponent({ page: "home" });
  } 
  console.log("blogs Page Meta DAta", metaComponentResponse);
  // try {
  // const res = await axios.get(slugsBasePath, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: process.env.NEXT_PUBLIC_API_AUTH_TOKEN, // Use env variable
  //   },
  // });

  // const slugsData = res.data.data;

  // } catch (error) {
  //   console.error(
  //     "Error fetching blogs:",
  //     error.response ? error.response.data : error.message
  //   );

  // let  metaComponentResponse = await MetaTagsComponent({ page: "blogs" });
  // if (!metaComponentResponse) {
  //   console.log("No Meta Data for About Page, fetching Home Page Meta Data");
  //   metaComponentResponse = await MetaTagsComponent({ page: "home" });
  // }
  // console.log("blogs Page Meta DAta", metaComponentResponse);

  return {
    // props: { slugsData: [], metaTagsData: metaComponentResponse }, // Provide fallback data
    props: { slugsData, metaTagsData: metaComponentResponse }, // Provide fallback data

    revalidate: 60,
  };
}

export default BlogsPage;
