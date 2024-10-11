import CategoryHeading from "@/components/common/categoryHeading";
import EventsSlider from "@/components/common/EventsSlider";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath } from "@/Endpoints/apisBase";
import React from "react";

const Resources = ({ data }) => {
  let Page = "Resource";
  const events = data.data?.filter((each) => each.category === "Events");
  const colloquy = data.data?.filter((each) => each.category === "Colloquy");

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
        <EventsSlider sliderData={events} page={Page} />

        <CategoryHeading heading="Colloquy event" textAlign="text-left" />
        <EventsSlider sliderData={colloquy} page={Page} />

        <CategoryHeading
          heading="Let's Talk Policy Series"
          textAlign="text-left"
        />
        <EventsSlider sliderData={policySeries} page={Page} />

        <CategoryHeading heading="News & Updates" textAlign="text-left" />
        <EventsSlider sliderData={new_updates} page={Page} />
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
