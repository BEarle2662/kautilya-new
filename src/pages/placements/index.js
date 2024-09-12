import MainLayout from "@/components/MainContainer/MainLayout";
import React from "react";

const Placements = () => {
  const image =
    "https://kspp.edu.in/images/placements/KSPP-Placement-Report-2023-Final.jpg";
  return (
    <>
      <MainLayout
        title={"Placements page Testing for metatags"}
        description={"Placements page Testing for metatags"}
        keywords={"GIMSR, GITAM, Hospital"}
        img={image}
      >
        <div className="mx-auto max-w-screen-2xl">
          <h1 className="text-4xl text-center mt-5 mb-4">Placements</h1>
        </div>
      </MainLayout>
    </>
  );
};

export default Placements;
