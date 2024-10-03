import MainLayout from "@/components/MainContainer/MainLayout";

function Budget2023(){
    return (
        <MainLayout>
             <section className="budget bg-gray-800 py-8 bg-[url('/assets/img/talkseries/talkpolicy/budget_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
                    <div className="col-span-12 p-3 m-3"></div>
                    <div className="col-span-2"></div>
                    <div className="col-span-10">
                        <div className="top-div text-white">
                        <h4 className="cus-public text-4xl font-large mb-14">Let’s Talk Policy</h4>
                        <h4 className="eventsubtitle-lineheighttit pseudo_border2 mt-4 text-5xl font-semibold mb-8">
                            Budget 2023 – <br />
                            Reading the<br />
                            fine print
                        </h4>
                        <h4 className="cus-time mt-4 text-2xl mb-12">
                            February 28, 2023<br />
                            7:00 pm – 8:00 pm IST
                        </h4>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/vinod.jpg" alt="Budget Image 1" class="max-w-[75%] h-auto align-top  mx-auto sm:m-0" />
                    </div>
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/mitali.jpg" alt="Budget Image 2" class="max-w-[75%] h-auto align-top  mx-auto sm:m-0" />
                    </div>
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/venu.jpg" alt="Budget Image 3" class="max-w-[75%] h-auto align-top  mx-auto sm:m-0"/>
                    </div>
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/smita_sharma.jpg" alt="Budget Image 4" class="max-w-[75%] h-auto align-top  mx-auto sm:m-0" />
                    </div>
                    </div>
                </div>
            </section>
            <section className="budget2 bg-[url('/assets/img/talkseries/talkpolicy/budget_middle_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-12">
                        <h4 className="text-white text-3xl font-bold eventsubtitle-lineheight2 mb-3">
                        UNION BUDGET 2023 – SWANSONG OR A CLARION CALL?
                        </h4>
                        <div className="heading_border_white mb-4"></div>
                        <p className="text-white text-lg mt-4">
                        Revised income tax slabs, the highest-ever capital expenditure of Rs 10 Lakh Crore, and a strong emphasis on a green economy; the government’s final budget ahead of the 2024 general elections has set off the ticker-tape of analysis, commentary, and debate. Find out from our experts what these allocations mean for employment generation, personal finance, and infrastructure, among other key parameters.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-12">
                        <h4 className="text-2xl font-bold pseudo_border mb-3">WHAT THE SESSION WILL ADDRESS</h4>
                        <div className="heading_border mb-4"></div>
                    </div>
                    <div className="col-span-12">
                        <ul className="entry_content">
                        <li>Will the massive capital outlay in infrastructure, green growth, and tech-enabled projects be a stimulant for job creation?</li>
                        <li>Does the new tax regime tick the right boxes?</li>
                        <li>Does the new regime hurt the tax-paying middle class more?</li>
                        <li>Will there be a substantial shift to the new income tax regime?</li>
                        <li>Will the allocations provide relief or add to the burden of poor and middle-income citizens?</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            <section className="section_bg py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-12">
                        <h4 className="text-2xl font-bold pseudo_border mb-3">WHO SHOULD ATTEND?</h4>
                        <div className="heading_border mb-4"></div>
                    </div>
                    <div className="col-span-12">
                        <ul className="entry_content">
                        <li>Members of industrial organizations</li>
                        <li>Students of foreign trade, business, policy, and international relations</li>
                        <li>Aspiring journalists, researchers, academicians, professionals</li>
                        <li>Political commentators, public service professionals and aspirants</li>
                        <li>Entrepreneurs</li>
                        <li>Business owners</li>
                        <li>Tax professionals</li>
                        <li>Legal professionals</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Budget2023;