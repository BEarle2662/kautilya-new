import MainLayout from "@/components/MainContainer/MainLayout";

function DelhiSession(){
    return (
        <MainLayout>
            <div className="info_session_main bg-[url('/assets/img/events/publicpolicy/info_session_bg.png')] bg-center bg-no-repeat bg-cover">
            <section>
                <div className="container mx-auto">
                <div className="grid grid-cols-1 text-left">
                    <div className="col-span-1">
                    <img
                        src="/assets/img/events/publicpolicy/Info_Session_Logo.png"
                        alt="Info Session Logo"
                        className="mb-4"
                        style={{ width: '150px' }}
                    />
                    <h2 className="text-6xl font-bold mt-4 mb-8">
                        Get started <br /> on your public <br /> policy career
                    </h2>
                    <p className="sub-title mt-2 text-3xl font-semibold">
                        Meet our leadership team <br /> to know more about the <br />
                        2-year Master in Public Policy
                    </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="col-span-1 flex items-center justify-center">
                    <img
                        src="/assets/img/events/publicpolicy/calender_red.png"
                        alt="icon calendar"
                        style={{ width: '50px' }}
                        className="mr-2"
                    />
                    <span className="sub-text text-lg">Sunday, March 19</span>
                    </div>

                    <div className="col-span-1 flex items-center justify-center">
                    <img
                        src="/assets/img/events/publicpolicy/time_red.png"
                        alt="icon time"
                        style={{ width: '50px' }}
                        className="mr-2"
                    />
                    <span className="sub-text text-lg">10:30 am – 1 pm</span>
                    </div>

                    <div className="col-span-1 flex items-center justify-center">
                    <img
                        src="/assets/img/events/publicpolicy/map_red.png"
                        alt="icon map"
                        style={{ width: '20px' }}
                        className="mr-2"
                    />
                    <span className="sub-text text-lg">
                        Inspire, Le Meridien, New Delhi
                    </span>
                    </div>
                </div>
                </div>
            </section>
            </div>
            <section className="info_section_styles py-12">
                <div className="container mx-auto">
                    {/* Leadership Team Section */}
                    <div className="grid grid-cols-1 text-center mb-6">
                    <div className="col-span-1">
                        <h4 className="text-4xl font-light">LEADERSHIP TEAM</h4>
                    </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                    <img
                        src="/assets/img/events/publicpolicy/person1.png"
                        alt="Image 1"
                        className="w-[250px] h-auto"
                    />
                    <img
                        src="/assets/img/events/publicpolicy/person2.png"
                        alt="Image 2"
                        className="w-[250px] h-auto"
                    />
                    <img
                        src="/assets/img/events/publicpolicy/person3.png"
                        alt="Image 3"
                        className="w-[250px] h-auto"
                    />
                    </div>

                    {/* Advisory Board Members Section */}
                    <div className="mt-12 grid grid-cols-1 text-center mb-6">
                    <div className="col-span-1">
                        <h4 className="text-4xl font-light">ADVISORY BOARD MEMBERS</h4>
                    </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                    <img
                        src="/assets/img/events/publicpolicy/person4.png"
                        alt="Image 1"
                        className="w-[250px] h-auto"
                    />
                    <img
                        src="/assets/img/events/publicpolicy/person5.png"
                        alt="Image 2"
                        className="w-[250px] h-auto"
                    />
                    <img
                        src="/assets/img/events/publicpolicy/person6.png"
                        alt="Image 3"
                        className="w-[250px] h-auto"
                    />
                    </div>

                    {/* What You Can Expect Section */}
                    <div className="mt-12 grid grid-cols-1 text-center mb-6">
                    <div className="col-span-1 mb-4">
                        <h4 className="text-4xl font-light">What You Can Expect</h4>
                    </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                    <img
                        src="/assets/img/events/publicpolicy/expect1.png"
                        alt="Image 1"
                        class="max-w-[75%] h-auto align-top"
                    />
                    <img
                        src="/assets/img/events/publicpolicy/expect2.png"
                        alt="Image 2"
                        class="max-w-[75%] h-auto align-top"
                    />
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                    <img
                        src="/assets/img/events/publicpolicy/expect3.png"
                        alt="Image 3"
                        class="max-w-[75%] h-auto align-top"
                    />
                    <img
                        src="/assets/img/events/publicpolicy/expect4.png"
                        alt="Image 4"
                       class="max-w-[75%] h-auto align-top"
                    />
                    </div>
                </div>
                </section>

                <section className="infosection_bg py-12 min-h-[40vh] bg-[url('/assets/img/events/publicpolicy/footer_bg.png')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 text-center mb-6">
                    <div className="col-span-1">
                        <h4 className="text-3xl font-bold text-white">
                        About Kautilya’s Master in <br /> Public Policy
                        </h4>
                        <div className="vc_empty_space my-4 h-[250px]"></div>
                        <p className="text-lg text-white">
                        The Kautilya Master in Public Policy is a 2-year, full-time
                        residential program designed to expand your knowledge, enhance
                        skills, and instill values. Our curriculum embraces international
                        pedagogical and research outlook, while combining the ground
                        realities of India and her citizens.
                        </p>
                    </div>
                    </div>
                    
                    {/* Icon Section */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
                    <img
                        src="/assets/img/events/publicpolicy/icontext1.png"
                        alt="Icon 1"
                        className="w-[80px] h-auto"
                    />
                    <img
                        src="/assets/img/events/publicpolicy/icontext2.png"
                        alt="Icon 2"
                        className="w-[80px] h-auto"
                    />
                    <img
                        src="/assets/img/events/publicpolicy/icontext3.png"
                        alt="Icon 3"
                        className="w-[80px] h-auto"
                    />
                    <img
                        src="/assets/img/events/publicpolicy/icontext4.png"
                        alt="Icon 4"
                        className="w-[80px] h-auto"
                    />
                    <img
                        src="/assets/img/events/publicpolicy/icontext5.png"
                        alt="Icon 5"
                        className="w-[80px] h-auto"
                    />
                    </div>
                </div>
                </section>
        </MainLayout>
    )
}
export default DelhiSession;