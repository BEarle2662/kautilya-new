import Link from "next/link";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import { VscArrowLeft } from "react-icons/vsc";
const Custom404 = () => {
  return (
    <MainLayout>
      <ScreenWidth layoutWidth="true">
        <div className="flex flex-col items-start pl-32 justify-center min-h-screen bg-gray-100 bg-page-notfound bg-no-repeat bg-cover bg-center">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <p className="mt-4 text-xl">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link href="/">
            <div className="mt-6 px-4 py-2 flex items-center justify-evenly bg-primary text-white rounded-none hover:cursor-pointer hover:bg-red-800 transition">
              <span className="p-2 ">
                <VscArrowLeft className="h-6 w-8" />
              </span>
              <span className="p-2 pl-0">Home</span>
            </div>
          </Link>
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};

export default Custom404;
