// components/PaperPresentation.js or pages/events/paperpresentation.js

import React, { useState } from "react";
import Image from "next/image";
import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
// import Jury from "../../../components/Jury"; // Adjust the path as needed

const PaperPresentation = () => {
  const [facultyData, setFacultyData] = useState([
    {
      id: 1,
      imgURL: "/images/events/paperpresentation/jury/1.png",
      name: "Dr. Anant Maringanti",
      description: `<p>Dr. Anant Maringanti is an urban expert, writer, and teacher based in Hyderabad. He heads the Hyderabad Urban Lab Foundation (HUL), a think tank committed to developing urban solutions sensitive to local contexts. Since 2012, HUL has produced research on a number of policy-relevant areas and gained an international reputation as a thought leader in urban development in the global south. Their work spans urban infrastructure, housing, and community development. HUL is an advocate of small public infrastructures in rapidly growing cities like Hyderabad. In this regard, HUL entered into a MOU with the Government of Telangana to run the Low Cost Action Lab. The aim is to position Hyderabad and Telangana in international urban research and action.</p>`,
    },
    {
      id: 2,
      imgURL: "/images/events/paperpresentation/jury/2.png",
      name: "Dr. Amir Ullah Khan",
      description: `
        <p class="text-justify">Amir Ullah Khan is a former civil servant and now works as an advisor to the Sahayata Trust, Research Director at the Centre for Development Policy and Practice, and Adjunct Professor of Economics at the Tata Institute of Social Science, MCR Human Resource Development Institute of the Government of Telangana, and the Manipal Institute of Technology. He is visiting faculty at ISB and at NALSAR.</p>
        <p class="text-justify">Amir has been Director at the Bill and Melinda Gates Foundation, the India Development Foundation, and Encyclopedia Britannica. Amir studied at the Engineering College at Osmania University, the Institute of Rural Management at Anand, and Jamia Millia Central University where he got his PhD for his work on India’s IPR policy. Amir is a columnist with the LiveMint and Deccan Herald.</p>
      `,
    },
    {
      id: 3,
      imgURL: "/images/events/paperpresentation/jury/3.png",
      name: "Ms. Sharmila Chavaly",
      description: `
        <p class="text-justify">Having just completed her tenure as Advisor, National Institute of Smart Government (NISG), Sharmila Chavaly is currently Advisor, Climate Policy Initiative (India chapter). In over three and a half decades as a civil servant, she has worked in various capacities in the Ministries of Railways and Finance in the Government of India, including as Joint Secretary (Infrastructure) at the Department of Economic Affairs, where she was in charge of setting up InvITs, revamped REITs & Municipal Bonds, Infrastructure Credit Rating Scale, the Credit Enhancement Fund, etc. She was Member Secretary of the Committee for Revitalising PPPs.</p>
        <p class="text-justify">She has served as Director on the Boards of the OVL, IIFCL, and IRFC and as India’s representative on the G-20’s Infrastructure Working Group.</p>
        <p class="text-justify">Her areas of expertise include Infrastructure Finance, PPPs, Sustainable Finance, Foreign Exchange management, and multilateral negotiations.</p>
      `,
    },
    {
      id: 4,
      imgURL: "/images/events/paperpresentation/jury/4.png",
      name: "Ms. Srividya Reddy",
      description: `
        <p class="text-justify">Ms. Srividya Reddy Gunampalli, Vice-Chairperson of G Pulla Reddy Charities Trust, holds a Graduate degree in Engineering from JNTU, an MBA from ICFAI, one of the pioneers in management education, and holds a leadership certification from the University of Pennsylvania. She leads a multi-faceted life as an educationist, entrepreneur, and community volunteer while being actively associated with the G. Pulla Reddy Charities Trust for over two decades now.</p>
        <p class="text-justify">Ms. Srividya Reddy proactively involves herself with the constituent educational institutions under the GPR Charities Trust in formulating and managing the overall strategies and operations. The Trust currently has 5 technical institutions offering higher educational studies and 5 high schools under its wing. Her contribution to the education sector extends to her participation in several technical education policy-making committees organized by the Ministry of Human Resource Development, Government of India.</p>
      `,
    },
  ]);

  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        {/* Main Content */}
        <h3 className="text-start text-3xl mt-4 mb-4 text-black font-medium">
          EVENT 1: Paper Presentation
        </h3>
        <div className="container mx-auto mt-5 px-4 headingWithBG">
          {/* Topic Section */}

          <h4 className="text-base md:text-2xl font-bold bg-gray-100 p-2 text-left">
            TOPIC: Equity in Times of Growth- A Pathway for India
          </h4>

          <p className="mt-2 md:mt-4   text-justify">
            The Kautilya School of Public Policy (KSPP) proudly announces the
            inaugural edition of the national-level research paper presentation
            competition, exclusively tailored for post-graduate students. The
            purpose of this event is to explore the critical intersection
            between economic development and the imperative of ensuring
            equitable outcomes for all. It provides an opportunity for curious
            individuals from institutions across the nation to employ a
            research-centered approach in exploring and assessing policy issues
            situated at the convergence of business, government, and society.
            With a special focus on the significance of equity in the times of
            growth, participants will examine how policy advancement can be
            leveraged to ensure fair and inclusive outcomes for all segments of
            society.
          </p>
          <p className="mt-2 md:mt-4   text-justify">
            KSPP is excited to offer a platform for budding researchers to
            showcase their research ideas and findings to a diverse team of
            internal experts as well as visiting scholars committed to
            interdisciplinary public policy research, teaching, and engagement
            addressing topics such as public administration, law, gender,
            environment, education, social engineering, migration, human rights,
            media, information society, conflict resolution, transitional
            justice, business, and good governance.
          </p>
          <p className="mt-2 md:mt-4   text-justify">
            The entries are invited under the broad topic of ‘Equity in Times of
            Growth- A Pathway for India,’ further aligned along the following
            sub-themes:
          </p>

          <ol className="mt-2 ml-6 list-decimal text-sm md:text-base">
            <li>Government and Business</li>
            <li>Human Rights, Law, and Democracy</li>
            <li>Economics for Development</li>
            <li>Governance and Society</li>
            <li>International Relations</li>
          </ol>
        </div>

        {/* Jury Section */}
        <div className="container mx-auto mt-20 px-4">
          <div className="mb-8">
            <h4 className="leading-[45px] font-medium text-white text-[24px] px-5 bg-gradient-to-r from-[#b11016] to-[#f5f9fb] mb-[27px]">
              Jury
            </h4>
          </div>

          {/* <Jury faculty={facultyData} popup={true} /> */}
        </div>

        {/* Prizes and Awards */}
        <div className="container mx-auto mt-20 mb-5 px-4">
          <div className="mb-8">
            <h4 className="leading-[45px] font-medium text-white text-[24px] px-5 bg-gradient-to-r from-[#b11016] to-[#f5f9fb] mb-[27px]">
              Prizes and Awards:
            </h4>
          </div>

          <div className="max-w-xl mx-auto">
            <table className="w-full table-auto border-collapse mx-auto border border-gray-300">
              <thead className="bg-primary w-full">
                <tr>
                  <th className="border bg-primary px-4 py-2">Award Name</th>
                  <th className="border bg-primary px-4 py-2">Award Amount</th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr>
                  <td className="border px-4 py-2">1st Prize</td>
                  <td className="border px-4 py-2">Rs 30,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2nd Prize</td>
                  <td className="border px-4 py-2">Rs 20,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* General Guidelines */}
        <div className="container mx-auto mt-20 px-4">
          <div className="mb-8">
            <h4 className="leading-[45px] font-medium text-white text-[24px] px-5 bg-gradient-to-r from-[#b11016] to-[#f5f9fb] mb-[27px]">
              General Guidelines:
            </h4>
          </div>
          <ol className="list-decimal ml-6 text-[18px] leading-[32px]">
            <li>
              The event welcomes all undergrad and postgrad students and extends
              a special invitation to working professionals as well.
            </li>
            <li>Each paper can be co-authored by a maximum of 3 authors.</li>
            <li>
              Each team must pay a non-refundable registration fee at the time
              of registration and share the payment receipt at{" "}
              <a
                href="mailto:kc@kautilya.org.in"
                className="text-blue-500 underline"
              >
                kc@kautilya.org.in
              </a>
              . The registration will be confirmed upon receiving the evidence
              of payment.
            </li>
            <li>
              Entrants must be available for the final in-person presentation
              scheduled on 23rd September 2023 at Kautilya School of Public
              Policy, Hyderabad.
            </li>
            <li>
              All papers must be relevant to at least one of the five themes
              indicated above.
            </li>
            <li>
              Every paper submitted will undergo a blind review process,
              ensuring that they are evaluated based on criteria such as
              quality, originality, and relevance.
            </li>
            <li>
              Any participants found engaging in unethical behavior, including
              but not limited to plagiarism or academic dishonesty, will face
              disqualification from the competition.
            </li>
            <li>
              All electronic submissions must be submitted online by the
              applicable deadline. Late entries will not be accepted.
            </li>
            <li>
              Any submission that does not follow the formatting or submission
              requirements will not be considered for acceptance in the
              competition.
            </li>
            <li>
              All pre-conference submissions must be submitted online at{" "}
              <a
                href="mailto:kc@kautilya.org.in"
                className="text-blue-500 underline"
              >
                kc@kautilya.org.in
              </a>
              . Late entries will not be accepted.
            </li>
            <li>All participants will be provided with e–certificates.</li>
            <li>
              The top two entries in the competition shall be awarded cash
              prizes.
            </li>
          </ol>
        </div>

        {/* Important Dates */}
        <div className="container mx-auto mt-5 px-4">
          <div className="mb-8">
            <h4 className="leading-[45px] font-medium text-white text-[24px] px-5 bg-gradient-to-r from-[#b11016] to-[#f5f9fb] mb-[27px]">
              Important Dates:
            </h4>
          </div>
          <table className="min-w-full table-auto border-collapse mx-auto w-auto border border-gray-300">
            <tbody>
              <tr>
                <th className="border bg-primary text-left px-4 py-2">
                  Registration Deadline
                </th>
                <td className="border  text-left  px-4 py-2">
                  31st August 2023
                </td>
              </tr>
              <tr>
                <th className="border bg-primary text-left px-4 py-2">
                  Abstract Submission Deadline
                </th>
                <td className="border  text-left px-4 py-2">
                  5th September 2023
                </td>
              </tr>
              <tr>
                <th className="border bg-primary text-left px-4 py-2">
                  Shortlisted Candidates Shall be notified by
                </th>
                <td className="border  text-left px-4 py-2">
                  10th September 2023
                </td>
              </tr>
              <tr>
                <th className="border bg-primary  text-left px-4 py-2">
                  Final Paper Submission
                </th>
                <td className="border  text-left px-4 py-2">
                  17th September 2023
                </td>
              </tr>
              <tr>
                <th className="border bg-primary text-left px-4 py-2">
                  Final PPT Submission
                </th>
                <td className="border  text-left px-4 py-2">
                  20th September 2023
                </td>
              </tr>
              <tr>
                <th className="border bg-primary text-left px-4 py-2">
                  Final Paper Presentation
                </th>
                <td className="border  text-left px-4 py-2">
                  23rd September 2023
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Submission Guidelines */}
        <div className="container mx-auto mt-5 px-4">
          <div className="mb-8">
            <h4 className="leading-[45px] font-medium text-white text-[24px] px-5 bg-gradient-to-r from-[#b11016] to-[#f5f9fb] mb-[27px]">
              Submission Guidelines:
            </h4>
          </div>
          <div>
            <h5 className="font-bold mt-3 mb-3">For Abstract:</h5>
            <ul className="list-disc ml-6 text-[18px] leading-[32px]">
              <li>The word limit for the abstract is 450-500 words.</li>
              <li>
                The abstract should report the objective of the study, the
                research problem, the method & methodology, along with the
                outcomes obtained or expected from the study.
              </li>
              <li>
                The abstract is to be submitted by 5th September 2023, 11:59 PM.
                The organizing committee will respond to the abstract selected
                by 10th September 2023.
              </li>
              <li>
                If your abstract is approved, you must submit your final paper
                by 17th September 2023, 11:59 PM, using the same ID provided
                during registration.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mt-3 mb-3">For Paper:</h5>
            <ul className="list-disc ml-6 text-[18px] leading-[32px]">
              <li>
                Co-authorship of the papers is allowed, and the maximum number
                of co-authors permitted is 3.
              </li>
              <li>Only theme-based papers are accepted.</li>
              <li>
                The paper should adhere to a word limit of 4500-5000 words
                (excluding charts, tables, pictures, and bibliography).
              </li>
              <li>
                Ensure plagiarism, if any, is not more than 10% (excluding
                bibliography). It is the duty of the author(s) to ensure
                originality before the submission. Papers that exceed the 10%
                mandate shall be subject to disqualification.
              </li>
              <li>
                The final paper is to be submitted by 17th September 2023, 11:59
                PM.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mt-3 mb-3">
              The text must meet the following guidelines:
            </h5>
            <ul className="list-disc ml-6 text-[18px] leading-[32px]">
              <li>Font style: Times New Roman</li>
              <li>Font size: 12 pt, double spaced</li>
              <li>
                Citation style: APA 7th edition (any images, charts, tables, or
                figures from external sources must be cited)
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mt-3 mb-3">
              The paper should follow the subsequent structure:
            </h5>
            <ol className="list-decimal ml-6 text-[18px] leading-[32px]">
              <li>Abstract</li>
              <li>Introduction</li>
              <li>Literature review</li>
              <li>Problem statement</li>
              <li>Objective &amp; scope</li>
              <li>Methodology</li>
              <li>Results &amp; analysis</li>
              <li>Conclusion</li>
              <li>References</li>
            </ol>
            <p className="mt-5 font-bold">
              Note: The provided outline serves as a flexible framework rather
              than a rigid structure. It offers general guidelines to help
              direct your research towards the main topics and questions to be
              addressed while allowing for adaptability and exploration.
            </p>
          </div>
          <div>
            <h5 className="font-bold mt-3 mb-3">Presentation Guidelines:</h5>
            <ul className="list-disc ml-6 text-[18px] leading-[32px]">
              <li>
                Please ensure that the total number of slides does not surpass
                10.
              </li>
              <li>
                The allocated time for the presentation is 20 minutes, followed
                by a 10-minute question and answer session with the
                jury/audience.
              </li>
              <li>
                The evaluation criteria encompass the quality of content, oral
                presentation, and active engagement in open discussions with the
                jury.
              </li>
              <li>
                The presentation will be made and presented using PowerPoint.
              </li>
              <li>
                In the case of co-authorship, all of the participants must
                present.
              </li>
              <li>
                Kindly submit your presentation by 11:59 PM on September 20,
                2023. Failure to do so will result in the cancellation of your
                participation.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mt-3 mb-3">Emailing Guidelines:</h5>
            <p>
              Email your paper submissions/PPT submission to{" "}
              <a
                href="mailto:kc@kautilya.org.in"
                className="text-blue-500 underline"
              >
                kc@kautilya.org.in
              </a>{" "}
              in adherence to the deadline indicated above. When emailing,
              please make sure to include the following details:
            </p>
            <ol className="list-decimal ml-6 text-[18px] leading-[32px]">
              <li>Name of the Author/s:</li>
              <li>Email Id:</li>
              <li>
                Contact number (the one you use for WhatsApp, preferably):
              </li>
              <li>University/College:</li>
              <li>Year of Education:</li>
              <li>Topic:</li>
            </ol>
          </div>
          <div>
            <p>
              We are excitedly anticipating your insightful abstracts and
              enthusiastic participation. If you have any questions or require
              further information about the competition, please do not hesitate
              to reach out to us at{" "}
              <a
                href="mailto:kc@kautilya.org.in"
                className="text-blue-500 underline"
              >
                kc@kautilya.org.in
              </a>
            </p>
          </div>
        </div>
      </ScreenWidth>
    </MainLayout>
  );
};

export default PaperPresentation;
