import MainLayout from "@/components/MainContainer/MainLayout";


function MppApplication(){
    return (
        <MainLayout>
            
            <div className="bg-gray-800 bg-[url('/assets/img/events/publicPolicy/mpp_application.jpg')] bg-center bg-no-repeat bg-cover min-h-[40vh] py-[70px]">
                <section>
                    <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                        <h5 className="text-black text-left text-xl mb-8">
                            Strengthen your MPP application<br />
                            <span className="text-primary">with expert guidance</span>
                        </h5>
                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-3">
                        <div className="flex justify-center">
                        <img
                                src="/assets/img/events/publicPolicy/Dean-AMA-n.png"
                                alt="Dean"
                                className="w-300"
                            />
                        </div>
                        <div className="col-span-2">
                        <div className="ms-5 mt-5">
                            <img src="/assets/img/events/publicPolicy/ask-me-any.png" alt="Ask me" className="ask_img mt-5 mb-5" />
                            <div className="text-white mt-20 pt-4">
                            <p className="mt-5 text-xl text-white font-bold">Syed Akbaruddin</p>
                            <p className="text-white">
                                Dean, Kautilya School of Public Policy:<br />
                                Former Permanent Representative of India to the UN
                            </p>
                            <p className="text-white">
                                <img src="/assets/img/events/publicPolicy/calender.png" alt="Calendar" className="inline w-12" /> July 11, Tuesday<br />
                                <img src="/assets/img/events/publicPolicy/time.png" alt="Time" className="inline w-12" /> 7:30 pm (Via Zoom)
                            </p>
                            </div>
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
                        <h5 className="text-left text-xl font-large mb-3">
                        FIND OUT HOW YOU CAN START YOUR POLICYMAKING JOURNEY
                        </h5>
                        <p className="mb-4">
                        The study of public policy is a multidisciplinary pursuit that requires, above all, the dedication to drive change. A passion for solving problems and a data-driven approach hold more weight than the traditional markers of educational background and professional experience. As such, the question of what makes the “perfect” candidate has no specific answer.
                        </p>
                        <p>
                        Join our Dean, Syed Akbaruddin, for insights into the qualities, skills, and aptitude that drive policymakers. Get a unique perspective on what we look for in applicants for the 2-year Master of Public Policy (MPP) program.
                        </p>
                    </div>
                    </div>
                </div>
                </section>
                <section>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <h4 className="pseudo_border mb-3">
                            WHAT THE SESSION WILL ADDRESS
                            </h4>
                            <div className="heading_border mb-4"></div>
                        </div>
                        <div className="col-span-1">
                            <ul className="entry_content">
                            <li>What are the qualities that define a good policymaker?</li>
                            <li>What are the strengths and skills you can showcase on your 2-year MPP application?</li>
                            <li>What are the traits we look for in each applicant?</li>
                            <li>What are the aspects covered during the personal interview?</li>
                            <li>What are the details we look for in recommendations?</li>
                            <li>How can you strengthen your application?</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="bg-gray-100">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <h4 className="pseudo_border mb-3">
                            WHO SHOULD ATTEND?
                            </h4>
                            <div className="heading_border mb-4"></div>
                        </div>
                        <div className="col-span-1">
                            <ul className="entry_content">
                            <li>Aspiring policymakers</li>
                            <li>Aspirants of the 2-year MPP who are stuck at any stage of their application</li>
                            <li>Graduates and those in the final year of their program</li>
                            <li>Working professionals looking for new career avenues</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </section>
               
        </MainLayout>
    )
}

export default MppApplication;