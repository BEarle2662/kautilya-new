import SlugDetailedPage from "@/components/common/SlugDetailedPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";

const issuebriefSlugPage = ({ issueBrief }) => {
  const image =
    "https://programmes.gitam.edu/mbbs/static/media/academic_1.792758fcc02309368071.png";

  return (
    <MainLayout
      title={"Issue Brief slug page Testing for metatags"}
      description={"Capstone page Testing for metatags"}
      keywords={"GIMSR, GITAM, Hospital"}
      img={image}
    >
      <ScreenWidth layoutwidth="true">
        <SlugDetailedPage
          slugDetailedPage="Issue Brief"
          slugData={issueBrief}
        />
      </ScreenWidth>
    </MainLayout>
  );
};

export default issuebriefSlugPage;

export async function getStaticPaths() {
  const res = await fetch(
    // `${apisBasePath.issuesBreifList}`,
    `${ksppApisBasePath.issueBriefLists}`,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }
  );
  const issueBriefs = await res.json();

  const paths = issueBriefs.data.map((issueBrief) => {
    return {
      params: { slug: issueBrief.slug },
    };
  });

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    // `${apisBasePath.issuesBreifList}/${params.slug}`,
    `${ksppApisBasePath.issueBriefSlug}/${params.slug}`,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }
  );

  const issueBrief = await res.json();
  console.log("Issue brief Slug", issueBrief);

  return {
    props: {
      issueBrief,
    },
  };
}

// "https://guprojects.gitam.edu/kautilya-admin/api/issues-lists",
