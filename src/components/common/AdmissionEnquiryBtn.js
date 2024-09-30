import { useEffect } from "react";

const AdmissionEnquiryBtn = () => {
  useEffect(() => {
    // Show or hide the Admission Button based on the current path
    function showAdmissionButton() {
      const gover = window.location.pathname;
      const admissionButton = document.getElementById("admissionButton");
      if (admissionButton) {
        if (gover === "/governExcellenceContactUs") {
          admissionButton.style.display = "none";
        } else {
          admissionButton.style.display = "block";
        }
      }
    }

    // Directly call the function when the component mounts
    showAdmissionButton();

    // Re-run the check if the pathname changes dynamically
    const handleRouteChange = () => {
      showAdmissionButton();
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);
  //   useEffect(() => {
  //     // Load external script for NpfWidgetsInit

  //     const script = document.createElement("script");
  //     script.src = "https://widgets.in8.nopaperforms.com/emwgts.js"; // Correct URL to the external script that defines NpfWidgetsInit
  //     script.async = true;

  //     script.onload = () => {
  //       // Wait until NpfWidgetsInit is available
  //       const checkForNpfWidgetsInit = setInterval(() => {
  //         if (window.NpfWidgetsInit) {
  //           clearInterval(checkForNpfWidgetsInit);

  //           // Initialize NpfWidgetsInit once it's available
  //           let npfW0da0d2dd344f21c6dfe473c84bd609a0 = new window.NpfWidgetsInit({
  //             widgetId: "0da0d2dd344f21c6dfe473c84bd609a0",
  //             baseurl: "widgets.in8.nopaperforms.com",
  //             formTitle: "Enquiry Form",
  //             titleColor: "#FF0033",
  //             backgroundColor: "#ddd",
  //             iframeHeight: "500px",
  //             buttonbgColor: "#4c79dc",
  //             buttonTextColor: "#FFF",
  //           });
  //         }
  //       }, 100); // Check every 100ms until NpfWidgetsInit is available
  //     };

  //     document.body.appendChild(script);

  //     return () => {
  //       document.body.removeChild(script);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     // Load external script for NpfWidgetsInit
  //     const script = document.createElement("script");
  //     script.src = "https://widgets.in8.nopaperforms.com/emwgts.js"; // Correct URL to the external script that defines NpfWidgetsInit
  //     script.async = true;

  //     script.onload = () => {
  //       // Wait until NpfWidgetsInit is available
  //       const checkForNpfWidgetsInit = setInterval(() => {
  //         if (window.NpfWidgetsInit) {
  //           clearInterval(checkForNpfWidgetsInit);

  //           // Initialize NpfWidgetsInit once it's available
  //           const npfWidget = new window.NpfWidgetsInit({
  //             widgetId: "0da0d2dd344f21c6dfe473c84bd609a0",
  //             baseurl: "widgets.in8.nopaperforms.com",
  //             formTitle: "Enquiry Form",
  //             titleColor: "#FF0033",
  //             backgroundColor: "#ddd",
  //             iframeHeight: "500px",
  //             buttonbgColor: "#4c79dc",
  //             buttonTextColor: "#FFF",
  //           });

  //           // Append widget to a container div
  //           const widgetContainer = document.getElementById("widgetContainer");
  //           if (widgetContainer) {
  //             widgetContainer.appendChild(npfWidget.getIframe());
  //           }
  //         }
  //       }, 100); // Check every 100ms until NpfWidgetsInit is available
  //     };

  //     document.body.appendChild(script);

  //     return () => {
  //       document.body.removeChild(script);
  //     };
  //   }, []);

  const callForm = () => {
    const script = document.createElement("script");
    script.src = "https://widgets.in8.nopaperforms.com/emwgts.js"; // Correct URL to the external script that defines NpfWidgetsInit
    script.async = true;

    script.onload = () => {
      // Wait until NpfWidgetsInit is available
      const checkForNpfWidgetsInit = setInterval(() => {
        if (window.NpfWidgetsInit) {
          clearInterval(checkForNpfWidgetsInit);

          // Initialize NpfWidgetsInit once it's available
          const npfWidget = new window.NpfWidgetsInit({
            widgetId: "0da0d2dd344f21c6dfe473c84bd609a0",
            baseurl: "widgets.in8.nopaperforms.com",
            formTitle: "Enquiry Form",
            titleColor: "#FF0033",
            backgroundColor: "#ddd",
            iframeHeight: "500px",
            buttonbgColor: "#4c79dc",
            buttonTextColor: "#FFF",
          });

          // Append widget to a container div
          const widgetContainer = document.getElementById("widgetContainer");
          if (widgetContainer) {
            widgetContainer.appendChild(npfWidget.getIframe());
          }
        }
      }, 100); // Check every 100ms until NpfWidgetsInit is available
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  };

  return (
    <div>
      <button
        type="button"
        id="admissionButton"
        style={{ display: "block" }}
        className="npfWidgetButton npfWidget-0da0d2dd344f21c6dfe473c84bd609a0"
        onClick={callForm}
      >
        Admission Enquiry
      </button>

      {/* This is where the widget iframe will be appended */}
      <div id="widgetContainer"></div>
    </div>
  );
};

export default AdmissionEnquiryBtn;
