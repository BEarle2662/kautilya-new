import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, IconButton } from "@material-tailwind/react";

import { ImageBasePaths } from "@/Endpoints/imageBasePaths";
import { apisBasePath } from "@/Endpoints/apisBase";

const FullwidthSlider = ({ apiEndpoint, customSettings }) => {
  const [kautilyanow_slider, setSlider] = useState([]);

  useEffect(() => {
    fetchSliderData();
  }, []);

  const fetchSliderData = async () => {
    try {
      const res = await axios.get(
        apisBasePath.kautilyanowSlider,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "8efgh5gyujk",
          },
        }
      );

      setSlider(res.data.data);
    } catch (error) {
      console.error("Error fetching the slider data:", error);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Carousel
        autoplay={true}
        loop={true}
        className="w-full mb-4 overflow-hidden"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-10 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-10 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </IconButton>
        )}
        navigation={() => <div className="hidden"></div>}
      >
        {kautilyanow_slider
          .sort((a, b) => a.weborder - b.weborder)
          .map((eachObj, index) => (
            <div key={index} className="w-full h-full">
              <a
                {...(eachObj.url && {
                  href: eachObj.url,
                  target: "_blank",
                })}
              >
                <picture className="block w-full h-full">
                  <source
                    media="(max-width:620px)"
                    srcSet={`${ImageBasePaths.homeMobileBannerImagesPath}${eachObj.bannermobile}`}
                  />
                  <source
                    media="(min-width:621px)"
                    srcSet={`${ImageBasePaths.homeDesktopBannerImagesPath}${eachObj.banner}`}
                  />
                  <img
                    className="w-full h-full object-cover"
                    srcSet={`${ImageBasePaths.homeDesktopBannerImagesPath}${eachObj.banner}`}
                    alt={`Slide ${eachObj.weborder}`}
                  />
                </picture>
              </a>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default FullwidthSlider;

// srcSet={`https://guprojects.gitam.edu/kautilya-admin/public/kautilyanow_slider/mobile/${eachObj.bannermobile}`}
// srcSet={`https://guprojects.gitam.edu/kautilya-admin/public/kautilyanow_slider/${eachObj.banner}`}
// src={`https://guprojects.gitam.edu/kautilya-admin/public/kautilyanow_slider/${eachObj.banner}`}

// "https://guprojects.gitam.edu/kautilya-admin/api/kautilyanow_slider",
