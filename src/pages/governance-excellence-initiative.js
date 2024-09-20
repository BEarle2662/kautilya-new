import { Button } from "@material-tailwind/react";
import MainLayout from "@/components/MainContainer/MainLayout";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useState } from 'react';  // Import useState
import Image from "next/image";

const GovernExcellenceInitiative = () => {
  const MySwal = withReactContent(Swal);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dept: '',
    subject: '',
    query: '',
  });

  const [dummy, setDummy] = useState({ email: '' });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    const fields = ['name', 'dept', 'subject', 'query'];
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
      const updatedFormData = { ...formData, [name]: trimmedValue };
      setFormData(updatedFormData);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      setIsFormValid(checkFormValidity(updatedFormData));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
      setIsFormValid(false);
    }
  };

  const handleEMail = (e) => {
    setDummy({ ...dummy, email: e.target.value });
    const { isValid, errorMsg } = validateField('email', e.target.value);
    if (!isValid) {
      setErrors((prevErrors) => ({ ...prevErrors, email: errorMsg }));
      setIsFormValid(false);
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
      setIsFormValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', dummy.email);
    formDataToSend.append('dept', formData.dept);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('query', formData.query);

    try {
      const response = await axios.post(
        'https://guprojects.gitam.edu/kautilya-admin/api/savegeicontact',
        formDataToSend
      );

      setIsFormValid(false);
      if (response.data.status === 'success') {
        MySwal.fire({ icon: 'success', title: 'Success!', text: response.data.message });
        setFormData({ name: '', email: '', dept: '', subject: '', query: '' });
        setDummy({ email: '' });
      } else {
        MySwal.fire({ icon: 'error', title: 'Error!', text: response.data.message });
      }
    } catch (error) {
      MySwal.fire({ icon: 'error', title: 'Error!', text: 'Failed to submit the form. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
    <div className="bg-gray-100">
      <div className="bg-red-500 text-white text-center IndiaByKautily p-24 bg-[url('/assets/img/events/govtExcellenceInitivies/gradient-bg.jpg')] bg-no-repeat bg-cover bg-center">
        <h5 className="font-bold text-4xl p-4">Governance Excellence Initiative</h5>
        <div className="absolute inset-x-0 top-64 mx-auto w-[15%] h-[2px] bg-white"></div>
      </div>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-6 text-lg">
            At the Kautilya School of Public Policy, GITAM (Deemed to be University), Hyderabad, under the leadership of our Dean Ambassador Syed Akbaruddin, (Former Permanent Representative of India to the UN) we are committed to fostering excellence in public policy formulation, implementation, analysis and evaluation through comprehensive capacity-building programs. Our initiatives are designed to enhance the skills and capabilities of government officials and elected representatives, focusing on areas such as governance leadership & motivation, media management and effective communication strategy, effective public service delivery, improved and sustainable digital governance, NESDA Indicators, budgeting and improved fund allocations, design thinking, artificial intelligence, climate change & ESG, ethical decision making, team building and negotiations, gender sensitization & POSH (Prevention of Sexual Harassment). With a faculty comprising immensely experienced and globally renowned experts, we offer research driven, specialized training programs tailored to meet the evolving needs of improved governance. We strongly believe in promoting a culture of life-long learning among government officials, which is why our program provides an opportunity for officers to enhance their skills and knowledge through curated programmes based on competitive mapping. We are confident that these curated trainings will contribute towards the overall capacity building of the government officials and bring significant value to their professional life. 
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-6 gei_sub_headings">
            Recent Workshops and Training Programs
          </h3>
          <p className="mb-6 text-lg"><b>December 2022: Media Engagement Workshop for 74 RR IPS Officers </b> In December 2022, we hosted a highly successful workshop on media engagement for the 74 RR IPS officers. This workshop saw the participation of 200 officers, equipping them with essential skills to effectively manage media relations and communication. </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <div className="md:w-1/2">
              <Image src="./../../assets/img/events/govtExcellenceInitivies/gei_dec_2022_1.jpg" alt="govt_excel" className="w-full h-full" height={0} width={0}/>
            </div>
            <div className="md:w-1/2">
              <Image src="./../../assets/img/events/govtExcellenceInitivies/gei_dec_2022_2.jpg" alt="govt_excel" className="w-full h-full" height={0} width={0}/>
            </div>
          </div>

          <p className="mb-6 text-lg"> <b>July 2023: IPS Faculty Development Program</b> In July 2023, we conducted a focused faculty development program for IPS officers, concentrating on public speaking and media engagement. This program was attended by ten Sardar Vallabhbhai Patel National Police Academy faculty members, who gained valuable insights into enhancing their teaching methodologies and communication strategies. </p>
          <div className="mx-auto container w-9/12 mb-6">
            <Image src="./../../assets/img/events/govtExcellenceInitivies/gei_july_2023.jpg" alt="govt_excel" className="w-full h-auto" height={0} width={0}/>
          </div>

          <p className="mb-6 text-lg mb-6"><b>August 2023: Media Engagement Workshop for 75 RR IPS Officers </b>Following the success of our previous programs, we organized another media engagement workshop in August 2023 for the 75 RR IPS officers. This event attracted 175 officers, providing them with advanced techniques and strategies for effective media interaction. </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <div className="md:w-1/2">
              <Image src="./../../assets/img/events/govtExcellenceInitivies/gei_july_2023_2.jpg" alt="govt_excel" className="w-full h-full" height={0} width={0}/>
            </div>
            <div className="md:w-1/2">
              <Image src="./../../assets/img/events/govtExcellenceInitivies/gei_aug_2023_2.jpg" alt="govt_excel" className="w-full h-full" height={0} width={0}/>
            </div>
          </div>
          <p className="mb-6 text-lg"><b>May 2024: Media Engagement Workshop for 76 RR IPS Officers </b>Our most recent workshop, held in May 2024, focused on media engagement for the 76 RR IPS officers. This session had 220 officers in attendance, highlighting our continuous commitment to empowering public servants with the skills necessary for impactful communication. </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <div className="md:w-1/2">
              <Image src="./../../assets/img/events/govtExcellenceInitivies/gei_may_2024_1.jpg" alt="govt_excel" className="w-full h-full" height={0} width={0}/>
            </div>
            <div className="md:w-1/2">
              <Image src="./../../assets/img/events/govtExcellenceInitivies/gei_may_2024_2.jpg" alt="govt_excel" className="w-full h-full" height={0} width={0}/>
            </div>
          </div>
          <div class="col">
          <h3 class="gei_sub_headings mb-6">Why Choose Us?</h3>
          <p className="mb-6 text-lg">
            <b>Expert Faculty:</b> Our programs are led by <a href="https://kspp.edu.in/our-faculty" target="_blank" className="text-blue-500 underline font-semibold px-2"> 
              faculty members
            </a>
            who are not only globally renowned and academically distinguished
            but also possess substantial practical experience in their
            respective fields.
          </p>
          <p className="mb-6 text-lg">
            <b>Competency-based Curriculum:</b> We offer a robust
            competency-based curriculum that covers a wide range of topics
            essential for improved governance.
          </p>
          <p className="mb-6 text-lg">
            <b>Tailored Programs:</b> Our training sessions are customized to
            address the specific real-life scenarios, needs and challenges
            faced by government officers, ensuring practical relevance and
            immediate applicability.
          </p>
          <p className="mb-6 text-lg">
            <b>Competitive Pricing:</b> Curated capacity building by subject
            experts at an affordable cost is crucial for India, as it ensures
            that our public servants are equipped with the latest knowledge
            and skills to tackle contemporary challenges efficiently and
            effectively.
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
          <div className="bg-white p-8 shadow-md rounded-md">
            <h3 className="text-2xl font-bold text-center mb-4">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Full name"
                    name="name"
                    value={formData.name}
                    onChange={handleChanges}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                  {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Email ID"
                    name="email"
                    value={dummy.email}
                    onChange={handleEMail}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                  {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Department/Organisation"
                    name="dept"
                    value={formData.dept}
                    onChange={handleChanges}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                  {errors.dept && <div className="text-red-500 text-sm mt-1">{errors.dept}</div>}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChanges}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                  {errors.subject && <div className="text-red-500 text-sm mt-1">{errors.subject}</div>}
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Leave your query"
                  name="query"
                  value={formData.query}
                  onChange={handleChanges}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
                {errors.query && <div className="text-red-500 text-sm mt-1">{errors.query}</div>}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className={`bg-blue-500 text-white px-6 py-2 rounded-md ${!isFormValid || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Please wait...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    </MainLayout>
  );
};

export default GovernExcellenceInitiative;