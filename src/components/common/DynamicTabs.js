import React, { useEffect, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { FaCircleDown } from "react-icons/fa6";
import {
  Tabs,
  Tab,
  TabsHeader,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import CustomSlides from "./CustomSlides";

const DynamicTabs = ({ tabData, phd, page }) => {
  const [mppTabsData, setMppTabsData] = useState([]);

  useEffect(() => {
    if (phd) {
      const filteredTabsData = phd.filter(
        (each) => each.category !== "Batch Profile"
      );
      const batchProfile = phd.filter(
        (each) => each.category === "Batch Profile"
      );
      setMppTabsData([
        ...filteredTabsData,
        { id: 0, category: "Batch Profile", slides: batchProfile },
      ]);
    } else {
      setMppTabsData(tabData);
    }
  }, [phd, tabData]);

  return (
    <>
      {mppTabsData.length > 0 ? (
        <Tabs
          id="custom-animation"
          value={
            mppTabsData[0]?.category === "Academic Associates page" ||
            mppTabsData[0]?.category === "Publications page"
              ? mppTabsData[0]?.name
              : mppTabsData[0]?.category
          }
        >
          <TabsHeader className="flex-col md:flex-row">
            {mppTabsData.map(({ category, id, name, label }) => (
              <Tab
                key={id || label}
                value={
                  category === "Academic Associates page" ||
                  category === "Publications page"
                    ? name
                    : category
                }
                className="lg:text-nowrap text-base md:text-sm font-semibold"
              >
                <div className="flex items-center gap-2">
                  <FaCircleDown className="w-5 h-5 lg:w-3 lg:h-3" />
                  <span>
                    {category === "Academic Associates page" ||
                    category === "Publications page"
                      ? name
                      : label
                      ? label
                      : category}
                  </span>
                </div>
              </Tab>
            ))}
          </TabsHeader>

          <TabsBody
            animate={{
              initial: { y: 0 },
              mount: { y: 0 },
              unmount: { y: 0 },
            }}
          >
            {mppTabsData.map(
              ({ id, description, category, slides, name, label }) => (
                <TabPanel
                  key={id || label}
                  value={
                    category === "Academic Associates page" ||
                    category === "Publications page"
                      ? name
                      : category
                  }
                >
                  {category === "Batch Profile" ? (
                    <CustomSlides
                      sliderdata={slides}
                      page={page}
                      sliderType="MPP Tabs"
                    />
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{ __html: description }}
                      className="tabpanel-inner-tags"
                    />
                  )}
                </TabPanel>
              )
            )}
          </TabsBody>
        </Tabs>
      ) : (
        <p>No data available for tabs</p>
      )}
    </>
  );
};

export default DynamicTabs;
