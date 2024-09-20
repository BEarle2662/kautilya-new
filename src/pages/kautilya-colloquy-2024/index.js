import CategoryHeading from "@/components/common/categoryHeading";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import Image from "next/image";
import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";

const kautilyaColloquyData = [
  {
    panelDiscussion: [
      {
        id: 1,
        title: "Digital Governance",
        desc: `India, with its vision for an inclusive and prosperous future, strongly emphasizes digital governance. This policy vision aims to enhance government services through "Digital Connectivity" and "Data-Led Governance," which seek to bridge the digital divide and foster inclusivity. By leveraging digital technologies and promoting data-driven decision-making, the vision strives to create a transparent and accountable governance framework, ensuring equitable access to opportunities and empowering every citizen to thrive in the digital age.`,
        img: "../../../assets/img/colluquy/kc-colloquy-1.jpeg",
        contentOrder: true,
      },
      {
        id: 2,
        title: "Climate Change & ESG",
        desc: `The Climate Change and ESG panel will delve into key themes shaping our sustainable future, focusing on balancing economic growth and environmental responsibility. It will explore the evolving expectations around ESG (Environmental, Social, and Governance) practices and their impact on businesses and societies. The discussion will also address the complex relationship between climate action, ESG initiatives, and social equity, focusing on ensuring a just transition for all. Additionally, the panel will examine the crucial role of international trade in combating climate change, including the potential impact of carbon tariffs and other policy mechanisms that promote sustainable practices.`,
        img: "../../../assets/img/colluquy/kc-colloquy-2.jpeg",
        contentOrder: false,
      },
      {
        id: 3,
        title: "Navigating the Future of Finance",
        desc: `The panel will address the interconnected challenges and opportunities within India’s climate finance landscape. It will examine 
                 the global and domestic barriers that hinder climate finance, including insufficient international funding and institutional obstacles like risk assessment, credit allocation, and regulatory constraints. The discussion will focus on aligning global financial flows with the needs of developing economies while exploring how Indian financial institutions can better support sustainable initiatives. Additionally, the panel will assess the effectiveness of key government policies, such as FAME and PLI schemes, and propose ways to enhance their impact on achieving India’s climate goals. Together, these insights aim to create a roadmap 
                 for overcoming funding gaps and improving policy efficacy, ensuring a balanced approach to economic growth and environmental sustainability.`,
        img: "../../../assets/img/colluquy/kc-colloquy-3.jpeg",
        contentOrder: true,
      },
      {
        id: 4,
        title: "Women In Public Policy",
        desc: `The panel on "Women in Policy" will delve into the complex relationship between policies and gender equality.
           Discussions will explore how policies can inadvertently perpetuate gender inequalities and, conversely,
            how they can be strategically crafted to challenge these biases.
            The panel will also examine the obstacles encountered in designing and implementing gender-sensitive policies and question whether
            the presence of women in policy making roles influences the gendered lens through which policies are formulated. Additionally,
             the panel will investigate the barriers hindering women's ascension to leadership positions
         within policy spheres and the types of support and mentorship that can facilitate their progress`,
        img: "../../../assets/img/colluquy/kc-colloquy-4.jpeg",
        contentOrder: false,
      },
    ],
  },
  {
    Research_Paper_Abstract_Submission_Guidelines: [
      "Abstracts should be submitted in English and should be at most 500 words.",
      "Font size should be 12-point Times New Roman and 1.5 Spacing.",
      "The abstract should clearly state the research objectives, methodology, key findings, and implications.",
      "Authors must adhere to the APA style when formatting the abstract.",
      "Submissions must be original work and not under consideration for publication elsewhere.",
      "Please note that plagiarism and the submission of AI-generated content will not be encouraged for research paper abstract submissions. We value originality and authentic contributions to our discourse.",
      "Themes: Digital Governance, Climate Change & ESG (Environmental, Social, and Governance), Women in Public Policy, and Navigating the Future of Finance.",
      "The abstract submission should mention the theme under which the submission is being made.",
      "Last Date for Abstract Submission: 15th July.",
      "The shortlisted abstract submissions will be notified and given 20 days to submit their full paper.",
      "Conference Registration Charges: Rs 450 for selected abstracts.",
      "The registered shortlisted paper presenters will receive a conference kit, lunch, and high tea coupons.",
      "The jury will award certificates for the best paper presentations, categorised by theme, and all the paper presenters will receive digital presentation certificates.",
    ],
  },
  {
    Organising_Committee: [
      "Aradhana Pandian – (Core Committee, MPP Cohort of 2023-25)",
      "Yvonna Tia Steele – (Core Committee, MPP Cohort of 2023-25)",
      "Lakshmanan S – (Head of Content team, MPP Cohort of 2023-25)",
      "Aarini Mishra – (Head of Marketing team, MPP Cohort of 2023-25)",
      "Subhash Gottumukkala – (Head of Operations and Logistics, MPP Cohort of 2023-25)",
      "Vivek Kalhan Reshi – (Head of Finance team, MPP Cohort of 2023-25)",
      "Oaishik Bhattacharya – (Head of Paper Presentations team, MPP Cohort of 2023-25)",
    ],
  },
];

