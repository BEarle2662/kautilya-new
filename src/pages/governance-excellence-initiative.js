import MainLayout from "@/components/MainContainer/MainLayout";

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import { ImagePaths } from "@/Endpoints/imagePath";

import Image from "next/image";


function GovernExcellenceInitiative() {

  const MySwal = withReactContent(Swal);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dept: "",
    subject: "",
    query: "",
  });
  //console.log("form",formData)
  const [dummy,setDummy]=useState({email:""})
  const [errors, setErrors] = useState({});
  // console.log(errors)
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const validateField = (name, value) => {
    let isValid = true;
    let errorMsg = '';

    switch (name) {
      case 'email':
        isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value);
        errorMsg = isValid ? '' : 'Please enter a valid email address.';
        break;

      case 'name':
      case 'dept':
      case 'subject':
        isValid = /^[a-zA-Z ]*$/.test(value);
        errorMsg = isValid
          ? ''
          : `${name.charAt(0).toUpperCase() + name.slice(1)} can only contain letters and spaces.`;
        break;

      default:
        isValid = true;
        errorMsg = '';
        break;
    }

    return { isValid, errorMsg };
  };
 
  const checkFormValidity = (updatedFormData) => {
    const fields = ['name',  'dept', 'subject', 'query'];
    for (let field of fields) {
      const { isValid } = validateField(field, updatedFormData[field]);
      if (!isValid || updatedFormData[field] === '') return false;
    }
    return true;
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trimStart();
    const { isValid, errorMsg } = validateField(name, trimmedValue);

    if (isValid) {
      const updatedFormData = {
        ...formData,
        [name]: trimmedValue,
      };

      setFormData(updatedFormData);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
      setIsFormValid(checkFormValidity(updatedFormData));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMsg,
      }));
      setIsFormValid(false);
    }
  };

  const handleEMail = (e) => {
    setDummy({
      ...dummy,
      email: e.target.value,
    });

    // Validate the email field separately
    const { isValid, errorMsg } = validateField('email', e.target.value);
    if (!isValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: errorMsg,
      }));
      setIsFormValid(false);

    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));
      setIsFormValid(true);

    }
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", dummy.email);
    formDataToSend.append("dept", formData.dept);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("query", formData.query);

    try {
      const response = await axios.post(
        "https://guprojects.gitam.edu/kautilya-admin/api/savegeicontact",
        formDataToSend
      );
      
      setIsFormValid(false);
      // Show SweetAlert success message
      if (response.data.status == "success") {
        
        MySwal.fire({
          icon: "success",
          title: "Success!",
          text: response.data.message,
        });
        setFormData({
        name: "",
        email: "",
        dept: "",
        subject: "",
        query: "",
      });
      setDummy({
        email:''
      })
      
      } else {
        MySwal.fire({
          icon: "error",
          title: "Error!",
          text: response.data.message,
        });
      }
    } catch (error) {
      // console.error("Error submitting form:", error);
      // Handle error and show SweetAlert error message if needed
      MySwal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to submit the form. Please try again.",
      });
    } finally {
      setIsLoading(false); // Reset loading state after form submission completes
    }
    return (
      <form onSubmit={handleSubmit}>
        {/* Your form inputs and other JSX elements */}
      </form>
    );
  };


 
  

  return (
    <MainLayout>
      <div className="bg-gray-100">
        <div className="mt-3 text-white text-center IndiaByKautily p-20 bg-red-shade bg-no-repeat bg-cover bg-center">
          <h5 className="font-bold text-4xl p-4">
            Governance Excellence Initiative
          </h5>
          <div className="absolute inset-x-0 top-64 mx-auto w-[15%] h-[2px] bg-white"></div>
        </div>
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="mb-6 text-lg">
                At the Kautilya School of Public Policy, GITAM (Deemed to be
                University), Hyderabad, under the leadership of our Dean
                Ambassador Syed Akbaruddin, (Former Permanent Representative of
                India to the UN) we are committed to fostering excellence in
                public policy formulation, implementation, analysis and
                evaluation through comprehensive capacity-building programs. Our
                initiatives are designed to enhance the skills and capabilities
                of government officials and elected representatives, focusing on
                areas such as governance leadership & motivation, media
                management and effective communication strategy, effective
                public service delivery, improved and sustainable digital
                governance, NESDA Indicators, budgeting and improved fund
                allocations, design thinking, artificial intelligence, climate
                change & ESG, ethical decision making, team building and
                negotiations, gender sensitization & POSH (Prevention of Sexual
                Harassment). With a faculty comprising immensely experienced and
                globally renowned experts, we offer research driven, specialized
                training programs tailored to meet the evolving needs of
                improved governance. We strongly believe in promoting a culture
                of life-long learning among government officials, which is why
                our program provides an opportunity for officers to enhance
                their skills and knowledge through curated programmes based on
                competitive mapping. We are confident that these curated
                trainings will contribute towards the overall capacity building
                of the government officials and bring significant value to their
                professional life.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-6 gei_sub_headings">
              Recent Workshops and Training Programs
            </h3>
            <p className="mb-6 text-lg">
              <b>
                December 2022: Media Engagement Workshop for 74 RR IPS Officers{" "}
              </b>{" "}
              In December 2022, we hosted a highly successful workshop on media
              engagement for the 74 RR IPS officers. This workshop saw the
              participation of 200 officers, equipping them with essential
              skills to effectively manage media relations and communication.{" "}
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <div className="md:w-1/2">
                <Image
                  src={ImagePaths.geiDec1}
                  alt="govt_excel"
                  className="w-full h-full"
                  height={0}
                  width={0}
                />
              </div>
              <div className="md:w-1/2">
                <Image
                  src={ImagePaths.geiDec2}
                  alt="govt_excel"
                  className="w-full h-full"
                  height={0}
                  width={0}
                />
              </div>
            </div>

            <p className="mb-6 text-lg">
              {" "}
              <b>July 2023: IPS Faculty Development Program</b> In July 2023, we
              conducted a focused faculty development program for IPS officers,
              concentrating on public speaking and media engagement. This
              program was attended by ten Sardar Vallabhbhai Patel National
              Police Academy faculty members, who gained valuable insights into
              enhancing their teaching methodologies and communication
              strategies.{" "}
            </p>
            <div className="mx-auto container w-9/12 mb-6">
              <Image
                src={ImagePaths.geiJul}
                alt="govt_excel"
                className="w-full h-auto"
                height={0}
                width={0}
              />
            </div>

            <p className="mb-6 text-lg">
              <b>
                August 2023: Media Engagement Workshop for 75 RR IPS Officers{" "}
              </b>
              Following the success of our previous programs, we organized
              another media engagement workshop in August 2023 for the 75 RR IPS
              officers. This event attracted 175 officers, providing them with
              advanced techniques and strategies for effective media
              interaction.{" "}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <div className="md:w-1/2">
                <Image
                  src={ImagePaths.geiJul2}
                  alt="govt_excel"
                  className="w-full h-full"
                  height={0}
                  width={0}
                />
              </div>
              <div className="md:w-1/2">
                <Image
                  src={ImagePaths.geiAug2}
                  alt="govt_excel"
                  className="w-full h-full"
                  height={0}
                  width={0}
                />
              </div>
            </div>
            <p className="mb-6 text-lg">
              <b>May 2024: Media Engagement Workshop for 76 RR IPS Officers </b>
              Our most recent workshop, held in May 2024, focused on media
              engagement for the 76 RR IPS officers. This session had 220
              officers in attendance, highlighting our continuous commitment to
              empowering public servants with the skills necessary for impactful
              communication.{" "}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <div className="md:w-1/2">
                <Image
                  src={ImagePaths.geiMay}
                  alt="govt_excel"
                  className="w-full h-full"
                  height={0}
                  width={0}
                />
              </div>
              <div className="md:w-1/2">
                <Image
                  src={ImagePaths.geiMay2}
                  alt="govt_excel"
                  className="w-full h-full"
                  height={0}
                  width={0}
                />
              </div>
            </div>
            <div className="col">
              <h3 className="gei_sub_headings mb-4 text-lg">Why Choose Us?</h3>
              <p className="mb-6 text-lg">
                <b>Expert Faculty:</b> Our programs are led by{" "}
                <a
                  href="https://kspp.edu.in/our-faculty"
                  target="_blank"
                  className="text-blue-500 underline font-semibold px-2"
                >
                  faculty members
                </a>
                who are not only globally renowned and academically
                distinguished but also possess substantial practical experience
                in their respective fields.
              </p>
              <p className="mb-6 text-lg">
                <b>Competency-based Curriculum:</b> We offer a robust
                competency-based curriculum that covers a wide range of topics
                essential for improved governance.
              </p>
              <p className="mb-6 text-lg">
                <b>Tailored Programs:</b> Our training sessions are customized
                to address the specific real-life scenarios, needs and
                challenges faced by government officers, ensuring practical
                relevance and immediate applicability.
              </p>
              <p className="mb-6 text-lg">
                <b>Competitive Pricing:</b> Curated capacity building by subject
                experts at an affordable cost is crucial for India, as it
                ensures that our public servants are equipped with the latest
                knowledge and skills to tackle contemporary challenges
                efficiently and effectively.
              </p>
              <p className="mb-6 text-lg">
                <b>Impactful Learning:</b> Participants in our programs benefit
                from hands-on learning experiences, interactive workshops, and
                real-world case studies, ensuring they leave with actionable
                insights.
              </p>
              <p className="mb-6 text-lg">
                <b>Collaborative Environment:</b> We foster a collaborative
                learning environment that encourages networking, knowledge
                sharing, and peer support among government officials.
              </p>
            </div>
          </div>
        </section>
        <div id="root">
          <section className="gei_main_section pb-60">
            <div className="gei_section container mx-auto">
              <div className="row">
                <div className="col">
                  <div
                    className="bg-white resume bg-govern-white-shade bg-center bg-no-repeat"
                    id="resume"
                  >
                    <section className="pt-14 p-0">
                      <div className="p-0 container mx-auto">
                        <div className="row">
                          <div className="col-xl-12">
                            <h3 className="text-primary text-center text-3xl font-bold mb-4">
                              CONTACT US
                            </h3>
                          </div>
                        </div>
                        <div className="col">
                          <div className="flex justify-center">
                            <div className="w-full lg:w-8/12">
                              <div className="logo_bg bg-[#b11016] p-12">
                                <form noValidate className="">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                                    <div className="mb-4">
                                      <input
                                        placeholder="Full name"
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        value=""
                                      />
                                    </div>
                                    <div className="mb-4">
                                      <input
                                        placeholder="Email ID"
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        value=""
                                      />
                                    </div>
                                    <div className="mb-4">
                                      <input
                                        placeholder="Department/organisation"
                                        name="dept"
                                        type="text"
                                        className="form-control"
                                        value=""
                                      />
                                    </div>
                                    <div className="mb-4">
                                      <input
                                        placeholder="Subject"
                                        name="subject"
                                        type="text"
                                        className="form-control"
                                        value=""
                                      />
                                    </div>
                                    <div className="mb-4 col-span-2">
                                      <textarea
                                        rows="5"
                                        placeholder="Leave your query"
                                        name="query"
                                        className="form-control"
                                      ></textarea>
                                    </div>
                                    <div className="mb-4 text-center col-span-2">
                                      <button
                                        type="submit"
                                        disabled
                                        className="btn bg-[#000] text-white cursor-not-allowed py-3 px-4 rounded text-lg"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default GovernExcellenceInitiative;
