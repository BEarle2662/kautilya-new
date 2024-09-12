import { Tabs, Tab, TabsHeader, TabsBody, TabPanel } from "@material-tailwind/react";

const DynamicTabs = ({ tabData }) => {
  return (
    <Tabs id="dynamic-tabs" value={tabData?.length > 0 ? tabData[0].value : ""}>
    <TabsHeader>
      {tabData?.length > 0 ? (
        tabData.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))
      ) : (
        <p>No tabs available</p>  
      )}
    </TabsHeader>
    <TabsBody
      animate={{
        initial: { y: 250 },
        mount: { y: 0 },
        unmount: { y: 250 },
      }}
    >
      {tabData?.length > 0 ? (
        tabData.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))
      ) : (
        <TabPanel>No content available</TabPanel>  
      )}
    </TabsBody>
  </Tabs>
  
  );
};

export default DynamicTabs;
