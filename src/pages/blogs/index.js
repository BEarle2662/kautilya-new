import SlugsPage from "@/components/common/SlugsPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import axios from "axios";
import React from "react";

import { apisBasePath } from "@/Endpoints/apisBase";
import CategoryHeading from "@/components/common/categoryHeading";

const BlogsPage = ({ slugsData }) => {
  const image =
    "https://programmes.gitam.edu/mbbs/static/media/academic_1.792758fcc02309368071.png";

  return (
    <MainLayout
      title={"Capstone page Testing for metatags"}
      description={"Capstone page Testing for metatags"}
      keywords={"GIMSR, GITAM, Hospital"}
      img={image}
    >
      <CategoryHeading heading="blogs" />
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
  const slugsBasePath = `${apisBasePath.blogsList}`;

  try {
    const res = await axios.get(slugsBasePath, {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_AUTH_TOKEN, // Use env variable
      },
    });

    const slugsData = res.data.data;

    return {
      props: { slugsData },
      revalidate: 60,
    };
  } catch (error) {
    console.error(
      "Error fetching blogs:",
      error.response ? error.response.data : error.message
    );

    return {
      props: { slugsData: [] }, // Provide fallback data
      revalidate: 60,
    };
  }
}

export default BlogsPage;
