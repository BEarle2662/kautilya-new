// src/common/AdmissionEnquiryBtn.js

import Script from "next/script";
import { useEffect } from "react";

const AdmissionEnquiryBtn = () => {
  // Optional: Use useEffect to perform additional setup if needed
  useEffect(() => {
    // Any additional client-side logic can go here
  }, []);

  return (
    <div>
      {/* Enquire Now Button */}
      <button
        type="button"
        className="npfWidgetButton npfWidget-0da0d2dd344f21c6dfe473c84bd609a0"
      >
        Enquire Now!
      </button>

      {/* External Script: Loads the widget script */}
      <Script
        src="https://in8cdn.npfs.co/js/widget/npfwpopup.js"
        strategy="afterInteractive" // Ensures script loads after the page is interactive
        onLoad={() => {
          // Initialize the widget once the script has loaded
          if (typeof window !== "undefined" && window.NpfWidgetsInit) {
            new window.NpfWidgetsInit({
              widgetId: "0da0d2dd344f21c6dfe473c84bd609a0",
              baseurl: "widgets.in8.nopaperforms.com",
              formTitle: "Enquiry Form",
              titleColor: "#FF0033",
              backgroundColor: "#ddd",
              iframeHeight: "500px",
              buttonbgColor: "#4c79dc",
              buttonTextColor: "#FFF",
            });
          } else {
            console.error("NpfWidgetsInit is not available.");
          }
        }}
      />
    </div>
  );
};

export default AdmissionEnquiryBtn;
