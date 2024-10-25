import SlugDetailedPage from "@/components/common/SlugDetailedPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const CapstoneProjectSlugPage = ({ CapstoneProject, metaTagsData }) => {
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
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
    ksppApisBasePath.cpLists,

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
    `${ksppApisBasePath.cpSlug}/${params.slug}`,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }
  );

  const CapstoneProject = await res.json();

  let metaComponentResponse = await MetaTagsComponent({
    page: params.slug,
  });

  return {
    props: {
      CapstoneProject,
      metaTagsData: metaComponentResponse,
    },
  };
}
