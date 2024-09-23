import CategoryHeading from "@/components/common/categoryHeading";
import CustomSlider from "@/components/common/CustomSlider";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath } from "@/Endpoints/apisBase";
import React from "react";

const Resources = ({ data }) => {
  const events = data.data?.filter((each) => each.category === "Events");
  const policySeries = data.data?.filter(
    (each) => each.category === "Policy Series"
  );
  const new_updates = data.data?.filter(
    (each) => each.category === "News & Updates"
  );

  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        <CategoryHeading heading="Events" textAlign="text-left" />

        <CustomSlider sliderData={events} />

        <CategoryHeading
          heading="Let's Talk Policy Series"
          textAlign="text-left"
        />
        <CustomSlider sliderData={policySeries} />

        <CategoryHeading heading="News & Updates" textAlign="text-left" />
        <CustomSlider sliderData={new_updates} />
      </ScreenWidth>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const resourcesData = `${apisBasePath.resourcesData}`;

  const response = await fetch(resourcesData);
  const data = await response.json();

  return {
    props: { data },
  };
}

export default Resources;
