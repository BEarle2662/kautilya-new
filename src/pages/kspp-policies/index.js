import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import React from "react";

import { apisBasePath } from "@/Endpoints/apisBase";

import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import PoliciesCard from "@/components/PoliciesCard";

const Policies = ({ policiesData }) => {
  const image =
    "https://programmes.gitam.edu/mbbs/static/media/academic_1.792758fcc02309368071.png";

  return (
    <MainLayout
      title={"Policies Page  Testing for metatags"}
      description={"Policies page Testing for metatags"}
      keywords={"GIMSR, GITAM, Hospital"}
      img={image}
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
  const publicPolicies = `${apisBasePath.publicPolicies}`;

  const response = await fetch(publicPolicies);
  const policiesData = await response.json();

  return {
    props: { policiesData },
  };
}

export default Policies;
