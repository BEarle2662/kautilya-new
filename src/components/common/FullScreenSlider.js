import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScreenWidth from "../MainContainer/ScreenWidth";

const FullScreenSlider = ({ slider, pagesMpp }) => {
  let slides = slider;

  let pageType;
  const pages = {
    mpp: {
      mobile: "https://guprojects.gitam.edu/kautilya-admin/public/mpp/tabs/",
      desktop: "https://guprojects.gitam.edu/kautilya-admin/public/mpp/tabs/",
    },
    placements: {
      mobile: "https://guprojects.gitam.edu/kautilya-admin/public/mmp_sliders/",
      desktop:
        "https://guprojects.gitam.edu/kautilya-admin/public/mmp_sliders/",
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
            <div key={sliderItem.id}>
              <picture>
                <source
                  media="(max-width:620px)"
                  srcSet={`${pageType.mobile}${sliderItem.mobile_banner}`}
                />
                <source
                  media="(min-width:621px)"
                  srcSet={`${pageType.desktop}${sliderItem.desktop_banner}`}
                />
                <img
                  className="d-block_carousel"
                  src={`${pageType.desktop}${sliderItem.desktop_banner}`}
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
