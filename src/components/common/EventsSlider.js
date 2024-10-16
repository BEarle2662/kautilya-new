import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { ImagePaths } from "@/Endpoints/imagePath";
import { ImageBasePaths } from "@/Endpoints/imageBasePaths";

const EventsSlider = ({ sliderData }) => {
  //   console.log(sliderData);

  // const imagePath = "https://guprojects.gitam.edu/KSPPCMS/public/resources/";

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "black",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 500,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const itemMargin = 20;
  const itemStyle = { marginRight: `${itemMargin}px` };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderData.map((eachobj) => {
          const slug = eachobj.link?.split("/").pop();
          return (
            <div
              key={eachobj.id}
              style={{
                ...itemStyle,
                width: `calc(100% / ${settings.slidesToShow} - ${itemMargin}px)`,
              }}
              className="p-2"
            >
              <Image
                src={`${ImageBasePaths.eventsImagesPath}${eachobj.desktop_image}`}
                alt={eachobj.title}
                height={0}
                width={0}
                className="h-[257px] w-[327px]"
              />
              <p>{eachobj.heading}</p>
              <p className="event_heading">{eachobj.title}</p>
              <div className="text-light">
                <p className="date_p"> {eachobj.subtitle}</p>
                {/* <Link href={`${eachobj.link}`}> */}

                {eachobj.link && (
                  <Link href={`${slug}`}>
                    <span className="before_arrow readmoreIcon">
                      Read more
                      <img
                        src={ImagePaths.redArrow}
                        className="arrow_img"
                        alt="Read more arrow"
                      />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default EventsSlider;
