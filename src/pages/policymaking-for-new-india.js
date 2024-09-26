import MainLayout from "@/components/MainContainer/MainLayout";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
function PolicyMakingForNewIndia(){
    return (
        <MainLayout>
            <div className="bg-gray-100 bg-[url('/assets/img/events/publicPolicy/policy_making.jpg')] bg-center bg-no-repeat bg-cover">
                <section>
                    <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-5">
                        <div className="col-span-12 text-center">
                        <img
                            src="/assets/img/events/publicPolicy/Icon.png"
                            alt="background image"
                            className="w-72 mx-auto"
                        />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-7">
                        <p className="bg-[#5e5e5e] text-white text-[30px] font-bold leading-[32px] ml-[79px] py-[12px] px-[10px]">
                            <span className="block">Policymaking for New India:</span>
                            <span className="text-lg">A Journey from Ideation to Impact</span>
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            <div className="col-span-5">
                            <img
                                src="/assets/img/events/publicPolicy/Dean-AMA-n.png"
                                alt="Dean"
                                className="w-300"
                            />
                            </div>
                            <div className="col-span-7 mt-5">
                            <p className="text-[#b71016] text-[25px] font-bold">Syed Akbaruddin</p>
                            <p className="text-black text-[25px] font-semibold leading-[28px] py-2">
                                Dean, Kautilya School of Public Policy;
                                <br /> Former Permanent Representative of India to the UN
                            </p>
                            <p className="flex items-center">
                                <img
                                src="/assets/img/events/publicPolicy/date-icon.png"
                                alt="Date"
                                className="w-7 mr-2"
                                />
                               <span className="text-black font-bold mt-2">Friday, March 22</span> <br/>
                                <img
                                src="/assets/img/events/publicPolicy/time-icon.png"
                                alt="Time"
                                className="w-7 mx-2"
                                />
                                <span className="text-black font-bold mt-2">6 p.m. – 7 p.m. (Via Zoom)</span>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-span-5">
                        <div className="bg-white p-8 rounded shadow-md">
                        <form>
                            <div className="grid grid-cols-12">
                            {/* Name Field */}
                            <div className="mb-4 col-span-12 pb-3">
                                <div className="flex justify-between items-center">
                                <span className="icon">
                                    <FaUser />
                                </span>
                                <span className="input-field ml-2">
                                    <input
                                    type="text"
                                    name="name"
                                    placeholder="Name (MANDATORY FIELD)"
                                    size="40"
                                    className="no-border"
                                    aria-required="true"
                                    aria-invalid="false"
                                    />
                                </span>
                                </div>
                            </div>
                            
                            {/* Email Field */}
                            <div className="mb-4 col-span-12 pb-3">
                                <div className="flex justify-between items-center">
                                <span className="icon">
                                <MdEmail />
                                </span>
                                <span className="input-field ml-2">
                                    <input
                                    type="email"
                                    name="email"
                                    size="40"
                                    className="no-border"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Email ID (MANDATORY FIELD)"
                                    />
                                </span>
                                </div>
                            </div>
                            
                            {/* Mobile Field */}
                            <div className="mb-4 col-span-12 pb-3">
                                <div className="flex justify-between items-center">
                                <span className="icon">
                                <FaMobileScreen />
                                </span>
                                <span className="input-field ml-2">
                                    <input
                                    type="text"
                                    name="mobile"
                                    size="40"
                                    className="no-border"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Mobile (MANDATORY FIELD)"
                                    />
                                </span>
                                </div>
                            </div>
                            
                            {/* City Field */}
                            <div className="mb-4 col-span-12 pb-3">
                                <div className="flex justify-between items-center">
                                <span className="icon">
                                <MdLocationPin />
                                </span>
                                <span className="input-field ml-2">
                                    <input
                                    type="text"
                                    name="city"
                                    size="40"
                                    className="no-border"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="City (MANDATORY FIELD)"
                                    />
                                </span>
                                </div>
                            </div>
                            
                            {/* Experience Field */}
                            <div className="mb-4 col-span-12">
                                <div className="flex justify-left items-center"> 
                                <span className="icon">
                                <FaBriefcase />
                                </span>
                                <span className="input-field ml-4">
                                    <select 
                                    name="experience"
                                    className="bg-white w-[398px] border-b border-black pb-1 text-['#c9c9c9']"
                                    aria-required="true"
                                    aria-invalid="false"
                                   
                                    >
                                    <option value="">Select Total Experience *</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    </select>
                                </span>
                                </div>
                            </div>

                            {/* Radio Button Field */}
                            
                            <div className="mb-4 col-span-12 mt-3">
                                <div className="flex justify-center items-center ml-6"> 
                                <span className="icon"> <FaUserPlus /></span>
                                <span className="ml-4">
                                
                                    Want to enroll for MPP? *
                                    </span>

                                    
                                
                                    </div>
                                </div>
                            
                                <div className="col-span-12">
                                <div className="flex items-center justify-center"> 
                                    <span className="input-field ml-2">
                                    <div className="form-check">
                                        <input
                                        name="yesno"
                                        type="radio"
                                        id="radio-yes"
                                        className="form-check-input"
                                        value="Yes"
                                        />
                                        <label htmlFor="radio-yes" className="form-check-label">
                                        Yes
                                        </label>
                                    </div>
                                    </span>
                                    <span className="input-field ml-2">
                                    <div className="form-check">
                                        <input
                                        name="yesno"
                                        type="radio"
                                        id="radio-no"
                                        className="form-check-input"
                                        value="No"
                                        />
                                        <label htmlFor="radio-no" className="form-check-label">
                                        No
                                        </label>
                                    </div>
                                    </span>
                                    </div>
                                
                                </div>
                            

                            {/* Hidden Fields */}
                            <div className="col-span-12">
                                <input type="hidden" name="UTM-Source" id="UTM-Source" />
                                <input type="hidden" name="UTM-Medium" id="UTM-Medium" />
                                <input type="hidden" name="UTM-Campaign" id="UTM-Campaign" />
                                <input type="hidden" name="UTM-Term" id="UTM-Term" />
                            </div>

                            {/* Submit Button */}
                            <div className="mb-4 col-span-12 mt-4 text-center">
                                <button type="submit" className="bg-red-500 border border-red-500 rounded-[10px] text-white py-1 px-3">
                                Register
                                </button>
                            </div>
                            </div>
                            
                        </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>


                <section className="bg-gray-100">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <h5 className="text-center mb-5 text-xl font-bold mb-3">
                        <strong>#IndiaByKautilya</strong>
                        </h5>
                        <p className="mb-4">
                        At the heart of #progress lies translational policymaking. Envisioning change through inclusivity, innovation, collaboration, and aspirations to lay the groundwork for a brighter tomorrow is vital for #holistic development.
                        </p>
                        <p className="mb-4">
                        Ideation on a journey to evidence-based #research for policymaking is vital to building well-informed, robust policies that address our nation’s needs. We need to translate ideas into measurable outcomes to drive tangible #impact and positive change.
                        </p>
                        <p>
                        Together, let’s embark on this journey of #policymaking, from ideation to impact, to build a resilient and thriving New India. #PolicyForProgress #NewIndiaJourney
                        </p>
                    </div>
                    </div>
                </div>
                </section>
                <section>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <h4 className="text-2xl font-semibold pseudo_border mb-3">WHO SHOULD ATTEND?</h4>
                            <div className="heading_border mb-4"></div>
                        </div>
                        <div className="col-span-1">
                            <ul className="entry_content">
                            <li>Any graduate and/or those in the final year of their program.</li>
                            <li>Junior and mid-level corporate executives.</li>
                            <li>Media and Communication professionals.</li>
                            <li>UPSC and legal career aspirants.</li>
                            <li>Business and Economics experts.</li>
                            <li>Engineering and Technology specialists.</li>
                            <li>Citizens passionate about problem-solving and community development.</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-100">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <h4 className="text-2xl font-semibold pseudo_border mb-3">WHAT WILL BE COVERED?</h4>
                        <div className="heading_border mb-4"></div>
                    </div>
                    <div className="col-span-1">
                        <ul className="entry_content">
                        <li>Key ingredients of translational policy making for New-India.</li>
                        <li>How pursuing Master’s Program in Public Policy can help you open doors to the global stage.</li>
                        <li>What’s driving the demand for public policy specialists?</li>
                        <li>What are the New-Age career paths you can pursue?</li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <p className="italic">
                        Join us in this high-value session to learn from the man himself who shaped global narratives and served India in a decades-long career at the global stage in public service.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default PolicyMakingForNewIndia;