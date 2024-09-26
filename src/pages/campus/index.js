import CategoryHeading from "@/components/common/categoryHeading";
import DynamicTabs from "@/components/common/DynamicTabs";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath } from "@/Endpoints/apisBase";
import React from "react";

const Campus = ({ facilitiesdata }) => {
  const tabsData = facilitiesdata.data;
  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        <CategoryHeading heading="Facilities" />

        <div className="embed-responsive embed-responsive-21by9 mt-4 mb-5">
          <iframe
            height="641"
            src="https://www.youtube.com/embed/TpAX1KKUl2E"
            title="The Kautilya campus - A vision comes to life"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <p className="my-6 md:my-10 text-sm md:text-base">
          Kautilya’s campus is designed to provide a unique experience for
          students, as they embark on their learning journey. Seated on 100
          acres of green landscape, the campus is located just 10 km outside
          Hyderabad city. Welcoming a global student intake, the campus is a
          melting pot of cultures, languages, and traditions. Kautilya boasts of
          best-in-class infrastructure with horse-shoe and gallery-styled
          classrooms equipped with AV systems, projectors, teleprompters, Wi-Fi
          hotspots, hi-tech gadgets, and two state-of-the-art auditoriums with
          upgraded infra, and a breathtaking view.
        </p>
      </ScreenWidth>

      <ScreenWidth layoutwidth="true">
        <DynamicTabs tabData={tabsData} />
      </ScreenWidth>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const facilityListdata = `${apisBasePath.facilityListdata}`;

  const facilityListdataResponse = await fetch(facilityListdata);
  const facilitiesdata = await facilityListdataResponse.json();
  console.log(facilitiesdata);
  return {
    props: { facilitiesdata },
  };
}

export default Campus;
