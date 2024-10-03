import FullScreenSlider from "@/components/common/FullScreenSlider";
import FullwidthSlider from "@/components/common/fullWidthSlider";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";
import React from "react";

const StudyAtKautilya = ({ kautilyaAdvantageBanner, metaTagsResponse }) => {
  let page =
    "placements"; /* due to sending the data to slider with a same path of placements & kautilya Adv */

  const image =
    "https://programmes.gitam.edu/mbbs/static/media/academic_1.792758fcc02309368071.png";
  return (
    <>
      <MainLayout
        title={
          metaTagsResponse.title ||
          "kautilya Advantage page Testing for metatags"
        }
        description={
          metaTagsResponse.description ||
          "kautilya Advantage page Testing for metatags"
        }
        keywords={metaTagsResponse.keywords || "kautilya, Advantage"}
        img={
          metaTagsResponse.s_image
            ? `https://guprojects.gitam.edu/kautilya-admin/public/metaimage/${metaTagsResponse.s_image}`
            : image
        }
      >
        <h1 className="text-2xl md:text-5xl text-center text-white bg-primary mb-4 py-16">
          LEARN FROM THE BEST
        </h1>
        <ScreenWidth layoutwidth="true">
          <div className="p-2 md:p-12">
            <p className="text-lg mb-16">
              We’ve brought in the finest educators and influencers to set you
              up for success with one of the{" "}
              <b>best public policy curriculum</b>
              at one of the top public policy schools in India. The academics at
              Kautilya are strengthened by faculties comprising a mix of{" "}
              <b>
                experienced research scholars and practitioners from eminent
                institutions like UN, IIM, Harvard, etc.,
              </b>{" "}
              and from areas like Economics, Public Policy, Political Science,
              Statistics, Ethics, Leadership, and more.
            </p>

            <FullScreenSlider
              slider={kautilyaAdvantageBanner}
              pagesMpp={page}
            />

            <p className="text-lg mt-8">
              Experienced Faculties, Acclaimed Mentors, Experiential Learning,
              industry-mapped curriculum, Learner-Centric Pedagogy,
              Simulation-based Knowledge Sharing, Delightful Campus Life, and
              Career Development Support are key reasons students choose to
              pursue higher education at Kautilya.
            </p>
          </div>
        </ScreenWidth>
      </MainLayout>
    </>
  );
};

// export const getStaticProps = async () => {
//   const response = await axios.get(apisBasePath.placementsKcAdvnData);
//   const studentAtKautilyaData = response.data.data;
//   const kautilyaAdvantageBanner = studentAtKautilyaData.filter(
//     (each) => each.category === "study-at-kautilya"
//   );
//   const metaTagsResponse = await MetaTagsComponent("study-at-kautilya");
//   return {
//     props: {
//       kautilyaAdvantageBanner,
//       metaTagsResponse,
//     },
//   };
// };

// export const getStaticProps = async () => {
//   try {
//     // Fetch the placements data
//     const response = await axios.get(apisBasePath.placementsKcAdvnData);
//     const studentAtKautilyaData = response.data.data;
//     const kautilyaAdvantageBanner = studentAtKautilyaData.filter(
//       (each) => each.category === "study-at-kautilya"
//     );

//     // Await the meta tags data from MetaTagsComponent
//     const metaTagsResponse = await MetaTagsComponent("study-at-kautilya");

//     return {
//       props: {
//         kautilyaAdvantageBanner,
//         metaTagsResponse, // Pass the resolved meta tags data
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data", error);
//     return {
//       props: {
//         kautilyaAdvantageBanner: [],
//         metaTagsResponse: {}, // Provide default values in case of error
//       },
//     };
//   }
// };

export const getStaticProps = async () => {
  try {
    // Fetch the placements data
    const response = await axios.get(apisBasePath.placementsKcAdvnData);
    const studentAtKautilyaData = response.data.data;
    const kautilyaAdvantageBanner = studentAtKautilyaData.filter(
      (each) => each.category === "study-at-kautilya"
    );

    // Await the meta tags data from MetaTagsComponent
    const metaTagsResponse = await MetaTagsComponent({
      page: "study-at-kautilya",
    });
    console.log("metaTagsResponse", metaTagsResponse);
    // Ensure that metaTagsResponse is not undefined
    return {
      props: {
        kautilyaAdvantageBanner,
        metaTagsResponse: metaTagsResponse || {}, // Ensure default object if undefined
      },
    };
  } catch (error) {
    console.error("Error fetching data", error);
    return {
      props: {
        kautilyaAdvantageBanner: [],
        metaTagsResponse: {}, // Provide default empty object in case of error
      },
    };
  }
};

export default StudyAtKautilya;
