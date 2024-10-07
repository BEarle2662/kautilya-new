import SlugDetailedPage from "@/components/common/SlugDetailedPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import { apisBasePath } from "@/Endpoints/apisBase";

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
        <SlugDetailedPage slugDetailedPage="Blog" slugData={blog} />
      </ScreenWidth>
    </MainLayout>
  );
};

export default BlogSlugPage;

export async function getStaticPaths() {
  const res = await fetch(
    apisBasePath.blogsList,

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

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${apisBasePath.blogsList}/${params.slug}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });

  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
}
