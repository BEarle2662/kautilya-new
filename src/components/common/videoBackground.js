import React from "react";
import { MdHeight } from "react-icons/md";

const VideoBackground = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Video Container */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/kautilya_gitam.mp4" type="video/mp4" />
          <source src="/assets/videos/kautilya_gitam.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoBackground;
