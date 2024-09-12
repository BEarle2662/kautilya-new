import React from "react";
import FacultySlugPage from "@/components/common/FacultySlugPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";

import { apisBasePath } from "@/Endpoints/apisBase";

const ourFacultySlugPage = ({ facultySlugData }) => {
  const image =
    "https://programmes.gitam.edu/mbbs/static/media/academic_1.792758fcc02309368071.png";

  return (
    <MainLayout
      title={"Our faculty slug page Testing for metatags"}
      description={"Our faculty slug for metatags"}
      keywords={"GIMSR, GITAM, Hospital"}
      img={image}
    >
      <ScreenWidth layoutwidth="true">
        <FacultySlugPage
          slugDetailedPage="Our Faculty Slug"
          slugData={facultySlugData}
        />
      </ScreenWidth>
    </MainLayout>
  );
};

export default ourFacultySlugPage;

export async function getStaticPaths() {
  const res = await fetch(`${apisBasePath.faculty}`, {
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
  const res = await fetch(`${apisBasePath.facultyBrief}/${params.slug}`, {
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
  };
}
