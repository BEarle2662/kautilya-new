import MainLayout from "@/components/MainContainer/MainLayout";

function September(){
    return (
        <MainLayout>
            <section className="lets_talk bg-[#b51c21]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
                    <div className="mt-5">
                        <p className="eventoutline text-white text-lg border border-white inline-block p-2">PANEL DISCUSSION</p>
                        <div className="flex items-start panel">
                        <span><img src="/assets/img/talkseries/talkpolicy/quote_red.png" alt="Quote" /></span>
                        <p className="LTP-txt text-black text-4xl font-bold ml-3">
                            Let’s Talk <br />
                            <span className="font-bold mb-5">Policy</span>
                        </p>
                        </div>
                        <p className="LTP-tit text-white text-xl">“India’s Economic Recovery Roadmap”</p>
                        <p className="LTP-tit text-white text-xl"><span>In association with  </span>
                           <span><img src="/assets/img/talkseries/talkpolicy/Ficci-Logo.png" alt="Ficci Logo" /></span>
                        </p>
                        <div className="flex items-center panel_cal">
                        <span className="flex items-center">
                            <img src="/assets/img/talkseries/talkpolicy/calender_white.png" alt="Event Icon 1" />
                            <span className="LTP-tit text-white text-xl ml-3">Sep 18, 2021</span>
                        </span>
                        <span className="flex items-center ml-4">
                            <img src="/assets/img/talkseries/talkpolicy/time_white.png" alt="Event Icon 2" />
                            <span className="LTP-tit text-white text-xl ml-3">6 PM IST</span>
                        </span>
                        </div>
                    </div>

                    <div className="mt-5">
                        <img src="/assets/img/talkseries/talkpolicy/Banner.png" alt="Event Banner" />
                    </div>
                    </div>
                </div>
            </section>
            <section className="about_evnt">
                <div className="container mx-auto px-4 text-xl">
                    <h2 className="text-4xl font-bold mb-4">About the event</h2>
                    
                        <p>
                        The pandemic has left the national economy and businesses counting the costs as governments struggled with lockdown measures. India’s economy showed signs of recovery in July as manufacturing rebounded with the rise in domestic and international demand, prompting companies to create new jobs.
                        </p>
                        <p>
                        There is more good news in the offing, with exports reportedly witnessing a healthy rise as orders grew at the fastest rate since April, and employment has also increased, with the services sector providing 8.5 million additional jobs in August. While the country’s economy is recovering, rising inflation remains a major hurdle. A recent poll conducted by Reuters signals a further rise in inflation due to higher fuel prices.
                        </p>
                   
                        <p>
                        <b>With the current spike in COVID-19 cases in a few states, what turn will India’s economy take?</b>
                        </p>
                        <p>
                        Hear all about the economic roadmap and recovery from our expert panellists in this <b>Let’s Talk Policy</b> session – <b>Naina Lal Kidwai</b>, Former Head, HSBC, <b>Sangita Reddy</b>, Joint Managing Director, Apollo Hospital Group, and <b>Dilip Chenoy</b>, Secretary-General, FICCI.
                        </p>
                        <p>
                        The event was moderated by renowned journalist, <b>Nidhi Razdan.</b>
                        </p>
                    
                </div>
            </section>
            <section className="yellow_bg bg-[#ffaf00]">
                <div className="container mx-auto px-4 text-xl">
                   
                    <p>
                        <span className="font-semibold text-[#b51c21]">‘Let’s Talk Policy’</span> <b>is a panel discussion series initiated by Kautilya School of Public Policy</b>, that brings forth a select group of panellists, sharing differing views on key issues of national and global relevance, and building the dialogue into a conversation for the student community.
                    </p>
                    <p>
                        The series aims to unravel major themes around democracy, politics, and human rights, and explore the challenges and rewards of implementing practices. We aim to create a cohesive platform and call on thematic experts to foster a healthy dialogue around the most-pressing issues.
                    </p>
                  
                </div>
            </section>
            <section className="panellists bg-[url('/assets/img/talkseries/talkpolicy/november_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-8 text-center text-white">About the panellists</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-[#b2061c] p-4 rounded-lg shadow-lg relative ml-[30px] mt-[150px] pb-0 pl-[20px] pr-[20px]">
                        <img src="/assets/img/talkseries/talkpolicy/Nidi.png" alt="Nidhi Razdan" className="rounded-t-lg left-[118px] top-[-75px] w-[150px] absolute" />
                        <div className="p-4 text-white text-center">
                        <h5 className="text-xl font-semibold mt-20 ">Nidhi Razdan</h5>
                        <p className="text-sm text-white text-center">Visiting Faculty, Kautilya &amp;<br />Fmr. Exec. Editor NDTV</p>
                        <p className="text-sm font-medium text-black text-center bg-white inline-block p-2 text-lg font-medium">Moderator</p>
                        <p className="text-sm text-gray-600 text-white text-center text-lg">Nidhi Razdan (Moderator) is an award-winning journalist, author and the former Executive Editor of…</p>
                        <p className="text-white text-center"><a className="text-blue-500 hover:underline text-white text-center" href="#">Read more</a></p>
                        </div>
                    </div>

                    <div className="bg-black p-4 rounded-lg shadow-lg relative ml-[30px] mt-[150px] pb-0 pl-[20px] pr-[20px] border-4 border-white">
                        <img src="/assets/img/talkseries/talkpolicy/Dilip-Chenoy_circle.png" alt="Anumita Roy Chowdhury" className="absolute left-[118px] top-[-75px] w-[150px]" />
                        <div className="p-4 text-center">
                        <h5 className="text-xl font-semibold mt-20 text-[#b2061c]">Dilip Chenoy</h5>
                        <p className="text-sm text-white text-center">Secretary General,<br/>
                        FICCI</p>
                        <p className="text-sm font-medium text-white text-center">-------</p>
                        <p className="text-sm text-white text-center">Dilip Chenoy leads the permanent secretariat of FICCI, which is the largest and oldest apex …</p>
                        <p className="text-white text-center"><a className="hover:underline text-white text-center" href="#">Read more</a></p>
                        </div>
                    </div>

                    <div className="bg-black p-4 rounded-lg shadow-lg relative ml-[30px] mt-[150px] pb-0 pl-[20px] pr-[20px] border-4 border-white">
                        <img src="/assets/img/talkseries/talkpolicy/Dr.-Sangita-Redy_circle.png" alt="Jyoti Pande Lavakare" className="absolute left-[118px] top-[-75px] w-[150px]" />
                        <div className="p-4 text-center">
                        <h5 className="text-xl font-semibold mt-20 text-[#b2061c]">Dr. Sangita Reddy</h5>
                        <p className="text-sm text-white text-center">Joint Managing Director,<br/>
                        Apollo Hospitals</p>
                        <p className="text-sm font-medium text-white text-center">-----</p>
                        <p className="text-sm text-white text-center">Dr. Sangita Reddy is a Global Healthcare influencer and likes to be known as a healthcare…</p>
                        <p className="text-white text-center"><a className="hover:underline text-white text-center" href="#">Read more</a></p>
                        </div>
                    </div>

                    <div className="bg-[#b2061c] p-4 rounded-lg shadow-lg relative ml-[30px] mt-[150px] pb-0 pl-[20px] pr-[20px]">
                        <img src="/assets/img/talkseries/talkpolicy/Naina-Lal-Kidwai.png" alt="Bhargav Krishna" className="rounded-t-lg left-[118px] top-[-75px] w-[150px] absolute"/>
                        <div className="p-4 text-center">
                        <h5 className="text-xl font-semibold mt-20 text-white">Naina Lal Kidwai</h5>
                        <p className="text-sm text-white text-center">Former Head, HSBC</p>
                        <p className="text-sm font-medium text-white text-center">-----</p>
                        <p className="text-sm text-white text-center">Naina Lal Kidwai is an Indian banker, chartered accountant and business executive. She was…</p>
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
                    Academicians, researchers, and journalists working in or following the fields mentioned above.
                    </p>
                    <p className="mb-2 text-white">
                    Those watching the unfolding Afghanistan crisis closely – and are keen to hear from experts with relevant experience at the highest level.
                    </p>
                </div>
            </section>




        </MainLayout>
    )
}

export default September;