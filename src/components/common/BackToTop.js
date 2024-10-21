import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const BackToTopButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleBackToTop = () => {
    if (window.scrollY > 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    // Add event listener for scroll events
    window.addEventListener("scroll", toggleBackToTop);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", toggleBackToTop);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`back-to-top ${isActive ? "active" : ""}`}
      onClick={scrollToTop}
    >
      <FaAngleUp className="faicon" />
    </div>
  );
};

export default BackToTopButton;
