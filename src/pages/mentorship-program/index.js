import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import Mentorbanner from "../../../public/assets/img/mentor-banner.jpg";
import Image from "next/image";
import CategoryHeading from "@/components/common/categoryHeading";
import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import ProfileCard from "@/components/common/Profile/ProfileCard";
import { Button } from "@material-tailwind/react";
import DynamicTabs from "@/components/common/DynamicTabs";

const MentorshipProgram = ({ mentorPageData }) => {
  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        <div className="mb-4" id="know-more">
          <Image
            src={Mentorbanner}
            height={0}
            width={0}
            className="h-full w-full"
            alt="Mentorship-banner"
          />
        </div>
        <p className="mt-5 mb-5 text-sm md:text-base">
          The Mentorship Scheme at Kautilya is envisaged to be one of the key
          pillars of the Master of Public Policy (MPP) program. Through this
          program, students are{" "}
          <b>
            connected to mentors with strong personal, academic, and
            professional track records
          </b>{" "}
          who can positively impact and guide their journeys during and beyond
          MPP. The Mentorship Programme is an interactive engagement between the
          mentors and mentees without being prescriptive.
        </p>
        <h4 className="mt-5 mb-2  md:mt-10  md:mb-4 text-2xl md:text-3xl xl:text-5xl text-[#00174d] font-semibold xl:font-normal">
          Program Scheme
        </h4>
        <p className="mb-5 text-sm md:text-base">
          The mentorship scheme starts in <b>August (1st Trimester)</b> once
          students have made their initial adjustments and have a better
          understanding of the academic schedule and the options available to
          them. The selection and screening process starts in the{" "}
          <b>3rd Week of August.</b>
          The Mentorship schemecCoordinator will be the Point of Contact (POC)
          for the students and Mentors.
        </p>

        <div className="my-10">
          <Button>
            <a href="#know-more">Know more</a>
          </Button>

          <DynamicTabs tabData={mentorPageData.tabsData} />
        </div>

        <div className="mt-5">
          <CategoryHeading heading="Mentor List" color="text-[#b51c21]" />
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5">
          {mentorPageData.mentorImagesData.map((each, index) => (
            <div key={each.id}>
              <ProfileCard profileData={each} page="Mentorship" />
            </div>
          ))}
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};

export async function getStaticProps() {
  // const mentorsData = `${apisBasePath.mentorsData}`;
  const mentorsData = `${ksppApisBasePath.mentorsData}`;

  // const mentorsTabsData = `${apisBasePath.mentorsTabsData}`;

  const mentorsTabsData = `${ksppApisBasePath.mentorsTabs}`;
  console.log("mentorsListData", mentorsData);
  const responses = await Promise.all([
    fetch(mentorsData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }),
    fetch(mentorsTabsData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    }),
  ]);

  const data = await Promise.all(responses.map((response) => response.json()));

  const mentorPageData = {
    mentorImagesData: data[0].data,
    tabsData: data[1].data,
  };

  return {
    props: { mentorPageData },
  };
}

export default MentorshipProgram;
