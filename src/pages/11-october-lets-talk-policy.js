import MainLayout from "@/components/MainContainer/MainLayout";

function October(){
    return (
        <MainLayout>
            <section className="lets_talk oct_talk bg-[url('/assets/img/talkseries/talkpolicy/november_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto px-4">
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Left Column */}
                    <div className="mt-5">
                        <p className="eventoutline text-white text-lg border border-white inline-block p-2">PANEL DISCUSSION</p>
                        <div className="flex items-center mb-4">
                        <span>
                            <img src="/assets/img/talkseries/talkpolicy/quote_red.png" alt="Quote" />
                        </span>
                        <p className="LTP-txt ml-2 text-white text-2xl">
                            Let’s Talk <br />
                            <span className="font-bold mb-5">Policy</span>
                        </p>
                        </div>
                        <p className="LTP-tit text-white text-2xl">New W.H.O norms on Air Quality</p>
                        <p className="LTP-tit text-white text-2xl">What can India do for clean air?</p>
                        <div className="flex items-center mt-4">
                        <span className="flex items-center mr-4">
                            <img src="/assets/img/talkseries/talkpolicy/calender_white.png" alt="Calendar" />
                            <span className="LTP-tit ml-2 text-white text-xl">October 11, 2021</span>
                        </span>
                        <span className="flex items-center">
                            <img src="/assets/img/talkseries/talkpolicy/time_white.png" alt="Clock" />
                            <span className="LTP-tit ml-2 text-white text-xl">7 PM IST</span>
                        </span>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="mt-5">
                        <img src="/assets/img/talkseries/talkpolicy/Banner_LP.png" alt="Banner" />
                    </div>
                    </div>
                </div>
            </section>
            <section className="lets_talk modarate bg-[#b51c21]">
                <div className="container mx-auto px-4">
                    <div className="flex items-end">
                    <img src="/assets/img/talkseries/talkpolicy/img-11.png" alt="Nidhi Razdan" className="w-1/3" />
                    <div className="ml-3">
                        <h4 className="text-lg font-semibold text-white text-4xl">EVENT MODERATED BY</h4>
                        <h5 className="text-xl font-bold  text-white">Nidhi Razdan</h5>
                        <p className="text-base  text-white">
                        Visiting Faculty, Kautilya<br />
                        Former Executive Editor, NDTV
                        </p>
                    </div>
                    </div>
                </div>
            </section>
            <section className="about_evnt bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4">About the event</h2>
                    <p className="text-base text-gray-700 mb-4">
                    A recently released WHO report states that air pollution exposure is estimated to cause 7 million premature deaths globally every year! It further elaborates that almost all of the global population (99%) breathes air that exceeds WHO guideline limits. Further, the combined effects of ambient (outdoor) and household air pollution have increased mortality rates from stroke, heart disease, chronic obstructive pulmonary disease, lung cancer, and acute respiratory infections.
                    </p>
                    <p className="text-base text-gray-700 mb-4">
                    In a bid to support countries to address air pollution, WHO has recently released stringent air quality guidelines, lowering the recommended levels of pollutants that can be considered safe for human health. The new guidelines recommend new air quality levels to protect the health of populations by reducing levels of key air pollutants, some of which also contribute to climate change. The goal of the guideline is for all countries to achieve recommended air quality levels, but the reality is far-fetched.
                    </p>
                    <p className="text-base text-gray-700 font-bold mb-4">
                    Will all countries and regions struggling with high air pollution levels be able to adapt to these guidelines?
                    </p>
                    <p className="text-base text-gray-700 mb-4">
                    In this Let’s Talk Policy session, we catch up with environmentalists <b>Anumita Roy Chowdhury</b>, Executive Director, Research and Advocacy, Centre for Science &amp; Environment; <b>Jyoti Pande Lavakare</b>, Co-founder, Care for Air; and <b>Bhargav Krishna</b>, Fellow, Centre for Policy Research to understand how different regions will be impacted.
                    </p>
                    <p className="text-base text-gray-700 mb-4">
                    The event was moderated by renowned journalist, <b>Nidhi Razdan.</b>
                    </p>
                </div>
            </section>
            <section className="yellow_bg bg-[#ffaf00]">
                <div className="container mx-auto px-4">
                    <p className="text-base text-gray-800 mb-4 text-xl">
                    <span className="font-bold text-[#b51c21]">‘Let’s Talk Policy’</span> <b>is a panel discussion series initiated by Kautilya School of Public Policy</b>, that brings forth a select group of panellists, sharing differing views on key issues of national and global relevance, and building the dialogue into a conversation for the student community.
                    </p>
                    <p className="text-base text-gray-800 mb-4 text-xl">
                    The series aims to unravel major themes around democracy, politics, and human rights, and explore the challenges and rewards of implementing practices. We aim to create a cohesive platform and call on thematic experts to foster a healthy dialogue around the most pressing issues.
                    </p>
                </div>
            </section>
            <section className="panellists bg-[url('/assets/img/talkseries/talkpolicy/november_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-8 text-center text-white">About the panellists</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-[#b2061c] p-4 rounded-lg shadow-lg relative ml-[30px] mt-[150px] pb-0 pl-[20px] pr-[20px]">
                        <img src="/assets/img/talkseries/talkpolicy/Nidi.png" alt="Nidhi Razdan" className="w-full rounded-t-lg left-[118px] top-[-75px] w-[150px] absolute" />
                        <div className="p-4 text-white text-center">
                        <h5 className="text-xl font-semibold mt-20 ">Nidhi Razdan</h5>
                        <p className="text-sm text-white text-center">Visiting Faculty, Kautilya &amp;<br />Fmr. Exec. Editor NDTV</p>
                        <p className="text-sm font-medium text-black text-center bg-white inline-block p-2 text-lg font-medium">Moderator</p>
                        <p className="text-sm text-gray-600 text-white text-center text-lg">Nidhi Razdan (Moderator) is an award-winning journalist, author and the former Executive Editor of…</p>
                        <p className="text-white text-center"><a className="text-blue-500 hover:underline text-white text-center" href="#">Read more</a></p>
                        </div>
                    </div>

                    <div className="bg-black p-4 rounded-lg shadow-lg relative ml-[30px] mt-[150px] pb-0 pl-[20px] pr-[20px] border-4 border-white">
                        <img src="/assets/img/talkseries/talkpolicy/Dilip-Chenoy_circle.png" alt="Anumita Roy Chowdhury" className="w-full absolute left-[118px] top-[-75px] w-[150px]" />
                        <div className="p-4 text-center">
                        <h5 className="text-xl font-semibold mt-20 text-[#b2061c]">Anumita Roy Chowdhury</h5>
                        <p className="text-sm text-white text-center">Exec Dir., Research and Advocacy,<br />Center for Science &amp; Env.</p>
                        <p className="text-sm font-medium text-white text-center">-------</p>
                        <p className="text-sm text-white text-center">Anumita Roy Chowdhury is the Executive Director, Research and Advocacy, at the Center for…</p>
                        <p className="text-white text-center"><a className="hover:underline text-white text-center" href="#">Read more</a></p>
                        </div>
                    </div>

                    <div className="bg-black p-4 rounded-lg shadow-lg relative ml-[30px] mt-[150px] pb-0 pl-[20px] pr-[20px] border-4 border-white">
                        <img src="/assets/img/talkseries/talkpolicy/Jyoti_Pande_Lavakare.png" alt="Jyoti Pande Lavakare" className="w-full absolute left-[118px] top-[-75px] w-[150px]" />
                        <div className="p-4 text-center">
                        <h5 className="text-xl font-semibold mt-20 text-[#b2061c]">Jyoti Pande Lavakare</h5>
                        <p className="text-sm text-white text-center">Co-founder, Care for Air</p>
                        <p className="text-sm font-medium text-white text-center">-----</p>
                        <p className="text-sm text-white text-center">Jyoti Pande Lavakare is a columnist, financial journalist and writer who has lived and worked….</p>
                        <p className="text-white text-center"><a className="hover:underline text-white text-center" href="#">Read more</a></p>
                        </div>
                    </div>

                    <div className="bg-[#b2061c] p-4 rounded-lg shadow-lg relative ml-[30px] mt-[150px] pb-0 pl-[20px] pr-[20px]">
                        <img src="/assets/img/talkseries/talkpolicy/Bhargav_Krishna.png" alt="Bhargav Krishna" className="w-full rounded-t-lg left-[118px] top-[-75px] w-[150px] absolute"/>
                        <div className="p-4 text-center">
                        <h5 className="text-xl font-semibold mt-20 text-white">Bhargav Krishna</h5>
                        <p className="text-sm text-white text-center">Fellow, Centre for Policy Research</p>
                        <p className="text-sm font-medium text-white text-center">-----</p>
                        <p className="text-sm text-white text-center">Bhargav Krishna is a Fellow at the Centre for Policy Research. His research interests span….</p>
                        <p className="text-white text-center"><a className="hover:underline " href="#">Read more</a></p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="attendees bg-[url('/assets/img/talkseries/talkpolicy/november_footer_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4 text-white">Attendees</h2>
                   
                        <p className="mb-2 text-white">
                        Young Indians, passionate about bringing about positive change and building India.
                        </p>
                   
                    
                        <p className="mb-2 text-white">
                        Those aspiring to build a career in public life, public policy and administration, social sector, media, journalism and communications, politics, and other related fields.
                        </p>
                    
                        <p className="mb-2 text-white">
                        Academicians, researchers and journalists working in or following the fields mentioned above.
                        </p>
                    
                        <p className="mb-2 text-white">
                        Those watching the unfolding Afghanistan crisis closely – and are keen to hear from experts with relevant experience at the highest level.
                        </p>
                   
               
                </div>
            </section>
            <section className="bg-black text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                    <p className="text-white text-3xl text-center">
                        Sign-up for this exclusive panel discussion TODAY.<br />
                        Hear fresh perspectives from some of India’s most revered personalities!
                    </p>
                    </div>
                </div>
            </section>

        </MainLayout>
    )
}

export default October;