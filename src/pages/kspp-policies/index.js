import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import React from "react";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";

import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import PoliciesCard from "@/components/PoliciesCard";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const Policies = ({ policiesData, metaTagsData }) => {
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
      <div className="mt-10">
        <h1 className="font-bold text-xl md:font-extrabold md:text-4xl text-center">
          POLICIES & GUIDELINES
        </h1>
        <p className="text-sm md:text-lg text-center mt-2">
          Download and Read What Matters The Most
        </p>
      </div>

      <PoliciesCard policiesData={policiesData.data} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  // const publicPolicies = `${apisBasePath.publicPolicies}`;
  const publicPolicies = `${ksppApisBasePath.policiesGuideLines}`;

  const response = await fetch(publicPolicies, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const policiesData = await response.json();
  let metaComponentResponse = await MetaTagsComponent({
    page: "kspp-policies",
  });
  if (!metaComponentResponse) {
    console.log("No Meta Data for kspp-policies, fetching Home Page Meta Data");
    metaComponentResponse = await MetaTagsComponent({ page: "home" });
  }
  console.log("kspp-policies Page Meta DAta", metaComponentResponse);
  return {
    props: { policiesData, metaTagsData: metaComponentResponse },
    revalidate: 60,
  };
}

export default Policies;
