import { apisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";

export const MetaTagsComponent = async ({ page }) => {
  // console.log("PAGE", page);
  let pageTitle;
  if (page === "/kautilya-next") {
    pageTitle = "/kautilya";
  } else {
    pageTitle = page;
  }

  const metaApi = apisBasePath.metatagsData;
  // console.log("API", `${metaApi}/${pageTitle}`);

  try {
    const response = await axios.get(`${metaApi}/${pageTitle}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
        "Cache-Control": "no-store",
      },
    });
    const data = response.data; // Axios returns the data directly in response.data
    // console.log(":MetaData", data.data);
    return data.data; // Return the actual meta tags data
  } catch (error) {
    console.error("Error fetching meta tags:", error);
    return null; // Handle errors and return null if something goes wrong
  }
};
