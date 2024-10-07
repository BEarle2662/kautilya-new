import SlugDetailedPage from "@/components/common/SlugDetailedPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import { apisBasePath } from "@/Endpoints/apisBase";

const CapstoneProjectSlugPage = ({ CapstoneProject }) => {
  const image =
    "https://programmes.gitam.edu/mbbs/static/media/academic_1.792758fcc02309368071.png";

  return (
    <MainLayout
      title={"Capstone slug page Testing for metatags"}
      description={"Capstone page Testing for metatags"}
      keywords={"GIMSR, GITAM, Hospital"}
      img={image}
    >
      <ScreenWidth layoutwidth="true">
        <SlugDetailedPage
          slugDetailedPage="Capstone Project"
          slugData={CapstoneProject}
        />
      </ScreenWidth>
    </MainLayout>
  );
};

export default CapstoneProjectSlugPage;

export async function getStaticPaths() {
  const res = await fetch(
    apisBasePath.capstoneProjectsList,
    // "https://guprojects.gitam.edu/kautilya-admin/api/cp-lists",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }
  );
  const CapstoneProjects = await res.json();

  const paths = CapstoneProjects.data.map((CapstoneProject) => {
    return {
      params: { slug: CapstoneProject.slug },
    };
  });

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${apisBasePath.capstoneProjectsList}/${params.slug}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }
  );

  const CapstoneProject = await res.json();

  return {
    props: {
      CapstoneProject,
    },
  };
}
