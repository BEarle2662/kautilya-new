import React from "react";

import MainLayout from "@/components/MainContainer/MainLayout";
import CategoryHeading from "@/components/common/categoryHeading";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import ProfileCard from "@/components/common/Profile/ProfileCard";

import Image from "next/image";
import Link from "next/link";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { ImagePaths } from "@/Endpoints/imagePath";

import aboutImg from "../../../public/assets/img/about-left.jpg";

const sectors = [
  {
    description:
      "This includes business consultants, policy consultants of large corporations, policy analysts, think tanks and private policy implementation organisations. Courses on financial reporting, management, cyber security, etc. focus on these streams.",
    name: "Private Sector",
  },
  {
    name: "Public Service",
    description:
      "This includes policy making and implementation, government roles, and political candidates, who can leverage subjects like politics, public policy design and analysis, ethics, constitution and law, political campaign management, etc.",
  },
  {
    name: "Global Affairs",
    description:
      "This spans a variety of domains ranging from positions within the Government of India and international organizations like the World Bank and United Nations to positions within international NGOs like ICLEI, ITF, and WWF. Students will need to grasp the value and potential of diplomacy within the framework of foreign policy toward creating collaborative and cooperative ties focused on common goals and objectives.",
  },
  {
    name: "Non-profit or Social Enterprise",
    description:
      "The Master’s Program in Public Policy (MPP) helps build capacity in entrepreneurship with a focus on different sectors within social development. Subjects such as gender, strategy, organization behavior, energy and climate change, negotiation, corruption, etc. help build all-round skills to drive greater impact in this sector.",
  },
  {
    name: "Media & Communications",
    description:
      "Aspiring media, journalism and communications professionals who focus on public sector topics can leverage subjects like communication for leaders, macroeconomics, global trade and policy, data visualization, business government, and society.",
  },
  {
    name: "Research & Academia",
    description:
      "This includes Think Tanks & individuals who want to teach, pursue research, and push policy thinking in India and globally and can leverage courses on research methodologies, quantitative analysis, and macroeconomics.",
  },
];

const About = ({ initialTeamData }) => {
  const deptHeadings = [
    { foundingTeam: "Founding Team" },
    { deanData: "Dean" },
    { advisoryTeam: "Advisory Board" },
    { ourTeam: "Our Team" },
    { technicalSupport: "Technical Support" },
    { supportStaff: "Support Staff" },
  ];

  const image =
    "https://programmes.gitam.edu/mbbs/static/media/academic_1.792758fcc02309368071.png";
  return (
    <>
      <MainLayout
        title={"About page Testing for metatags"}
        description={"Home page Testing for metatags"}
        keywords={"GIMSR, GITAM, Hospital"}
        img={image}
      >
        <ScreenWidth layoutwidth="true">
          {deptHeadings.map((each, index) => {
            const keyName = Object.keys(each)[0];
            // console.log(`md:grid-cols-${initialTeamData[keyName].length}`);
            return (
              <div key={index} className="mb-20">
                <CategoryHeading heading={Object.values(each)[0]} />

                {/* <div
                  className={`grid ${
                    initialTeamData[keyName].length === 1
                      ? "md:grid-cols-1"
                      : initialTeamData[keyName].length === 2
                      ? "md:grid-cols-1"
                      : initialTeamData[keyName].length === 3
                      ? "md:grid-cols-3"
                      : initialTeamData[keyName].length === 4
                      ? "md:grid-cols-4"
                      : "md:grid-cols-3 lg:grid-cols-5"
                  }`}
                > */}
                <div
                  className={
                    initialTeamData[keyName].length < 4
                      ? "flex flex-col md:flex-row  md:justify-center gap-4"
                      : initialTeamData[keyName].length < 5
                      ? "grid  md:grid-cols-3 lg:grid-cols-4 gap-0"
                      : "grid md:grid-cols-3 lg:grid-cols-5 gap-2"
                  }
                >
                  {initialTeamData[keyName].map((each) => (
                    <ProfileCard
                      profileData={each}
                      key={each.id}
                      page="about"
                    />
                  ))}
                </div>
              </div>
            );
          })}

          <div>
            <h1 className="text-4xl font-normal md:text-6xl md:font-thin  lg:text-9xl text-p mb-10">
              Build a career
              <br />
              in public policy
            </h1>
          </div>
          <div className="grid md:grid-cols-12 gap-4 md:gap-6 mb-10">
            <div className="md:col-span-4">
              <Image
                src={aboutImg}
                alt="about-left-img"
                width={0}
                height={0}
                className="md:h-[90%] w-full"
              />
            </div>
            <div className="md:col-span-8">
              <p className="text-p font-bold mb-8 text-justify">
                Our program’s combination of academic rigour and on-ground
                experiences will give you the confidence to assume leadership in
                any career of your choice. Some of the popular avenues you can
                choose after your Master’s Program in Public Policy (MPP)
                include:
              </p>
              <div className="grid md:grid-cols-4 gap-y-6 md:gap-x-6 md:gap-y-10 mt-6">
                {sectors.map((each, index) => {
                  return (
                    <div key={index} className="md:col-span-2">
                      <p className="text-p font-bold text-lg mb-2">
                        {each.name}
                      </p>
                      <p className="text-justify text-p text-md">
                        {each.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScreenWidth>
        <ScreenWidth layoutwidth="false">
          <div className="bg-black-shade  bg-cover bg-no-repeat  h-screen mt-6 pt-24">
            <ScreenWidth layoutwidth="true">
              <div className="grid grid-cols-9">
                <div className="text-2xl md:text-3xl lg:text-6xl font-medium mt-16 col-span-9">
                  <h1 className="mb-4 text-white ">
                    Kautilya’s Master’s Program in Public Policy (MPP) is
                    designed for those looking to rebalance the role of Society,
                    Government and business towards an equitable world.
                  </h1>
                  <Link href="/mpp" className="text-primary">
                    <div className="flex">
                      <h1 className="text-lg md:text-xl  font-bold">
                        LEARN ABOUT THE PROGRAM
                      </h1>
                      <Image
                        src={ImagePaths.redArrow}
                        alt="right-arrow"
                        width={0}
                        height={0}
                        className="w-10 h-4 self-end md:self-center mr-4"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </ScreenWidth>
          </div>
        </ScreenWidth>
      </MainLayout>
    </>
  );
};

export async function getStaticProps() {
  // const ksppteamdata = apisBasePath.ksppteam;
  const ksppteamdata = ksppApisBasePath.ourteam;

  const response = await fetch(ksppteamdata, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const data = await response.json();

  const foundingTeam = data.data.filter(
    (each) => each.role === "Founding Team"
  );
  const deanData = data.data.filter((each) => each.role === "Dean");
  const advisoryTeam = data.data.filter(
    (each) => each.role === "Advisory Board"
  );
  const ourTeam = data.data.filter((each) => each.role === "Our Team");
  const technicalSupport = data.data.filter(
    (each) => each.role === "Technical Support"
  );
  const supportStaff = data.data.filter(
    (each) => each.role === "Support Staff"
  );

  const initialTeamData = {
    foundingTeam: foundingTeam,
    deanData: deanData,
    advisoryTeam: advisoryTeam,
    ourTeam: ourTeam,
    technicalSupport: technicalSupport,
    supportStaff: supportStaff,
  };

  return {
    props: { initialTeamData },
    // Revalidate at most once every 60 seconds
    revalidate: 30, // In seconds
  };
}

export default About;
