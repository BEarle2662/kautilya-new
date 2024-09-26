import MainLayout from "@/components/MainContainer/MainLayout";

function PoliticalExperts(){
    return (
        <MainLayout>
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <p className="text-right">
                        <a className="bg-black text-white p-2">INVITE US TO A COLLEGE WEBINAR</a>
                        </p>
                    </div>
                </div>
            </div>
            <section className="politicalCE bg-[url('/assets/img/talkseries/publicpolicy/political_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <h4 className="text-white mb-4">
                        <span className="bg-[#b20016] p-1 text-2xl">Ask Me Anything</span>
                        </h4>
                        <h4 className="text-black mb-4 text-4xl ">Careers in Public Policy:</h4>
                        <h4 className="text-primary text-4xl font-semibold mb-5">
                        Growing demand for policy & <br />
                        political communication experts
                        </h4>
                        <p className="flex items-center mt-4">
                        <img src="/assets/img/talkseries/publicpolicy/Calender_time.png" className="w-10 mr-2" />
                        <span>25th June, 2022 11 am – 12 pm</span>
                        </p>
                    </div>
                    </div>
                </div>
            </section>
            <section className="bg-primary">
                <div >
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div>
                            <p className="text-white">
                                From migration to climate change, poverty to cybersecurity, governments, businesses and civil societies have begun to understand that following traditional mechanisms does not seem to bring the development that will solve the economic problems of tomorrow.
                            </p>
                            <p className="text-white mt-4">
                                If you want to solve these 21st-century challenges and in the process build an impactful career in the Government, corporations and Public services sector, a career in public policy can be as promising and dynamic as it sounds. Know all the heights that you can reach in public policy in our upcoming session on Careers in Public Policy.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/publicpolicy/image1.jpg" alt="Image 1" />
                    </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <img src="/assets/img/talkseries/publicpolicy/image2.jpg" alt="Image 2" />
                    </div>
                    <div>
                        <img src="/assets/img/talkseries/publicpolicy/image3.jpg" alt="Image 3" />
                    </div>
                    <div>
                        <img src="/assets/img/talkseries/publicpolicy/image4.jpg" alt="Image 4" />
                    </div>
                    <div>
                        <img src="/assets/img/talkseries/publicpolicy/image5.jpg" alt="Image 5" />
                    </div>
                    </div>
                </div>
            </section>
            <section className="bg-primary">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <h4 className="text-white text-center"></h4>
                        <ul className="entry_content text-white list-disc pl-5">
                        <li>Those aspiring to build a career in public life, public policy and administration, governance, media, journalism and communications, social sector, and other related fields.</li>
                        <li>Academicians, researchers, journalists and professionals, analysts, working in or following the fields mentioned above.</li>
                        <li>Young Indians, passionate about bringing about change in India.</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <div className="p-4 col-span-1">
                    <h5 className="text-primary text-center text-2xl font-bold py-2">
                        ARE YOU A CRITICAL THINKER AIMING TO BE A CREATIVE LEADER? <br /> GRAB YOUR SEAT
                    </h5>
                    </div>
                </div>
            </div>



        </MainLayout>
    )
}

export default PoliticalExperts;