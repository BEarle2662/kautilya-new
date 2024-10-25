import SlugDetailedPage from "@/components/common/SlugDetailedPage";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const issuebriefSlugPage = ({ issueBrief, metaTagsData }) => {
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
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
    `${ksppApisBasePath.issueBriefSlug}/${params.slug}`,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }
  );

  const issueBrief = await res.json();

  let metaComponentResponse = await MetaTagsComponent({
    page: params.slug,
  });

  return {
    props: {
      issueBrief,
      metaTagsData: metaComponentResponse,
    },
    revalidate: 60,
  };
}
