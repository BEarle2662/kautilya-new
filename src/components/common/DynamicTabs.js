import React from "react";
import { FaCircleDown } from "react-icons/fa6";
import {
  Tabs,
  Tab,
  TabsHeader,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";

const DynamicTabs = ({ tabData = [] }) => {
  // console.log("DynamicTabs received data:", tabData);

  if (!Array.isArray(tabData)) {
    console.error("Expected tabData to be an array but received:", tabData);
    tabData = [];
  }

  return (
    <Tabs
      id="dynamic-tabs"
      value={tabData.length > 0 ? tabData[0].id : "default"}
    >
      {tabData.length > 0 ? (
        <>
          <TabsHeader>
            {tabData.map(({ category, id }) => (
              <Tab key={id} value={id}>
                <div className="flex items-center gap-2">
                  <FaCircleDown className="w-5 h-5" />
                  {category}
                </div>
              </Tab>
            ))}
          </TabsHeader>

          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {tabData.map(({ id, description }) => (
              <TabPanel key={id} value={id}>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </TabPanel>
            ))}
          </TabsBody>
        </>
      ) : (
        <p>No data available for tabs</p>
      )}
    </Tabs>
  );
};

export default DynamicTabs;
