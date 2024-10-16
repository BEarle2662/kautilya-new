import Image from "next/image";
import AlumniRegisterForm from "@/components/AlumniRegisterForm";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";

import indiaMap from "../../../public/assets/img/alumni/india-map.jpg";
import ProfileCard from "@/components/common/Profile/ProfileCard";

import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";
import axios from "axios";

const AlumniAssociation = ({ data, metaTagsResponse }) => {
  const image =
    "https://kspp.edu.in/images/placements/KSPP-Placement-Report-2023-Final.jpg";

  return (
    <MainLayout
      // title={"AlumniAssociation page Testing for metatags"}
      // description={"AlumniAssociation page Testing for metatags"}
      // keywords={"GIMSR, GITAM, Hospital"}
      // img={image}
      title={
        metaTagsResponse.title || "AlumniAssociation page Testing for metatags"
      }
      description={
        metaTagsResponse.description ||
        "AlumniAssociation page Testing for metatags"
      }
      keywords={metaTagsResponse.keywords || "kautilya, Alumni"}
      img={
        metaTagsResponse.s_image
          ? `https://guprojects.gitam.edu/kautilya-admin/public/metaimage/${metaTagsResponse.s_image}`
          : image
      }
    >
      <ScreenWidth layoutwidth="false">
        <div className="border-b-2 md:mb-10">
          <ScreenWidth layoutwidth="true">
            <AlumniRegisterForm />
          </ScreenWidth>
        </div>

        <div className="border-b-2 mb-10 mt-10 md:mt-20">
          <ScreenWidth layoutwidth="true">
            <div className="grid md:grid-cols-12 gap-8 mb-20 justify-between">
              <div className="md:col-span-5">
                <h1 className="text-primary text-center md:text-left text-2xl font-semibold md:font-bold  md:text-3xl">
                  Alumni Network
                </h1>
                <Image alt="india-map" src={indiaMap} width={0} height={0} />
              </div>
              <div className="md:col-span-1"></div>
              <div className="md:col-span-6">
                <h1 className="text-black  text-center md:text-left text-2xl font-semibold  md:font-bold md:text-3xl mb-4">
                  Alumni Speaks
                </h1>

                <iframe
                  width="100%"
                  height="313"
                  src="https://www.youtube.com/embed/3bZyjdH3Mfc"
                  title="Switching tracks: Introducing Nikhitha Jagadeesh &amp; Rawson Gonzalves, Kautilya MPP students"
                  //   frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="mb-10"
                ></iframe>

                <iframe
                  width="100%"
                  height="313"
                  src="https://www.youtube.com/embed/jGmhecg9WG0"
                  title="Entering the industry | MPP graduate Manogna Atkuru"
                  //   frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </ScreenWidth>
        </div>

        <div className="mb-6 md:mb-10">
          <ScreenWidth layoutwidth="true">
            <h1 className="text-primary text-center md:text-left text-2xl font-semibold  md:font-bold md:text-3xl mb-4">
              Alumni Profiles
            </h1>

            <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5">
              {data.map((each, index) => (
                <div key={each.name}>
                  <ProfileCard profileData={each} page="alumniAssociation" />
                </div>
              ))}
            </div>
          </ScreenWidth>
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};

export async function getStaticProps() {
  // const alumniProfiles = apisBasePath.alumniprofiles;
  const almuniProfileApi = ksppApisBasePath.almuniProfileApi;

  const metaTagsResponse = await MetaTagsComponent({
    page: "alumni-association",
  });

  // const response = await fetch(alumniProfiles);
  // const data = await response.json();

  const response = await axios.get(almuniProfileApi, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });

  const data = response.data.data;

  return {
    props: { data, metaTagsResponse: metaTagsResponse },
  };
}

export default AlumniAssociation;
