import React from "react";
import Slider from "react-slick";

const CustomSlider = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  // Handle empty data or missing props
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data available</p>;
  }

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <Slider {...settings}>
        {data.map((eachObj, index) => (
          <div key={eachObj.id}>
            <img
              src={eachObj.image}
              alt={eachObj.title || `Slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-md shadow-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{eachObj.title}</h2>
            <p className="text-gray-700 mt-2">{eachObj.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
