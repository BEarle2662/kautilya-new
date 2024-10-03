import MainLayout from "@/components/MainContainer/MainLayout";

function WorkforceIncrease(){
    return (
        <MainLayout>
            <section className="womenWork bg-[url('/assets/img/talkseries/talkpolicy/workforce_img.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6">
                    <div className="m-3 p-3 col-span-1">
                        {/* You can add any content here if needed */}
                    </div>
                    <div className="col-span-1">
                        <div className="top-div text-left">
                        <h4 className="cus-public text-black text-3xl font-normal mb-8">
                            Let’s Talk Policy
                        </h4>
                        <h4 className="k-h2 gitam-color eventsubtitle-lineheighttit text-[#b51c21] text-4xl font-semibold mb-8">
                            How can we increase<br />the number of women<br />in the workforce?
                        </h4>
                        <h4 className="cus-time k-h2-white text-xl">
                            <span className="bg-black text-white px-2 py-1 rounded">
                            March 30, 2023
                            </span><br />
                            <span className="bg-black text-white px-2 py-1 rounded">
                            7:00 pm – 8:00 pm IST
                            </span>
                        </h4>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/vasudha.png" alt="Women Work Force 1" class="max-w-[75%] h-auto align-top mx-auto sm:m-0"/>
                    </div>
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/shaili.png" alt="Women Work Force 2" class="max-w-[75%] h-auto align-top mx-auto sm:m-0"/>
                    </div>
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/mahesh.png" alt="Women Work Force 3" class="max-w-[75%] h-auto align-top mx-auto sm:m-0"/>
                    </div>
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/nidhi_raz.png" alt="Women Work Force 4" class="max-w-[75%] h-auto align-top mx-auto sm:m-0"/>
                    </div>
                    </div>
                </div>
            </section>
            <section className="womenWork2  bg-[url('/assets/img/talkseries/talkpolicy/workforce_middle_img.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6">
                    <div className="col-span-1 text-left">
                        <h4 className="eventsubtitle-lineheight2 text-white font-bold text-3xl mb-3">
                        WOMEN WORKFORCE PARTICIPATION IN INDIA – A STORY OF INVERSE GROWTH?
                        </h4>
                        <div className="heading_border_white mb-4"></div>
                        <p className="text-white text-base">
                        India’s meteoric rise on the global stage leads to the presumption that the workforce participation of half its population is increasing. A close look at the numbers paints a much grimmer picture: India ranks 135th out of 146 countries in the World Economic Forum’s Global Gender Gap Index for 2022. What led to the present-day scenario where only one out of five women has formal employment? Watch our panel of Industry experts and academia, moderated by renowned journalist Nidhi Razdan, translate what the numbers mean and deliberate on policy gaps.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6">
                    <div className="col-span-1 text-left">
                        <h4 className="pseudo_border font-bold text-xl mb-3">WHAT WILL BE COVERED</h4>
                        <div className="heading_border mb-4"></div>
                    </div>
                    <div className="col-span-1">
                        <ul className="entry_content">
                        <li>Despite India’s rise on the global stage, what is the actual female workforce participation?</li>
                        <li>Why has women’s workforce participation slipped to 19 percent in 2021 from 30 percent in 1990?</li>
                        <li>What caused female workforce participation to dip over the last two decades?</li>
                        <li>What are the roadblocks in a woman’s career? Are there any solutions?</li>
                        <li>Are there any policies framed to arrest the plunging numbers?</li>
                        <li>Are these policies effective?</li>
                        <li>What are the demand, supply, and structural reforms we need to increase participation?</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6">
                    <div className="col-span-1 text-left">
                        <h4 className="pseudo_border font-bold text-xl mb-3">WHO SHOULD ATTEND?</h4>
                        <div className="heading_border mb-4"></div>
                    </div>
                    <div className="col-span-1">
                        <ul className="entry_content">
                        <li>Business owners</li>
                        <li>Human resources and staffing professionals</li>
                        <li>Gender studies students</li>
                        <li>Research and activist groups focusing on gender studies</li>
                        <li>Management professionals</li>
                        <li>Aspiring journalists</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default WorkforceIncrease;