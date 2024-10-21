import FullScreenSlider from "@/components/common/FullScreenSlider";
import FullwidthSlider from "@/components/common/fullWidthSlider";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";
import React from "react";

const StudyAtKautilya = ({ studentAtKautilyaData, metaTagsData }) => {
  let metaImg;
  // valu= " "
  // const metaImg =
  //   metaTagsData.meta_image !== null || metaTagsData.meta_image !== ""
  //     ? `https://guprojects.gitam.edu/KSPPCMS/public/metaimages/${metaTagsData.meta_image}`
  //     : "https://kspp.edu.in/images/administration.jpg";

  console.log("study Page Meta DAta", metaTagsData);

  if (metaTagsData.meta_image !== null) {
    metaImg = `https://guprojects.gitam.edu/KSPPCMS/public/metaimages/${metaTagsData.meta_image}`;
  } else {
    metaImg = "https://kspp.edu.in/images/administration.jpg";
  }

  console.log("study Page Meta DAta", metaImg);
  return (
    <>
      <MainLayout
        title={metaTagsData.title}
        description={metaTagsData.description}
        keywords={metaTagsData.keywords}
        img={metaImg}
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
              slider={studentAtKautilyaData}
              pagesMpp="kautiya-advantage"
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
    // const response = await axios.get(apisBasePath.placementsKcAdvnData);
    const response = await axios.get(ksppApisBasePath.kcAdvnData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    });
    // console.log("studentAtKautilyaData", response);
    const studentAtKautilyaData = response.data.data;
    // const kautilyaAdvantageBanner = studentAtKautilyaData.filter(
    //   (each) => each.category === "study-at-kautilya"
    // );

    // console.log("studentAtKautilyaData", studentAtKautilyaData);

    // Await the meta tags data from MetaTagsComponent
    // const metaTagsResponse = await MetaTagsComponent({
    //   page: "study-at-kautilya",
    // });
    // console.log("metaTagsResponse", metaTagsResponse);
    // Ensure that metaTagsResponse is not undefined
    const metaComponentResponse = await MetaTagsComponent({
      page: "study-at-kautilya",
    });

    console.log("study Page Meta DAta", metaComponentResponse);
    return {
      props: {
        studentAtKautilyaData,
        metaTagsData: metaComponentResponse,
      },
      revalidate: 60, // Ensure default object if undefined
    };
  } catch (error) {
    console.error("Error fetching data", error);
    // return {
    //   props: {
    //     studentAtKautilyaData: [],
    //     metaTagsData: {}, // Provide default empty object in case of error
    //     revalidate: 60,
    //   },
    // };
  }
};

export default StudyAtKautilya;
