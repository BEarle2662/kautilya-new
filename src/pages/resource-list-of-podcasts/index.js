import Image from "next/image";
import React from "react";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";



import podcast from "../../../public/assets/img/podcast.jpg";
import Faq from "@/components/common/Faq";
import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";
const PodcastFaqs = ({ podcastFaqs }) => {
  const image =
    "https://kspp.edu.in/images/placements/KSPP-Placement-Report-2023-Final.jpg";
  return (
    <MainLayout
      title={"Podcast Faq page Testing for metatags"}
      description={"Podcast Faq page Testing for metatags"}
      keywords={"GIMSR, GITAM, Hospital"}
      img={image}
    >
      <ScreenWidth layoutwidth="true">
        <Image src={podcast} width={0} height={0} alt="podcast-faq-banner" />

        <p className="md:my-5">
          <i>
            “ <b>Listening is the new reading. </b> To ensure that students of
            public policy get up-to-date analysis of the latest developments in
            the field, Kautilya School of Public Policy brings to its readers a
            list of podcasts covering topics from – developments in world
            politics, and economics to emerging trends in society. The compiled
            list <b>intends to inspire young scholars </b> of public policy to
            aid their interests within this diverse field. Regular engagement
            with the podcasts would enrich their knowledge base and
            <b> provide insights beyond the classroom.</b> ”
          </i>
        </p>
        <p className="md:my-4 text-2xl">
          An evolving database of selected podcasts.
        </p>
        <div className="md:px-5 md:py-8">
          <Faq faqData={podcastFaqs} />
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};

export async function getStaticProps() {
 // let podcastFaqs = [];


  const podcastFaqsApi = ksppApisBasePath.resourcespodcastsApi;

  const response = await axios.get(podcastFaqsApi, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });
  const podcastFaqs = response.data.data || [];
  // try {
  //   const response = await fetch(
  //     apisBasePath.faqdata,

  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         type: "Podcasts",
  //       }),
  //     }
  //   );
  //   podcastFaqs = await response.json();
  //   // console.log("podcastFaqs", podcastFaqs);
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }

  return {
    props: {
      podcastFaqs,
    },
  };
}

export default PodcastFaqs;
