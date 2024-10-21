import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";

const Mpp = () => {
  const image =
    "https://kspp.edu.in/images/placements/KSPP-Placement-Report-2023-Final.jpg";
  return (
    <>
      <MainLayout
        title={"MPP Testing for metatags"}
        description={"MPP Testing for metatags"}
        keywords={"MPP, kautilya"}
        img={image}
      >
        <div className="bg-mpp-background bg-cover bg-center min-h-[60vh]"></div>

        <ScreenWidth layoutwidth="true"></ScreenWidth>
      </MainLayout>
    </>
  );
};
export default Mpp;
