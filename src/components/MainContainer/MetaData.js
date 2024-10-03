import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { apisBasePath } from "@/Endpoints/apisBase";
let meta = {
  title: "GITAM INSTITUTE OF MEDICAL SCIENCES AND RESEARCH",
  description:
    "Gandhi Institute of Technology and Management, popularly known as GITAM, was founded in 1980 by an inspired group of eminent intellectuals and industrialists with the objective of promoting a world-class institution of higher learning in diverse fields of professional education. In 2007, this premier institution of higher learning and research with Global standards was declared a deemed university u/s 3 of the UGC Act, 1956, by Ministry of Human Resources, Govt. of India. GITAM is located in three picturesque campuses at Visakhapatnam, Hyderabad and Bengaluru. With a multi disciplinary approach, GITAM offers different programs at UG, PG and Doctoral levels in - Technology, Pharmacy, Science, Management, International Business, Architecture and Law.",
  keywords:
    "GITAM INSTITUTE OF MEDICAL SCIENCES AND RESEARCH, GIMSR, GITAM, Hospital, GITAM Hospital, Emergency, Medical College, College, GITAM Medical",
  img: "../../public/academic_1.png",
};
const MetaData = ({
  title = "GITAM INSTITUTE OF MEDICAL SCIENCES AND RESEARCH",
  description = "Gandhi Institute of Technology and Management, popularly known as GITAM, was founded in 1980 by an inspired group of eminent intellectuals and industrialists with the objective of promoting a world-class institution of higher learning in diverse fields of professional education. In 2007, this premier institution of higher learning and research with Global standards was declared a deemed university u/s 3 of the UGC Act, 1956, by Ministry of Human Resources, Govt. of India. GITAM is located in three picturesque campuses at Visakhapatnam, Hyderabad and Bengaluru. With a multi disciplinary approach, GITAM offers different programs at UG, PG and Doctoral levels in - Technology, Pharmacy, Science, Management, International Business, Architecture and Law.",
  keywords = "GITAM INSTITUTE OF MEDICAL SCIENCES AND RESEARCH, GIMSR, GITAM, Hospital, GITAM Hospital, Emergency, Medical College, College, GITAM Medical",
  img = "../../public/academic_1.png",
}) => {
  const [metaData, setMetaData] = useState();

  // const route = useRouter();
  // let pageTitle;

  // if (route.pathname === "/kautilya-next") {
  //   pageTitle = "/kautilya";
  // } else if (route.pathname.startsWith("/blog")) {
  //   pageTitle = route.pathname.replace("/blog", "");
  // } else {
  //   pageTitle = route.pathname;
  // }

  // useEffect(() => {
  //   fetchMetaTags();
  // }, [route.pathname]);

  // const fetchMetaTags = async () => {
  //   const metaApi = apisBasePath.metatagsData;
  //   try {
  //     fetch(`${metaApi}${pageTitle}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "8efgh5gyujk",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setMetaData(data.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // console.log("MetaData", metaData);

  // const metaTitle = metaData?.title ? metaData.title : title;
  // const metaDescription = metaData?.description
  //   ? metaData.description
  //   : description;
  // const metakeywords = metaData?.keywords ? metaData.keywords : keywords;
  // const metaImg = metaData?.s_image
  //   ? `https://guprojects.gitam.edu/kautilya-admin/public/metaimage/${metaData.s_image}`
  //   : img;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={img} />
        <meta
          property="og:url"
          content="https://webdev.gitam.edu/kautilya-next/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={img} />
      </Head>
    </>
  );
};

export default MetaData;
