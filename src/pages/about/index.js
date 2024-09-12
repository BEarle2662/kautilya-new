import React from "react";

import MainLayout from "@/components/MainContainer/MainLayout";
import CategoryHeading from "@/components/common/categoryHeading";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import ProfileCard from "@/components/common/Profile/ProfileCard";

const About = ({ initialTeamData }) => {
  console.log("About Page", initialTeamData);

  // const deptHeadingsKeys = Object.keys(initialTeamData);

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
            return (
              <div key={index} className="my-20">
                <CategoryHeading heading={Object.values(each)[0]} />

                <div
                  className={` justify-center ${
                    initialTeamData[keyName].length < 5
                      ? "md:grid-cols-2 lg:grid-cols-3 justify-center"
                      : "grid md:grid-cols-3 lg:grid-cols-5"
                  } `}
                >
                  {initialTeamData[keyName].map((each) => (
                    <ProfileCard profileData={each} key={each.id} />
                  ))}
                </div>
              </div>
            );
          })}
        </ScreenWidth>
      </MainLayout>
    </>
  );
};

export async function getStaticProps() {
  const ourteamfoundingUrl =
    "https://guprojects.gitam.edu/kautilya-admin/api/fetch-ourteamfounding";
  const deanDataUrl =
    "https://guprojects.gitam.edu/kautilya-admin/api/fetch-ourteamdean";
  const advisoryTeamUrl =
    "https://guprojects.gitam.edu/kautilya-admin/api/fetch-ourteamadvisory";
  const ourTeamUrl =
    "https://guprojects.gitam.edu/kautilya-admin/api/fetch-ourteam";
  const technicalsupportUrl =
    "https://guprojects.gitam.edu/kautilya-admin/api/fetch-technicalsupport";
  const supportstaffUrl =
    "https://guprojects.gitam.edu/kautilya-admin/api/fetch-supportstaff";

  // Fetch all URLs concurrently
  const responses = await Promise.all([
    fetch(ourteamfoundingUrl),
    fetch(deanDataUrl),
    fetch(advisoryTeamUrl),
    fetch(ourTeamUrl),
    fetch(technicalsupportUrl),
    fetch(supportstaffUrl),
  ]);

  // Parse all responses as JSON
  const data = await Promise.all(responses.map((response) => response.json()));

  // Combine all the fetched data into one object or array, depending on your needs
  const initialTeamData = {
    foundingTeam: data[0].data,
    deanData: data[1].data,
    advisoryTeam: data[2].data,
    ourTeam: data[3].data,
    technicalSupport: data[4].data,
    supportStaff: data[5].data,
  };

  return {
    props: { initialTeamData },
  };
}

export default About;
