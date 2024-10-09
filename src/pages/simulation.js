// pages/events/simulation.js

import MainLayout from "@/components/MainContainer/MainLayout";
import ScreenWidth from "@/components/MainContainer/ScreenWidth";
import Image from "next/image";
// import Jury from "../../../components/Jury"; // Adjust the path as needed

const Simulation = () => {
  const facultyData = [
    {
      id: 1,
      imgURL: "/images/events/paperpresentation/simulation/1.png",
      name: "Amb. Sanjay Bhattacharya",
      description: `
        <p>
          Amb Sanjay Bhattacharya has specialized in diplomacy for an era of globalization and transformative change, boundary and security issues, economic engagement, and negotiations. He led the government’s policy-making on Act East and Arab affairs at different stages in his career. He was BRICS Sherpa during India’s Presidency. He was Ambassador to Switzerland and Liechtenstein till December 2022. He has also served in China, Japan, and Belgium, where he focussed on EU relations. He was Ambassador to Turkey between 2018-20 and Ambassador to Egypt and the Arab League during 2015-18. He studied Economics at St Stephen’s College (1980-83) and Delhi School of Economics (1983-85). He has also learned Chinese at the Chinese University of Hong Kong and participated in Strategy and Leadership program at Cambridge Judge Business School. He lectured extensively at universities, business schools, and think tanks in India and abroad on the India story, public policy and governance, and foreign policy issues.
        </p>
      `,
    },
    {
      id: 2,
      imgURL: "/images/events/paperpresentation/simulation/2.png",
      name: "Lt. General Sanjiv Langer(Retd)",
      description: `
        <p><strong>Lt. General Sanjiv Langer(Retd)</strong>, PVSM, AVSM, is a distinguished military veteran with a service span of 39 years, where he held several operational and logistic appointments. During his work, he dealt with strategic and operational issues with the Ministry of Defence, Ministry of Home Affairs, and Ministry of External Affairs. Sanjiv Langer was the first Indian to be selected to serve at the UN Headquarters as an International Civil Servant under the Department of Peacekeeping for Africa region. He also commanded an Operational Infantry Division and Strike Corps during his tenure. Later, he was appointed as Director General, Defence Intelligence and Deputy Chief Integrated Defence Staff and also as a Member of the Armed Forces Tribunal.</p>
      `,
    },
    {
      id: 3,
      imgURL: "/images/events/paperpresentation/simulation/3.png",
      name: "Amb. DB Venkatesh Varma",
      description: `
        <p><strong>Amb. DB Venkatesh Varma</strong> holds a profound understanding of India’s Security and Defence policies, including its nuclear, missile, and space programs. He has been India’s Ambassador to the Conference on Disarmament in Geneva, to the Kingdom of Spain, and to the Russian Federation. He has served as Joint Secretary in charge of Disarmament and International Security in the Ministry of External Affairs. His diplomatic tenure also includes him working with the UN First Committee and United Nations Disarmament Commission. He was also a key member of the Indian negotiating team involved in the Civil Nuclear Initiative with the US. Amb Varma was the first recipient of the S.K. Singh Award for Excellence in the Indian Foreign Service in 2011 for his contribution to the negotiations of the Civil Nuclear Initiative. He also served as Joint Secretary in charge of Disarmament and International Security in the Ministry of External Affairs. He was also a member of the UN Group of Government Experts on Missiles and on Disarmament and Nuclear Nonproliferation Education. He holds an M.Phil in International Relations from the Jawaharlal Nehru University, Delhi.</p>
      `,
    },
  ];

  return (
    <MainLayout>
      <ScreenWidth layoutwidth="true">
        {/* Main Content */}
        <div className="container mx-auto mt-5 px-4">
          {/* Event Header */}
          <div className="mb-8">
            <h3 className="text-start mt-4 mb-4 text-2xl font-medium md:font-bold">
              EVENT 2: Simulation by Syed Akbaruddin
            </h3>
          </div>

          {/* Topic Section */}
          <div className="mb-8 headingWithBG">
            <h4>
              TOPIC: Ecological Degradation: A Threat to International Peace and
              Security
            </h4>
            <p>
              Dying ecosystems, increasing threats to global biodiversity,
              pollution-choked cities, the growing discovery of significant
              microscopic plastic particles in many humans, and exploitation of
              resources outstripping capacities for regeneration indicate that
              the earth is an increasingly ailing planet. It is time to
              collaborate and act collectively.
            </p>
            <p>
              Since the UN Security Council is the body charged with addressing
              issues of international peace and security, Switzerland, a
              first-time non-permanent member, proposes to raise the issue at
              the informal consultations of the whole of the Security Council in
              September.
            </p>
            <p>Usually, such consultations lead to the following outcomes:</p>
          </div>

          {/* Council Outcomes Section */}
          <div className="mb-8 headingWithBG">
            <h4 className="">COUNCIL OUTCOMES</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse mx-auto w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="border bg-primary px-4 py-2">Output</th>
                    <th className="border bg-primary px-4 py-2">Document</th>
                    <th className="border bg-primary px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Resolution
                    </td>
                    <td className="border px-4 py-2">S/RES/(number)</td>
                    <td className="border px-4 py-2">
                      Decision- An affirmative vote of nine members including
                      the concurrent votes of the P5 in a public meeting.
                      <br />
                      Adoption in a public meeting. (FORMAL)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Statement by the President
                    </td>
                    <td className="border px-4 py-2">S/PRST/(year)/(number)</td>
                    <td className="border px-4 py-2">
                      Decision- Consensus in informal consultations or by “no
                      objection” procedure. The president of the Security
                      Council reads out the statement in a public meeting
                      (FORMAL)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Public Meeting
                    </td>
                    <td className="border px-4 py-2">No document</td>
                    <td className="border px-4 py-2">
                      No outcome in public meeting. However, minutes are part of
                      official record and publicly available. (FORMAL)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Press Statement
                    </td>
                    <td className="border px-4 py-2">SC/(number)</td>
                    <td className="border px-4 py-2">
                      Consensus in informal consultations or by “no objection”
                      procedure.
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Elements to the Press
                    </td>
                    <td className="border px-4 py-2">No document</td>
                    <td className="border px-4 py-2">
                      Agreement by Council members obtained ahead of the
                      president speaking to the press.
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      No Outcome
                    </td>
                    <td className="border px-4 py-2">No document</td>
                    <td className="border px-4 py-2">No Outcome of any sort</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 ">
              The goal of those supporting the proposal is to seek a Resolution.
              The objective of those opposed to the move will be to not have any
              outcome. Mentors will be provided to advise participants about the
              documentation to read and prepare in advance. On the day of the
              MUN, the process as pursued by the Security Council will be
              followed as closely as possible. The discussions will be both
              procedural and substantive. There will be intervals for small
              group discussions and for seeking instructions taking into account
              the evolving situation. The entire exercise is scheduled over a
              3-hour time frame.
            </p>
          </div>
        </div>

        {/* Jury Section */}
        <div className="container mx-auto mt-5 px-4">
          <div className="mb-8 headingWithBG">
            <h4 className="">Mentors</h4>
            {/* <Jury faculty={facultyData} popup={true} /> */}
          </div>
        </div>

        {/* Countries Assigned to Mentors */}
        <div className="container mx-auto mt-5 px-4">
          <div className="mb-8 headingWithBG">
            <h4 className="">
              The Countries assigned to the mentors are listed below:
            </h4>
          </div>
          <div className="overflow-x-auto mx-auto max-w-xl">
            <table className="w-full table-auto border-collapse  border border-gray-300">
              <thead>
                <tr>
                  <th className="border px-4 bg-primary py-2">Mentors</th>
                  <th className="border px-4 bg-primary py-2">Countries</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Amb. Sanjay Bhattacharya</td>
                  <td className="border px-4 py-2">
                    China, France, Japan, Switzerland, United Arab Emirates
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Lt. Gen. Sanjiv Langer</td>
                  <td className="border px-4 py-2">
                    Ecuador, Gabon, Ghana, Mozambique, United Kingdoms
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Amb. DB Venkatesh Varma</td>
                  <td className="border px-4 py-2">
                    Albania, Brazil, Malta, Russia, United States of America
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Prizes and Awards */}
        <div className="container mx-auto mt-5 px-4">
          <div className="mb-8 headingWithBG">
            <h4 className="">Prizes and Awards:</h4>
          </div>
          <div className="overflow-x-auto mx-auto max-w-xl">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border bg-primary px-4 py-2">Award Name</th>
                  <th className="border bg-primary px-4 py-2">Award Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-semibold">
                    Best Team Award
                  </td>
                  <td className="border px-4 py-2 font-semibold">Rs 25,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">
                    First Runner Up
                  </td>
                  <td className="border px-4 py-2 font-semibold">Rs 10,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Dates */}
        <div className="container mx-auto mt-5 px-4">
          <div className="mb-8 headingWithBG">
            <h4 className="">Important Dates:</h4>
          </div>
          <div className="overflow-x-auto mx-auto max-w-xl">
            <table className="w-full table-auto border-collapse  border border-gray-300">
              <tbody>
                <tr className="">
                  <th className="border px-4 py-2 text-left bg-primary">
                    Registration Deadline
                  </th>
                  <td className="border px-4 py-2 text-left">
                    31st August 2023
                  </td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left bg-primary">
                    Shortlisted Candidates Shall be notified by:
                  </th>
                  <td className="border px-4 py-2 text-left">
                    5th September 2023
                  </td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left bg-primary">
                    Online Briefing Session
                    <ul className="list-none mt-2 text-base md:text-lg text-left">
                      <li className="guide-txt ">
                        Introduction of the portfolios
                      </li>
                      <li className="guide-txt">Introduction to the mentors</li>
                      <li className="guide-txt">Introduction of the agenda</li>
                      <li className="guide-txt">Q and A</li>
                    </ul>
                  </th>
                  <td className="border px-4 py-2 text-left">
                    1st week of September (exact date would be conveyed through
                    email)
                  </td>
                </tr>
                <tr>
                  <th className="border px-4 py-2 text-left bg-primary">
                    Allocate Simulation Teams and Share Relevant Documents
                  </th>
                  <td className="border px-4 py-2 text-left">
                    2nd week of September
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-left">
            “If you have any questions or require further information about the
            simulation, please do not hesitate to reach out to us at{" "}
            <a
              href="mailto:kc@kautilya.org.in"
              className="text-blue-500 underline"
            >
              kc@kautilya.org.in
            </a>
            “
          </p>
        </div>

        {/* Submission Guidelines */}
        <div className="container mx-auto mt-5 px-4">
          <div className="mb-8">
            <h4 className="headingWithBG">Submission Guidelines:</h4>
          </div>

          {/* For Abstract */}
          <div className="mb-6">
            <h5 className="font-bold mt-3 mb-3">For Abstract:</h5>
            <ul className="list-disc ml-6 text-base md:text-lg">
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

          {/* For Paper */}
          <div className="mb-6">
            <h5 className="font-bold mt-3 mb-3">For Paper:</h5>
            <ul className="list-disc ml-6 text-base md:text-lg">
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

          {/* Text Guidelines */}
          <div className="mb-6">
            <h5 className="font-bold mt-3 mb-3">
              The text must meet the following guidelines:
            </h5>
            <ul className="list-disc ml-6 text-base md:text-lg">
              <li>Font style: Times New Roman</li>
              <li>Font size: 12 pt, double spaced</li>
              <li>
                Citation style: APA 7th edition (any images, charts, tables, or
                figures from external sources must be cited)
              </li>
            </ul>
          </div>

          {/* Paper Structure */}
          <div className="mb-6">
            <h5 className="font-bold mt-3 mb-3">
              The paper should follow the subsequent structure:
            </h5>
            <ol className="list-decimal ml-6 text-base md:text-lg">
              <li>Abstract</li>
              <li>Introduction</li>
              <li>Literature review</li>
              <li>Problem statement</li>
              <li>Objective & scope</li>
              <li>Methodology</li>
              <li>Results & analysis</li>
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

          {/* Presentation Guidelines */}
          <div className="mb-6">
            <h5 className="font-bold mt-3 mb-3">Presentation Guidelines:</h5>
            <ul className="list-disc ml-6 text-base md:text-lg">
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

          {/* Emailing Guidelines */}
          <div className="mb-6">
            <h5 className="font-bold mt-3 mb-3">Emailing Guidelines:</h5>
            <p className="">
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
            <ol className="list-decimal ml-6 text-base md:text-lg">
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

          {/* Final Note */}
          <div>
            <p className="text-[18px] leading-[32px]">
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

export default Simulation;
