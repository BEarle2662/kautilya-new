import React from "react";
import FacultySlugPage from "@/components/common/FacultySlugPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";

const ourFacultySlugPage = ({ facultySlugData }) => {
  return (
    <MainLayout
      title={"Our faculty slug page Testing for metatags"}
      description={"Our faculty slug for metatags"}
      keywords={"GIMSR, GITAM, Hospital"}
      img={null}
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
  // const res = await fetch(`${apisBasePath.faculty}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "8efgh5gyujk",
  //   },
  // });
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
  //   console.log("slugProfiles", slugProfiles.length);
  const paths = slugProfiles.map((facultyData) => {
    return {
      params: { slug: facultyData.slug },
    };
  });
  // console.log("Paths", paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // const res = await fetch(`${apisBasePath.facultyBrief}/${params.slug}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "8efgh5gyujk",
  //   },
  // });

  const res = await fetch(`${ksppApisBasePath.facultyBrief}/${params.slug}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const facultySlugData = await res.json();

  // console.log("facultySlugData", facultySlugData);
  return {
    props: {
      facultySlugData,
    },
    revalidate: 60,
  };
}
