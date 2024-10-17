import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScreenWidth from "../MainContainer/ScreenWidth";
import { ImageBasePaths } from "@/Endpoints/imageBasePaths";

const FullScreenSlider = ({ slider, pagesMpp }) => {
  let slides = slider;
  // console.log("KCADV", slides);

  let pageType;
  const pages = {
    mpp: {
      mobile: "https://guprojects.gitam.edu/kautilya-admin/public/mpp/tabs/",
      desktop: "https://guprojects.gitam.edu/kautilya-admin/public/mpp/tabs/",
    },
    placements: {
      mobile: ImageBasePaths.placementsImagesPath,
      desktop: ImageBasePaths.placementsImagesPath,
    },
    kautilyaAdvantage: {
      mobile:
        "https://guprojects.gitam.edu/KSPPCMS/public/studykautilya/mobile/",
      desktop: "https://guprojects.gitam.edu/KSPPCMS/public/studykautilya/",
    },
  };

  switch (pagesMpp) {
    case "master-program":
      pageType = pages.mpp;
      break;
    case "placements":
      pageType = pages.placements;
      slides = [...slides].reverse(); // Reverse the slides array
      // console.log("switch rev", slides);
      break;
    case "kautiya-advantage":
      pageType = pages.kautilyaAdvantage;
      slides = [...slides].reverse(); // Reverse the slides array
      // console.log("switch rev", slides);
      break;
    default:
      pageType = pages.mpp;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <ScreenWidth layoutwidth="false">
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((sliderItem) => (
            <div key={sliderItem.desktop_banner || sliderItem.desktop_image}>
              <picture>
                <source
                  media="(max-width:620px)"
                  srcSet={`${pageType.mobile}${
                    sliderItem.mobile_banner || sliderItem.mobile_image
                  }`}
                />
                <source
                  media="(min-width:621px)"
                  srcSet={`${pageType.desktop}${
                    sliderItem.desktop_banner || sliderItem.desktop_image
                  }`}
                />
                <img
                  className="d-block_carousel"
                  src={`${pageType.desktop}${
                    sliderItem.desktop_banner || sliderItem.desktop_image
                  }`}
                  alt={`Slide ${sliderItem.category}`}
                />
              </picture>
            </div>
          ))}
        </Slider>
      </div>
    </ScreenWidth>
  );
};

export default FullScreenSlider;
