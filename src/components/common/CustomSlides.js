import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CustomSlides = ({ sliderdata, page, sliderType }) => {
  let pageType;
  let noOfslidesToShow = 3;
  let noOfslidesToScroll = 3;

  const pages = {
    studentMix: {
      mobile:
        "https://guprojects.gitam.edu/kautilya-admin/public/studentmix/mobile/",
      desktop:
        "https://guprojects.gitam.edu/kautilya-admin/public/studentmix/desktop/",
    },
    mpp: {
      mobile: "https://guprojects.gitam.edu/kautilya-admin/public/mpp/mobile/",
      desktop:
        "https://guprojects.gitam.edu/kautilya-admin/public/mpp/desktop/",
      document: "https://guprojects.gitam.edu/kautilya-admin/public/mpp/",
    },
    placements: {
      mobile: "https://guprojects.gitam.edu/kautilya-admin/public/mmp_sliders/",
      desktop:
        "https://guprojects.gitam.edu/kautilya-admin/public/mmp_sliders/",
    },
  };

  switch (page) {
    case "student-Mix":
      pageType = pages.studentMix;
      break;
    case "master-program":
      pageType = pages.mpp;
      break;
    case "placements":
      pageType = pages.placements;
      break;
    default:
      pageType = pages.mpp;
  }

  switch (sliderType) {
    case "Government Organizations":
      noOfslidesToShow = 6;
      noOfslidesToScroll = 6;
      break;
    case "Private Organizations":
      noOfslidesToShow = 4;
      noOfslidesToScroll = 4;
      break;
    default:
      noOfslidesToShow = 3;
      noOfslidesToScroll = 3;
  }

  const settings = {
    dots: true,
    slidesToShow: noOfslidesToShow,
    slidesToScroll: noOfslidesToScroll,
    autoplay: true,
    infinite: sliderdata.length > 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="">
        {sliderdata.map((eachobj, index) => {
          return (
            <div key={eachobj.id} className="">
              <a
                {...(eachobj.Syllabus && {
                  href: `${pageType.document}${eachobj.Syllabus}`,
                  target: "_blank",
                })}
              >
                <picture>
                  <source
                    media="(max-width:620px)"
                    srcSet={`${pageType.mobile}${eachobj.mobile_banner}`}
                  />
                  <source
                    media="(min-width:621px)"
                    srcSet={`${pageType.desktop}${eachobj.desktop_banner}`}
                  />
                  <img
                    className="d-block_carousel"
                    src={`${pageType.desktop}${eachobj.desktop_banner}`}
                    alt={`Slide ${eachobj.category}`}
                  />
                </picture>
              </a>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default CustomSlides;
