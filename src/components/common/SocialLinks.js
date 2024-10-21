import React, { useState } from "react";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";

const SocialLinks = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (hover_index) => {
    setHoveredLink(hover_index);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div style={styles.socialSidebar}>
      {socialMediaLinks.map((link, hover_index) => (
        <a
          key={hover_index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.link,
            backgroundColor: link.backgroundColor,
            width: hoveredLink === hover_index ? "45px" : "35px", // Reduced the width
          }}
          onMouseEnter={() => handleMouseEnter(hover_index)}
          onMouseLeave={handleMouseLeave}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

const socialMediaLinks = [
  {
    url: "https://www.facebook.com/KautilyaSPP",
    backgroundColor: "#108beb",
    icon: <FaFacebook />,
  },
  {
    url: "https://www.linkedin.com/school/kautilyaspp/",
    backgroundColor: "#0077b5",
    icon: <FaLinkedin />,
  },
  {
    url: "https://twitter.com/KautilyaSPP",
    backgroundColor: "#000000",
    icon: <FaXTwitter />,
  },
  {
    url: "https://www.instagram.com/kautilyaspp/",
    backgroundColor: "#e4405f",
    icon: <FaInstagram />,
  },
  {
    url: "https://www.youtube.com/channel/UCfzky9XTJRvt15Rba1Crfhg",
    backgroundColor: "#cd201f",
    icon: <SiYoutube />,
  },
];

const styles = {
  socialSidebar: {
    position: "fixed",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  link: {
    boxSizing: "border-box",
    color: "#fff",
    textDecoration: "none",
    padding: "20px 10px",
    display: "flex",
    alignItems: "center",
    transition: "width 0.3s ease",
  },
  icon: {
    marginRight: "4px",
    fontSize: "12px",
  },

  "@media (max-width: 620px)": {
    socialSidebar: {
      top: "30%",
      left: "10px",
    },
    link: {
      width: "30px",
      padding: "15px 8px",
    },
    icon: {
      fontSize: "10px",
    },
  },
};

export default SocialLinks;
