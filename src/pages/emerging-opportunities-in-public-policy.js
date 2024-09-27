import MainLayout from "@/components/MainContainer/MainLayout";

function EmergingPublicPolicy(){
    return (
        <MainLayout>
             <section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <h5 className="text-2xl font-semibold">Emerging opportunities <br /> in public policy</h5>
                    </div>
                    </div>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="col-span-1 md:col-span-2">
                        <img src="/assets/img/events/publicpolicy/emerging.png" alt="Emerging Opportunities" />
                    </div>
                    <div className="col-span-1 md:col-span-9">
                        <div className="text_emerging">
                        <p>Join the</p>
                        <h6 className="text-xl font-bold">ASK ME ANYTHING</h6>
                        <p>
                            on public policy careers with<br />
                            <span className="name_text font-semibold">Prateek Kanwal</span><br />
                            Co-Founder, Kautilya School<br />
                            of Public Policy
                        </p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2"></div>
                    <div className="col-span-1 md:col-span-10">
                        <p className="schedule">May 19, Friday<br />7:00 PM to 8:30 PM (Via Zoom)</p>
                    </div>
                    </div>
                </div>
                </section>
                <section className="section_bg py-12">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1">
                        <div className="col-span-1 text-bold">
                            <p>
                            The socioeconomic problems of today require expertise in disciplines such as econometrics, design thinking, public administration, and trade policy – to name a few. Businesses and governments are actively scoping for subject matter experts to build accountability and spearhead growth. Specialists who can struggle the legislation, commerce, people, and development disciplines are crucial to the nation’s growth trajectory.
                            </p>
                            <p className="mt-4">
                            Join our Co-Founder Prateek Kanwal for an Ask Me Anything session on how you can start acquiring the skill sets and industry competencies to steer progress the right way. Mr. Kanwal’s decades-long journey can serve as a great diving board for young Indians passionate about driving waves of change globally.
                            </p>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="bg-white">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1">
                        <div className="col-span-1 text-left mb-4">
                            <h4 className="pseudo_border mb-3">
                            WHAT THE SESSION WILL ADDRESS
                            </h4>
                            <div className="heading_border mb-4"></div>
                        </div>
                        <div className="col-span-1">
                            <ul className="entry_content">
                            <li>How the MPP prepares you for global career avenues?</li>
                            <li>What does the policymaking growth pathway look like?</li>
                            <li>What sets Kautilya’s curriculum apart?</li>
                            <li>What facilities are available on campus?</li>
                            <li>Does Kautilya have internship and placement assistance?</li>
                            <li>What should I keep in mind to submit the perfect application form?</li>
                            <li>Does Kautilya provide scholarships?</li>
                            <li>Why is the MPP a more focused approach to policymaking?</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="section_bg">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1">
                            <div className="col-span-1 text-left mb-4">
                                <h4 className="pseudo_border mb-3">
                                WHO SHOULD ATTEND?
                                </h4>
                                <div className="heading_border mb-4"></div>
                            </div>
                            <div className="col-span-1">
                                <ul className="entry_content">
                                <li>Those aspiring to build a career in public life, public policy, governance and administration, the social sector, and other related fields</li>
                                <li>Academicians, researchers, and other professionals in relevant sectors</li>
                                <li>Young Indians who want to build a better India</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </section>
        </MainLayout>
    )
}
export default EmergingPublicPolicy;