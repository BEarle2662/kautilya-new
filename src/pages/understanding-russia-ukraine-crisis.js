import MainLayout from "@/components/MainContainer/MainLayout";

function Russia(){
    return (
        <MainLayout>
             <section className="bg-russiaUkrain bg-[url('/assets/img/talkseries/talkpolicy/r_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-5">
                    <div className="col-span-1 p-5 m-5"></div>
                    <div className="col-span-1 text-left font-semibold">
                        <h5 className="text-4xl text-white">PANEL DISCUSSION:</h5>
                        <h6 className="text-4xl text-white mt-2">
                        UNDERSTANDING <br /> RUSSIA-UKRAINE CRISIS
                        </h6>
                        <p className="text-2xl text-white mt-8 text-light">March 9th, 2022 | 7PM – 8PM</p>
                    </div>
                    </div>
                </div>
            </section>
             <section className="bg-russiaUkrain2 bg-[url('/assets/img/talkseries/talkpolicy/r_sep_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {/* First set of speakers */}
                    <div className="mx-auto col-span-1 xl:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        <div className="text-center">
                            <img src="/assets/img/talkseries/talkpolicy/r_syed.png" alt="Amb. Syed Akbaruddin" class="max-w-[75%] h-auto align-top  mx-auto sm:m-0" />
                            <p className="k-eventcard5-title font-bold text-white mt-3">Amb. Syed Akbaruddin</p>
                            <p className="k-eventcard5-desig text-white font-bold">Fmr. Permanent Rep. of India to the UN; Dean, Kautilya</p>
                        </div>
                        <div className="text-center">
                            <img src="/assets/img/talkseries/talkpolicy/r_venkatesh.png" alt="Amb. D. B. Venkatesh Varma" class="max-w-[75%] h-auto align-top  mx-auto sm:m-0" />
                            <p className="k-eventcard5-title text-white font-bold mt-3">Amb. D. B. Venkatesh Varma</p>
                            <p className="k-eventcard5-desig text-white font-bold">
                            (IFS:1988), recently retired Indian Ambassador to Russia; Lectures occasionally at Kautilya
                            </p>
                        </div>
                        <div className="text-center">
                            <img src="/assets/img/talkseries/talkpolicy/r_venkatesh.png" alt="Prateek Kanwal" class="max-w-[75%] h-auto align-top  mx-auto sm:m-0" />
                            <p className="k-eventcard5-title text-white mt-3 font-bold">Prateek Kanwal</p>
                            <p className="k-eventcard5-desig text-white font-bold">
                            Project Director at Ekatrit – Educate Girls;<br/> Co-Founder, Kautilya
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Third speaker */}
                  
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                    <div className="col-span-1 mb-4">
                        <h5 className="text-primary text-lg">
                        Listen to India's former UN representative and India's former Ambassador to the Russian Federation discuss:
                        </h5>
                    </div>
                    <div className="col-span-1">
                        <ul className="entry_content">
                        <li>Background and history of the current crisis in Ukraine.</li>
                        <li>What accounts for the Russian Intervention?</li>
                        <li>Is the Russian action a breach of International Law?</li>
                        <li>Regional implications in Europe.</li>
                        <li>Role of NATO in the current situation.</li>
                        <li>Global Implications – Political and Economic.</li>
                        <li>What should India’s stand at the UN Security Council be?</li>
                        <li>Importance of the role of the UN.</li>
                        <li>Are we witnessing a return to the Cold War?</li>
                        <li>Concerns of the former Soviet states.</li>
                        <li>What next?</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            <section className="bg-russiaUkrain3 bg-[url('/assets/img/talkseries/talkpolicy/r_footer_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                    <div className="col-span-1 mb-5">
                        <h4 className="text-white text-4xl">Who should attend?</h4>
                    </div>
                    <div className="col-span-1">
                        <ul className="entry_content text-white">
                        <li>Those keen in public life, public policy &amp; administration, international relations governance, media, journalism &amp; communications, politics, and other related fields.</li>
                        <li>Those wanting to pursue careers in international organizations.</li>
                        <li>Those seeking clarity on what information to absorb &amp; how to process it with respect to the current situation in Ukraine.</li>
                        <li>Academicians, researchers, journalists and professionals working in, or following the fields mentioned above.</li>
                        <li>Young Indians who are keen to understand how geo-politics plays out and desire to bring about change.</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            
        </MainLayout>
    )
}

export default Russia;