const TextImgContent = ({ content }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12  gap-4">
        <div className="col-span-12 md:col-span-8">
          <p className="text-base">{content.desc}</p>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Image
            src={content.img}
            alt="kc-colloquy-img"
            className="w-full h-full"
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  );
};

const ImgTextContent = ({ content }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12  gap-4">
        <div className="col-span-12 md:col-span-4">
          <Image
            src={content.img}
            alt="kc-colloquy-img"
            className="w-full h-full"
            width={0}
            height={0}
          />
        </div>
        <div className="col-span-12 md:col-span-8">
          <p className="text-base">{content.desc}</p>
        </div>
      </div>
    </div>
  );
};

const colloquyEvent = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleScroll = (tab) => {
    document.getElementById(tab).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MainLayout>
      <div className="bg-[#95131d] h-[20vh] pt-10 py-20 md:pt-20 md:py-40">
        <h1 className="text-white text-center text-2xl md:text-4xl font-semibold">
          Kautilya Colloquy
        </h1>
        <p className="text-2xl font-medium text-white text-center mt-3">
          Inclusive Policies for India
        </p>
      </div>

      <div className="flex justify-center  bg-black py-3">
        <ul className="list-none flex  flex-row text-base justify-start w-3/4">
          <li
            className={`kc-colloquy-ul-li ${
              activeTab === "about" ? "active" : ""
            }`}
            onClick={() => handleScroll("about")}
            onMouseEnter={() => handleTabClick("about")}
            onMouseLeave={() => handleTabClick("about")}
          >
            About
          </li>
          <li
            className={`kc-colloquy-ul-li ${
              activeTab === "panel-discussion" ? "active" : ""
            }`}
            onClick={() => handleScroll("panel-discussion")}
            onMouseEnter={() => handleTabClick("panel-discussion")}
            onMouseLeave={() => handleTabClick("panel-discussion")}
          >
            Panel discussion
          </li>
          <li
            className={`kc-colloquy-ul-li ${
              activeTab === "research-paper-submission" ? "active" : ""
            }`}
            onClick={() => handleScroll("research-paper-submission")}
            onMouseEnter={() => handleTabClick("research-paper-submission")}
            onMouseLeave={() => handleTabClick("research-paper-submission")}
          >
            Research Paper Submission
          </li>
        </ul>
      </div>

      <div id="about" className="kc-section-container">
        <div className="kc-section-content-container">
          <h2 className="section-headings">About</h2>
          <p>
            The Kautilya School of Public Policy at GITAM University, Hyderabad,
            is proud to announce the second annual Kautilya Colloquy, a
            student-led initiative, scheduled for September 21st, 2024. The
            Colloquy will feature research presentations and panel discussions
            centred around four subthemes: Digital Governance, Climate Change &
            ESG, Women in Public Policy, and Navigating the Future of Finance.
            During the research paper presentations, researchers and
            practitioners will share insights, addressing key policy challenges
            and proposing inclusive policy solutions. The panel discussions on
            these four subthemes will host experts, including renowned
            academicians, senior government officials, industry stalwarts, and
            policy practitioners. These panels will offer diverse perspectives
            and explore pathways for inclusive policies in India across digital
            governance, climate change, women in public policy, and the future
            of finance.
          </p>
        </div>
      </div>

      <div
        id="panel-discussion"
        className="kc-section-container panel-container"
      >
        <div className="kc-section-content-container panel-section-container">
          <h2 className="section-headings">Panel Discussion</h2>
          {kautilyaColloquyData[0].panelDiscussion.map((each) => {
            return (
              <React.Fragment key={each.id}>
                <div className="panel-discussion-title-container">
                  <GoChevronRight className="pointer-icon" />
                  <h3 className="panel-discussion-title">{each.title}</h3>
                </div>
                {each.contentOrder ? (
                  <TextImgContent content={each} />
                ) : (
                  <ImgTextContent content={each} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div id="research-paper-submission" className="kc-section-container">
        <div className="kc-section-content-container">
          <h2 className="section-headings">
            Research Paper Submission Process
          </h2>
          <p>
            We invite researchers to submit abstracts for presentations. We
            welcome Advanced Research (projects with results and conclusions
            ready for discussion) and Research in Progress (ongoing projects
            with preliminary findings or where results are still being
            developed). Please include the following information with your
            abstract: names, designations (job titles), affiliations
            (institutions or organisations), email addresses, and contact phone
            numbers for all authors{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdrGhLbylkseTgP58tAFHDDrpAxe_Zika2v1PTDcDgwppNlLg/viewform"
              className="anchor"
            >
              {" "}
              Click here for Abstract submission{" "}
            </a>
            . Kindly review the abstract submission guidelines before submitting
            the abstract.
          </p>

          <div className="panel-discussion-title-container">
            <GoChevronRight className="pointer-icon" />
            <h3 className="panel-discussion-title">
              Research Paper Abstract Submission Guidelines:
            </h3>
          </div>

          <ul className="kc-colloquy-ul-research">
            {kautilyaColloquyData[1].Research_Paper_Abstract_Submission_Guidelines.map(
              (each, index) => (
                <li key={index} className="kc-colloquy-ul-li-research">
                  {each}
                </li>
              )
            )}
            <li className="kc-colloquy-ul-li-research">
              If you have any queries regarding the research paper presentation,
              write to us at{" "}
              <a
                href="mailto:paper_kspp2024@kautilya.org.in"
                className="anchor-mail"
              >
                paper_kspp2024@kautilya.org.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="kc-section-container panel-container">
        <div className="kc-section-content-container panel-section-container">
          <h2 className="section-headings">
            Become a Kautilya Colloquy Delegate
          </h2>
          <p>
            Become a delegate at the Kautilya Colloquy and immerse yourself in a
            day of insightful panel discussions, cutting-edge research
            presentations, and valuable networking opportunities.
            <a
              href="https://gevents.gitam.edu/registration/MTQ2Mg"
              target="_blank"
              className="anchor"
            >
              Click here for Payment
            </a>
          </p>
        </div>
      </div>

      <div className="kc-section-container">
        <div className="kc-section-content-container">
          <h2 className="section-headings">Contact Us</h2>
          <ul>
            <li>
              In case of any queries or suggestions, please write to us at:{" "}
              <a
                href="mailto:queries_kspp2024@kautilya.org.in"
                className="anchor-mail"
              >
                queries_kspp2024@kautilya.org.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="kc-section-container panel-container">
        <div className="kc-section-content-container">
          <h2 className="section-headings">Organising Committee</h2>
          <ul className="kc-colloquy-ul-research">
            {kautilyaColloquyData[2].Organising_Committee.map((each, index) => (
              <li key={index} className="kc-colloquy-ul-li-research">
                {each}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default colloquyEvent;
