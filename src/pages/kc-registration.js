import { useState } from "react";
import MainLayout from "@/components/MainContainer/MainLayout";

function ConclaveRegistration() {
  const [showDiv, setShowDiv] = useState(false);

  const handleRadioClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <MainLayout layoutWidth="true">
      <div className="bg-contact-banner">
        <section className="p-20">
          <div className="container mx-auto px-4">
            <div className="w-full bg-opacity-70 bg-black p-24">
              <h3 className="text-center text-white mb-5 text-2xl">
                Registration Here
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name *"
                  className="form-input mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Enter email *"
                  className="form-input mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Age *"
                  className="form-input mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                />
                <select className="form-select mb-4 px-4 py-2 border border-gray-300 rounded-lg">
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Others</option>
                </select>
                <input
                  type="text"
                  placeholder="LinkedIn ID"
                  className="form-input mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Whatsapp number"
                  className="form-input mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <label className="text-white mt-2">Are you a</label>
              <div className="mb-4 text-white">
                <div className="flex items-center space-x-4">
                  <input
                    type="radio"
                    id="workRadio"
                    name="profession"
                    value="Working Professional"
                    className="form-radio"
                  />
                  <label htmlFor="workRadio">Working Professional</label>

                  <input
                    type="radio"
                    id="studentRadio"
                    name="profession"
                    value="Student"
                    className="form-radio"
                  />
                  <label htmlFor="studentRadio">Student</label>

                  <input
                    type="radio"
                    id="othersRadio"
                    name="profession"
                    value="Others"
                    className="form-radio"
                  />
                  <label htmlFor="othersRadio">Others</label>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="State"
                  className="form-input mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="form-input mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <p className="text-white">
                Please indicate your registration preference*
              </p>

              <div className="text-white mb-4">
                <input
                  type="radio"
                  id="simulation"
                  name="simulation"
                  value="simulation"
                  className="form-radio"
                  onClick={handleRadioClick}
                />
                <label htmlFor="simulation" className="ml-2">
                  Simulation
                </label>
              </div>

              {showDiv && (
                <div className="border-t border-red-500 mt-4 pt-4">
                  <h4 className="text-center text-white text-lg">Simulation</h4>
                  <label className="text-white mt-2 block">
                    1. Submit your resume (PDF format)*
                  </label>
                  <input
                    type="file"
                    className="form-input mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white mt-2 block">
                        2. Current Institution/Organisation *
                      </label>
                      <input
                        type="text"
                        placeholder="Current Institution/Organisation *"
                        className="form-input mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="text-white mt-2 block">
                        3. Course/Current Position *
                      </label>
                      <input
                        type="text"
                        placeholder="Course/Current Position *"
                        className="form-input mb-4 px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <label className="text-white mt-2 block">
                    4. Why do you want to participate (max 200 words)?*
                  </label>
                  <textarea
                    rows={3}
                    className="form-input mb-4 px-4 py-2 border border-gray-300 rounded-lg w-full"
                  />
                </div>
              )}

              <div className="text-center mt-6">
                <button
                  type="button"
                  className="bg-red-600 text-white px-6 py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default ConclaveRegistration;
