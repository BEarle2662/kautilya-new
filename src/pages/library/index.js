import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import Image from "next/image";
import React from "react";
import banner from "../../../public/assets/img/library/library.jpg";
import img1 from "../../../public/assets/img/library/GITAM-logo_new_0.jpg";
import img2 from "../../../public/assets/img/library/logo.png";
import img3 from "../../../public/assets/img/library/MOnika-latest-1.jpg";
import { MetaTagsComponent } from "@/components/common/metaTagsComponent";

const Library = ({metaTagsData}) => {
  return (
    <MainLayout
        title={metaTagsData.title}
        description={metaTagsData.description}
        keywords={metaTagsData.keywords}
        img={metaTagsData.meta_image}
    >
      <ScreenWidth layoutwidth="true">
        <CategoryHeading heading="Library" />
        <Image
          src={banner}
          width={0}
          height={0}
          alt="library-banner"
          className="h-full w-full"
        />

        <p className="mt-10 text-sm md:text-base">
          At Kautilya Library, we provide various mechanisms to feed young and
          curious minds with relevant knowledge and new-age skills. The library
          is a melting point for students, faculty, and research communities to
          share knowledge and connect with the vast collections worldwide.
        </p>
        <p className="my-5 text-sm md:text-base">
          The expansive library harbours over 90,000 books and print journals.
          Enjoy interactive learning at Kautilya with a high-end media lab that
          lets you experience real-time reporting from the comfort of the
          campus, IT labs with dedicated computers for every student, and access
          to E-Library and Journals.
        </p>

        <div className="grid  md:grid-cols-3 gap-4">
          <a
            href="https://library.gitam.edu/resources.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={img1}
              width={0}
              height={0}
              alt="library-1"
              className="h-full w-full"
            />
          </a>

          <a
            href="https://digitalrepository.gitam.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={img2}
              width={0}
              height={0}
              alt="library-2"
              className="h-full w-full"
            />
          </a>

          <a
            href="https://library.gitam.edu/research-tools.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={img3}
              width={0}
              height={0}
              alt="library-3"
              className="h-full w-full"
            />
          </a>
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};
export async function getStaticProps() {
  const metaComponentResponse = await MetaTagsComponent({ page: "library" });

  console.log("library Page Meta DAta", metaComponentResponse);
  return {
    props: {metaTagsData: metaComponentResponse },
    // Revalidate at most once every 60 seconds
    revalidate: 60, // In seconds
  };
}
export default Library;
