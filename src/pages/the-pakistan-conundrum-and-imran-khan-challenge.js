import MainLayout from "@/components/MainContainer/MainLayout";

function PakistanConundrum(){
    return (
        <MainLayout>
            <section className="pakImran py-22 bg-[url('/assets/img/talkseries/talkpolicy/pakistan_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-4">
                    <div className="p-3 m-3 col-span-1"></div>
                    <div className="col-span-1 text-left">
                        <h4 className="text-black text-3xl mb-8">Let’s Talk Policy</h4>
                        <h4 className="text-4xl font-bold leading-tight mt-4 text-[#b51c21]">
                        <span className="text-black font-light">The</span> Pakistan<br />
                        Conundrum<br />
                        <span className="text-black font-light">and</span> Imran Khan<br /> Challenge
                        </h4>
                        <h4 className="text-lg mt-12 text-[#b51c21]">
                        May 26, 2023 (Via Zoom) <br />
                        07:00 pm – 8:00 pm IST
                        </h4>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/1.png" alt="Image 1" class="max-w-[75%] h-auto align-top mx-auto sm:m-0"/>
                    </div>
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/2.png" alt="Image 2" class="max-w-[75%] h-auto align-top mx-auto sm:m-0"/>
                    </div>
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/3.png" alt="Image 3" class="max-w-[75%] h-auto align-top mx-auto sm:m-0"/>
                    </div>
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/4.png" alt="Image 4" class="max-w-[75%] h-auto align-top mx-auto sm:m-0"/>
                    </div>
                    </div>
                </div>
            </section>
            <section className="bg-primary p-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-1">
                        <h4 className="eventsubtitle-lineheight2 text-white text-left text-2xl mb-3 font-bold">
                        NAVIGATING THROUGH THE TURMOIL OF PAKISTAN’S POLITICS
                        </h4>
                        <div className="heading_border_white mb-4"></div>
                    </div>
                    <div className="col-span-1">
                        <p className="text-white">
                        The Pakistan government’s intended action against former Prime Minister Imran Khan and the alleged backlash from his supporters has ravaged the country over the past few weeks. His detention in Islamabad set off a wave of protests that resulted in several deaths and widespread destruction of property. However, things escalated further when he was ordered to be released the next day. Supporters of the ruling coalition decried the judgment of the Chief Justice and took to the streets demanding his ouster.
                        </p>
                        <p className="text-white">
                        These events are the latest in Pakistan’s turbulent political history. Join our expert panel, moderated by Smita Sharma, as it decodes the role of each stakeholder in Pakistan’s realpolitik and their ambitions.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-1">
                        <h4 className="pseudo_border mb-3">WHAT WILL THE SESSION ADDRESS</h4>
                        <div className="heading_border mb-4"></div>
                    </div>
                    <div className="col-span-1">
                        <ul className="entry_content">
                        <li>What could be the Pakistan government’s next course of action?</li>
                        <li>What are the options for the Pakistan Army, which is smarting over the attack on its installations during the protests?</li>
                        <li>What is the impact of this situation on the country’s economy?</li>
                        <li>What role can multilateral institutions play in brokering peace?</li>
                        <li>What is the impact on Pakistan’s global standing and relations?</li>
                        <li>Can Pakistan’s latest imbroglio clean the slate for a stable regime?</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            <section className="section_bg">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-1">
                        <h4 className="pseudo_border mb-3">WHO SHOULD ATTEND</h4>
                        <div className="heading_border mb-4"></div>
                    </div>
                    <div className="col-span-1">
                        <ul className="entry_content">
                        <li>UPSC aspirants</li>
                        <li>Think tanks, NGOs focused on foreign policy</li>
                        <li>Members of foreign trade organizations</li>
                        <li>Students of foreign policy/international relations</li>
                        <li>Citizens passionate about global foreign policy</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        </MainLayout>
           
    )
}

export default PakistanConundrum;