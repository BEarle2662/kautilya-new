import MainLayout from "@/components/MainContainer/MainLayout";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
function PPForPg() {
  return (
    <MainLayout>
      <div className="ppforp bg-pp-for-pgImg bg-center bg-no-repeat bg-cover max-h-[80vh] py-14">
        <section className="ml-[50px] py-[60px]">
          {" "}
          {/* Adjust ml as per your design */}
          <div className="container-fluid">
            <div className="grid grid-cols-12">
              <div className="col-span-3">
                <div className="bg-white rounded-md shadow-[4px_4px_4px_4px_#cd6d786b] px-[40px] py-[35px] text-center">
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
                      <div className="mb-4 col-span-12 pb-3">
                        <div className="flex items-center">
                          <span className="icon">
                            <FaBriefcase />
                          </span>
                          <span className="input-field ml-4">
                            <select
                              name="experience"
                              className="bg-white w-[342px] border-b border-black pb-1 text-['#c9c9c9']"
                              aria-required="true"
                              aria-invalid="false"
                            >
                              <option value="">
                                Select Total Experience *
                              </option>
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
                          <span className="icon">
                            {" "}
                            <FaUserPlus />
                          </span>
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
                              <label
                                htmlFor="radio-yes"
                                className="form-check-label"
                              >
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
                              <label
                                htmlFor="radio-no"
                                className="form-check-label"
                              >
                                No
                              </label>
                            </div>
                          </span>
                        </div>
                      </div>

                      {/* Hidden Fields */}
                      <div className="col-span-12">
                        <input
                          type="hidden"
                          name="UTM-Source"
                          id="UTM-Source"
                        />
                        <input
                          type="hidden"
                          name="UTM-Medium"
                          id="UTM-Medium"
                        />
                        <input
                          type="hidden"
                          name="UTM-Campaign"
                          id="UTM-Campaign"
                        />
                        <input type="hidden" name="UTM-Term" id="UTM-Term" />
                      </div>

                      {/* Submit Button */}
                      <div className="mb-4 col-span-12 mt-4 text-center">
                        <button
                          type="submit"
                          className="bg-red-500 border border-red-500 rounded-[10px] text-white py-1 px-3"
                        >
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

      <section className="section_bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-12 text-center">
              <h5 className="text-xl font-semibold">#IndiaByKautilya</h5>
              <p className="text-center mt-4">
                At the heart of #progress lies translational policymaking.
                Envisioning change through inclusivity, innovation,
                collaboration, and aspirations to lay the groundwork for a
                brighter tomorrow is vital for #holistic development.
              </p>
              <p className="text-center mt-4">
                With a shift in government and corporate strategy to boost the
                economic development along with higher index of the quality
                life, professionals with expertise in policy making will be most
                sought after.
                <strong>
                  The Future is promising for today’s early movers.
                </strong>
              </p>
              <p className="text-center mt-4">
                Join me in this exclusive session for you to help you understand
                why the professional program in policy making may suits best to
                your career aspirations.&nbsp; #PolicyForProgress
                #NewIndiaJourney
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-12">
              <h4 className="pseudo_border mb-3">WHAT WILL BE COVERED ?</h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-12">
              <ul className="entry_content">
                <li>
                  Any graduate and/or those in the final year of their program
                  and willing to enroll for Master’s Program in Public Policy
                  (MPP).
                </li>
                <li>
                  Junior and mid-level professionals looking to join MPP for a
                  career switch or a lateral growth in current role.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section_bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-12">
              <h4 className="pseudo_border mb-3">WHO SHOULD ATTEND?</h4>
              <div className="heading_border mb-4"></div>
            </div>
            <div className="col-span-12">
              <ul className="entry_content">
                <li>
                  How pursuing Master’s Program in Public Policy can help you
                  open doors to the global stage?
                </li>
                <li>
                  What makes KSPP’s curriculum most unique and effective in
                  career progression?
                </li>
                <li>
                  What’s driving the demand for public policy specialists?
                </li>
                <li>What are the New-Age career paths for MPP graduates?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
export default PPForPg;
