import SlugDetailedPage from "@/components/common/SlugDetailedPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const BlogSlugPage = ({ blog, metaTagsData }) => {
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
      <ScreenWidth layoutwidth="true">
        {/* <CategoryHeading heading="slug detailed page" /> */}
        <SlugDetailedPage slugDetailedPage="Blog" slugData={blog} />
      </ScreenWidth>
    </MainLayout>
  );
};

export default BlogSlugPage;

export async function getStaticPaths() {
  const res = await fetch(
    ksppApisBasePath.blogsListApi,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }
  );
  const blogs = await res.json();

  const paths = blogs.data.map((blog) => {
    return {
      params: { slug: blog.slug },
    };
  });

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `${ksppApisBasePath.blogsListBriefApi}/${params.slug}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "8efgh5gyujk",
        },
      }
    );

    if (!res.ok) {
      // Handle case where API returns an error
      return { notFound: true };
    }

    const blog = await res.json();

    // Ensure the blog has the required structure
    if (!blog || !blog.data) {
      return { notFound: true };
    }

    let metaComponentResponse = await MetaTagsComponent({ page: params.slug });

    return {
      props: {
        blog,
        metaTagsData: metaComponentResponse,
      },
    };
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
    return { notFound: true };
  }
}
