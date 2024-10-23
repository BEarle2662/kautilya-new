import { apisBasePath, ksppApisBasePath } from "@/Endpoints/apisBase";
import axios from "axios";

export const MetaTagsComponent = async ({ page }) => {
  // console.log("PAGE", page);
  let pageTitle;
  if (page === "kautilya-next") {
    pageTitle = "kautilya";
  } else {
    pageTitle = page;
  }

  // const metaApi = apisBasePath.metatagsData;
  // console.log("API", `${metaApi}/${pageTitle}`);

  const metaApi = ksppApisBasePath.metadataApi;
  
  console.log(`${metaApi}/${pageTitle}`);
  // try {
  

  //   const response = await axios.get(`${metaApi}/${pageTitle}`, {
      
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "8efgh5gyujk",
  //     },
  //   });
  //   if(response.status == 404){
  //     console.log('response:' , response.status);
  //   }
    
   
  //   const data = response.data; // Axios returns the data directly in response.data
  //   console.log(":MetaData", data.data);
  //   return data.data; // Return the actual meta tags data
  // } catch (error) {
  //   console.error("Error fetching meta tags:", error);
  //   return null; // Handle errors and return null if something goes wrong
  // }


  try {
    const response = await axios.get(`${metaApi}/${pageTitle}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "8efgh5gyujk",
      },
    });
  
    // Handle the success case
    console.log('response:', response.data);
    const data = response.data; 
    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // Handle the 404 case by executing the fallback URL request
      console.log('Error 404: Resource not found. Fetching default home URL data...');
      
      try {
        const fallbackResponse = await axios.get(`${metaApi}/home`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "8efgh5gyujk",
          },
        });
        // Handle the fallback response
        console.log('Fallback response:', fallbackResponse.data);
        
      } catch (fallbackError) {
        // Handle errors for the fallback request
        console.error('Error fetching default home URL:', fallbackError.message);
      }
      
    } else {
      // Handle other errors or re-throw to stop execution
      console.error('Error:', error.message);
      throw error; // Re-throw if you want to stop execution for other errors
    }
  }
  
};
