import SlugDetailedPage from "@/components/common/SlugDetailedPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import CategoryHeading from "@/components/common/categoryHeading";

const BlogSlugPage = ({ blog }) => {
  const image =
    "https://programmes.gitam.edu/mbbs/static/media/academic_1.792758fcc02309368071.png";

  return (
    <MainLayout
      title={"Blogs slug page Testing for metatags"}
      description={"Capstone page Testing for metatags"}
      keywords={"GIMSR, GITAM, Hospital"}
      img={image}
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
    // apisBasePath.blogsList,
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
    // const res = await fetch(`${apisBasePath.blogsList}/${params.slug}`, {

    const res = await fetch(
      `${ksppApisBasePath.blogsListBriefApi}/${params.slug}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "8efgh5gyujk",
        },
      }
    );

    // const blog = await res.json();

    if (!res.ok) {
      // Handle case where API returns an error
      return { notFound: true };
    }

    const blog = await res.json();

    // Ensure the blog has the required structure
    if (!blog || !blog.data) {
      return { notFound: true };
    }

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
    return { notFound: true };
  }
}
