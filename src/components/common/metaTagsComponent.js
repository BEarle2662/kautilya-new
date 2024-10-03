import { apisBasePath } from "@/Endpoints/apisBase";

export const MetaTagsComponent = async ({ page }) => {
  console.log("PAGE", page);
  let pageTitle;
  if (page === "/kautilya-next") {
    pageTitle = "/kautilya";
  }
  //   else if (page.startsWith("/blog")) {
  //     pageTitle = page.replace("/blog", "");
  //   }
  else {
    pageTitle = page;
  }

  const metaApi = apisBasePath.metatagsData;
  console.log("API", `${metaApi}/${pageTitle}`);
  try {
    const response = await fetch(`${metaApi}/${pageTitle}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
        "Cache-Control": "no-store",
      },
    });
    const data = await response.json(); // Wait for the data to resolve
    console.log(":MetaData", data.data);
    return data.data; // Return the actual meta tags data
  } catch (error) {
    console.error("Error fetching meta tags:", error);
    return null; // Handle errors and return null if something goes wrong
  }
};
