import React from "react";
import FacultySlugPage from "@/components/common/FacultySlugPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const ourFacultySlugPage = ({ facultySlugData, metaTagsData }) => {
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
      <FacultySlugPage
        slugDetailedPage="Our Faculty Slug"
        slugData={facultySlugData}
      />
    </MainLayout>
  );
};

export default ourFacultySlugPage;

export async function getStaticPaths() {
  const res = await fetch(`${ksppApisBasePath.faculty}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const facultySlugsData = await res.json();

  const slugProfiles = facultySlugsData.data.filter((each) =>
    each.readmore === "Yes" ? each.slug : null
  );

  const paths = slugProfiles.map((facultyData) => {
    return {
      params: { slug: facultyData.slug },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${ksppApisBasePath.facultyBrief}/${params.slug}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const facultySlugData = await res.json();
  let metaComponentResponse = await MetaTagsComponent({ page: params.slug });

  return {
    props: {
      facultySlugData,
      metaTagsData: metaComponentResponse,
    },
    revalidate: 60,
  };
}
