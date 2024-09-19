import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import Image from "next/image";
import researchBanner from "../../../public/assets/img/research.jpg";

const researchContent = [
  {
    tag: "p",
    content:
      "Like every great institution, the Kautilya School of Public Policy research program’s core elements are to <b>captivate and understand</b> to discover the nearest possible solution to every problem through <b>evidence-based research.</b> We mindfully invest resources with an impact-driven approach to measure the outcome of research initiatives. Kautilya’s doctoral program aims to develop the <b>next generation of scholars</b> who are knowledgeable, problem-solvers, and passionate about purposeful research.",
  },
  {
    tag: "p",
    content: "The school conducts research in the following areas:",
  },
  {
    tag: "ul",
    items: [
      "1. Business & Government.",
      "2. Economics For Policy.",
      "3. Environmental, Social and Governance Issues.",
      "4. Global Affairs.",
      "5. Technology & Society.",
    ],
  },
];

const Research = () => {
  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        <CategoryHeading heading="Research @ Kautilya" />

        <Image
          src={researchBanner}
          width={0}
          height={0}
          className="w-full h-full"
          alt="research-banner"
        />

        {/* Rendering the research content */}
        {researchContent.map((element, index) => {
          if (element.tag === "p") {
            return (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: element.content }}
                className="my-5 text-sm md:text-lg"
              />
            );
          } else if (element.tag === "ul") {
            return (
              <ul key={index} className="mb-0 mt-0 pt-0">
                {element.items.map((item, idx) => (
                  <li key={idx} className="mt-2 text-sm md:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </ScreenWidth>
    </MainLayout>
  );
};

export default Research;
