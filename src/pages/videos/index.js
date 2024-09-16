import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { apisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";
import React from "react";
import YouTube from "react-youtube";
import LazyLoad from "react-lazyload";

const videos = ({ videosData }) => {
  const image =
    "https://kspp.edu.in/images/placements/KSPP-Placement-Report-2023-Final.jpg";

  const opts = {
    height: "315",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <MainLayout
        title={"videos page Testing for metatags"}
        description={"videos page Testing for metatags"}
        keywords={"GIMSR, GITAM, Hospital"}
        img={image}
      >
        <ScreenWidth layoutwidth="true">
          <div className="">
            <CategoryHeading heading="Videos" />
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videosData.map((each) => {
              return (
                <div
                  key={each.id}
                  className="iframe_video"
                  style={{ height: "300px" }}
                >
                  <LazyLoad
                    offset={200}
                    once
                    style={{
                      height: "70%",
                      // marginRight: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <YouTube
                      videoId={each.iframe_link}
                      opts={opts}
                      onReady={(event) => event.target.pauseVideo()}
                      style={{ height: "100%" }}
                    />
                  </LazyLoad>
                  <p className="font-bold text-p text-base">
                    {each.video_title}
                  </p>
                </div>
              );
            })}
          </div>
        </ScreenWidth>
      </MainLayout>
    </>
  );
};

export async function getStaticProps() {
  const videosDataPath = `${apisBasePath.videosData}`;

  const res = await axios.get(videosDataPath, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "8efgh5gyujk",
    },
  });

  const videosData = res.data.data;
  // console.log("Videos", videosData);
  return {
    props: { videosData },
  };
}

export default videos;
