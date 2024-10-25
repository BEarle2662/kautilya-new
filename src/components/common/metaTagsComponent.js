import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import { metaFallbackData } from "@/Endpoints/metaFallback";
import axios from "axios";

export const MetaTagsComponent = async ({ page }) => {
  let pageTitle;
  if (page === "kautilya-next") {
    pageTitle = "kautilya";
  } else {
    pageTitle = page;
  }

  const metaApi = ksppApisBasePath.metadataApi;

  // console.log(`${metaApi}/${pageTitle}`);

  try {
    const response = await axios.get(`${metaApi}/${pageTitle}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    });

    const data = response.data;
    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // console.log(
      //   "Error 404: Resource not found. Fetching default home URL data..."
      // );

      try {
        const fallbackResponse = await axios.get(`${metaApi}/home`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "8efgh5gyujk",
          },
        });

        // console.log("Fallback response:", fallbackResponse.data);
        return fallbackResponse.data || metaFallbackData;
      } catch (fallbackError) {
        // console.error(
        //   "Error fetching default home URL:",
        //   fallbackError.message
        // );
        return metaFallbackData;
      }
    } else {
      // Handle other errors or re-throw to stop execution
      // console.error("Error:", error.message);
      throw error; // Re-throw if you want to stop execution for other errors
    }
  }
};
