import { useState, useEffect } from "react";
import axios from "axios";
import DynamicTabs from "@/components/common/DynamicTabs";
import VideoBackground from "@/components/common/videoBackground";

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import TopRecruiters from "@/components/common/topRecruters";
import Navbar from "@/components/MainContainer/Navbar";

function AdmissionProcess() {
  const [admTabsdata, setAdmTabsdata] = useState([]);

  useEffect(() => {
    fetchAdmtabsdata();
  }, []);

  const fetchAdmtabsdata = async () => {
    try {
      const response = await axios.get(
        "https://guprojects.gitam.edu/kautilya-admin/api/fetch-mppadmprocess-data"
      );
      console.log("Fetched tabs data:", response.data.data); // Check fetched data
      setAdmTabsdata(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="admission-process">
        <div className="mt-1 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-1">
            MPP Admission Process
          </h2>
        </div>
        <VideoBackground />
        <div className="mt-4 mb-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-start">
              <a
                className="btn btn-success text-white bg-blue-500 px-4 py-1 rounded"
                href="./pdf/Admissions Brochure 2025 Web.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-arrow-alt-circle-down"></i> DOWNLOAD
                BROCHURE
              </a>
            </div>

            <div className="overflow-auto mt-4">
              <table className="table-auto border-collapse w-full border border-gray-200">
                <thead className="text-white">
                  <tr>
                    <th
                      className="border bg-primary text-center p-2"
                      colSpan="4"
                    >
                      Important Dates
                    </th>
                  </tr>
                  <tr>
                    <th className="border bg-gray-900 p-2"></th>
                    <th className="border bg-gray-900 p-2">
                      Last Date to Submit Application
                    </th>
                    <th className="border bg-gray-900 p-2">
                      Admission Result Date
                    </th>
                    <th className="border bg-gray-900 p-2">
                      Last Date to Pay Admission Fee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Cycle 01</td>
                    <td className="border p-2">31-Dec-24</td>
                    <td className="border p-2">15-Jan-25</td>
                    <td className="border p-2">02-Feb-25</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Cycle 02</td>
                    <td className="border p-2">28-Feb-25</td>
                    <td className="border p-2">12-Mar-25</td>
                    <td className="border p-2">22-Mar-25</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Cycle 03</td>
                    <td className="border p-2">30-Apr-25</td>
                    <td className="border p-2">13-May-25</td>
                    <td className="border p-2">23-May-25</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Cycle 04</td>
                    <td className="border p-2">10-Jun-25</td>
                    <td className="border p-2">16-Jun-25</td>
                    <td className="border p-2">30-Jun-25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div>
              <h6 className="text-primary font-semibold text-lg mb-3">
                ABOUT KAUTILYA SCHOOL OF PUBLIC POLICY, INDIA
              </h6>
              <p>
                Kautilya’s Vision: “Working to rebalance the role of Society,
                Government, & Business for a ​more equitable and sustainable
                future”.
              </p>
              <p>
                Kautilya School of Public Policy is one of the top public policy
                schools in India, offering the ​best public policy programs for
                those passionate about making a difference in the ​governance of
                our country. We are bringing a solid cohort of change-makers
                under the ​mentorship of professionals who taught at Harvard
                Kennedy School, Stanford School of ​Business, IIM, etc, & with
                industry-wide experience.
              </p>
              <p>
                Studying at Kautilya is your access to an aspirational career in
                public policy whether in the ​private or in public sector.
              </p>
            </div>
            <div>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/LV96T34EmWs"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="bg-primary text-white p-1 mt-8">
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-semibold">
              What is Public Policy ? Major Subjects and Its Scope.
            </h3>
          </div>
        </div>
        <div className="mt-8">
          <div className="container mx-auto px-4">
            <p>
              Public policy can be defined as a collection of principles and
              actions that guide governmental responses to various societal
              issues. Scope of Public policy in India encompasses a ​broad range
              of crucial areas such as Economic Development, Social Justice,
              Environmental Sustainability, National Security, and more.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-primary text-white p-1 mt-8">
            <div className="container mx-auto px-4">
              <h3 className="text-lg  font-semibold">
                Types of Public Policy ?
              </h3>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div className="mt-8">
              <p>
                Public policies can be categorized based on their focus, scope,
                and duration. Here are several key types of public policy:
                Distributive Policies, Redistributive Policies, Regulatory
                Policies, Constitutional Policies, and Foreign Policies.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div>
                <img src="/assets/img/admission-process/pic.jpg" />
              </div>
              <div>
                <h6 className="text-primary font-semibold text-lg mb-3">
                  ABOUT MASTER'S PROGRAM IN PUBLIC POLICY (MPP)
                </h6>
                <p>
                  MPP is a 2-year, full-time, residential, 103-credit program.
                  Each year consists of three terms.Core and elective courses in
                  the first-year curriculum will expand your knowledge of Indian
                  policymaking structures and approaches, followed by a 3-month
                  internship.
                </p>
                <p>
                  In your second year, you will deep dive into one of five areas
                  of specialization through electives in policy domains.
                </p>
                <p>
                  The program culminates in a Master's Thesis in term 6, based
                  on a Capstone Project (CAP), undertaken either independently
                  with an organization or as part of a faculty-led group
                  research project on a current policy issue.
                </p>
                <p>
                  Overall, the program consists of 6 terms of 3 months each with
                  24 courses at a minimum, an internship project, and 10 skill
                  shops.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_bg container mx-auto px-4 mt-8 p-4">
          <DynamicTabs tabData={admTabsdata} />
        </div>
        <div className="section_bg mt-8 p-4">
          <h3 className="bg-gray-900 text-white text-center py-2 text-lg">
            Top Recruiters
          </h3>

          <TopRecruiters />
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div>
                <h6 className="mb-4 mt-4 font-bold">
                  CHOOSE YOUR PUBLIC POLICY CAREER:
                </h6>
                <p>
                  Kautilya's MPP program is renowned for its rigorous academics
                  and practical experience. By combining theoretical knowledge
                  with real-world application, the program equips students with
                  the confidence and creative thinking necessary to excel in any
                  career they choose.
                </p>
                <ul className="list-none pl-5">
                  <li className="py-2 relative">
                    <span className="absolute left-[-20px] top-[0.8rem] w-2 h-2 bg-gray-700 rounded-full"></span>
                    Public Service, including policy making and implementation,
                    government roles, and politics.
                  </li>
                  <li className="py-2 relative">
                    <span className="absolute left-[-20px] top-[0.8rem] w-2 h-2 bg-gray-700 rounded-full"></span>
                    Private Sector, including business consulting, policy
                    consulting for large corporations, policy analysis, think
                    tanks, and private policy implementation organizations.
                  </li>
                  <li className="py-2 relative">
                    <span className="absolute left-[-20px] top-[0.8rem] w-2 h-2 bg-gray-700 rounded-full"></span>
                    Non-profit or Social Enterprises.
                  </li>
                  <li className="py-2 relative">
                    <span className="absolute left-[-20px] top-[0.8rem] w-2 h-2 bg-gray-700 rounded-full"></span>
                    Media & Communications, with a focus on the public sector.
                  </li>
                  <li className="py-2 relative">
                    <span className="absolute left-[-20px] top-[0.8rem] w-2 h-2 bg-gray-700 rounded-full"></span>
                    Research and Academia.
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/assets/img/admission-process/pic.jpg"
                  alt="Admission Process"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5">
          <h3 className="text-white text-center bg-gray-900 uppercase p-1 mb-2 text-2xl">
            Alumni Speak
          </h3>
        </div>
        <div className="flex flex-wrap justify-center mt-5">
          <div className="w-full md:w-1/3 p-2">
            <img
              src="/assets/img/admission-process/1.png"
              alt="Alumni 1"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/3 p-2">
            <img
              src="/assets/img/admission-process/2.png"
              alt="Alumni 2"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/3 p-2">
            <img
              src="/assets/img/admission-process/3.png"
              alt="Alumni 3"
              className="w-full h-auto"
            />
          </div>
        </div>

        <footer>
          <div className="bg-gray-900 py-1">
            <div className="container mx-auto">
              <div className="flex justify-center">
                <div className="w-full xl:w-auto text-center">
                  <h5 className="text-white text-lg">Contact Us</h5>
                  <p className="text-white">
                    <FaMapMarkerAlt className="inline-block mr-2" />
                    GITAM (Deemed to be) UNIVERSITY Rudraram, Patancheru mandal
                    Hyderabad-502329 Telangana, INDIA.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary py-1 text-center text-white">
            <span>
              <FaPhone className="inline-block mr-2 transform rotate-90" />
              9100850851
            </span>
            <br />
            <span>
              <FaEnvelope className="inline-block mr-2" />
              admissions@kautilya.org.in
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default AdmissionProcess;
