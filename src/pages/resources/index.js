import CategoryHeading from "@/components/common/categoryHeading";
import EventsSlider from "@/components/common/EventsSlider";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import React from "react";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const Resources = ({ data, metaTagsData }) => {
  let Page = "Resource";
  const events = data.data?.filter((each) => each.category === "Events");
  const colloquy = data.data?.filter((each) => each.category === "Colloquy");
  const fieldTrip = data.data?.filter((each) => each.category === "Field Trip");

  const policySeries = data.data?.filter(
    (each) => each.category === "Policy Series"
  );
  const new_updates = data.data?.filter(
    (each) => each.category === "News & Updates"
  );
  console.log("oeld Trip", fieldTrip);
  return (
    <MainLayout
      title={metaTagsData.title}
      description={metaTagsData.description}
      keywords={metaTagsData.keywords}
      img={metaTagsData.meta_image}
    >
      <ScreenWidth layoutwidth="true">
        <CategoryHeading heading="Events" textAlign="text-left" />
        <EventsSlider sliderData={events} page={Page} />

        <CategoryHeading heading="Field Trip" textAlign="text-left" />
        <EventsSlider sliderData={fieldTrip} page={Page} />

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
  // const resourcesData = `${apisBasePath.resourcesData}`;
  const resourcesData = `${ksppApisBasePath.eventsListApi}`;

  const response = await fetch(resourcesData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.NEXT_PUBLIC_API_AUTH_TOKEN, // Use env variable
    },
  });
  const data = await response.json();

  let metaComponentResponse = await MetaTagsComponent({ page: "resources" });

  return {
    props: { data, metaTagsData: metaComponentResponse },
    revalidate: 60,
  };
}

export default Resources;
