import MainLayout from "@/components/MainContainer/MainLayout";

function IndiaEconomy(){
    return (
        <MainLayout>
            <section className="economyInflation bg-[url('/assets/img/talkseries/talkpolicy/economic_bg.jpg')] bg-center bg-no-repeat bg-cover min-h-[750px] py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col space-y-6">
                    <div className="m-3 p-3">
                        {/* Empty space div, can be removed if not needed */}
                    </div>
                    <div className="flex flex-col items-left">
                        <div className="top-div text-left">
                        <img src="/assets/img/talkseries/talkpolicy/quote.png" className="w-24" alt="Quote" />
                        <h4 className="cus-public text-white text-3xl mt-4 mb-8">
                            Let’s Talk Policy
                        </h4>
                        <h4 className="k-h2 font-semibold text-white mt-2 text-4xl mb-8">
                            Decrypting Crypto- How<br />Should India Regulate<br />Cryptocurrency?
                        </h4>
                        <h4 className="cus-time text-white mt-2 text-xl">
                            07:00 pm – 8:00 pm IST | November 21st
                        </h4>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col">
                    <div className="col-xl-12">
                        <p className="text-center">
                        India’s economic growth slowed to the lowest in a year in the first three months of 2022, hit by weakening consumer demand amid soaring prices that could make the central bank’s task of taming inflation without harming growth more difficult. RBI has raised its inflation forecast to 6.7 per cent for the financial year 2022-23 from an earlier estimate of 5.7 per cent. Consumer Price Index (CPI) based inflation, which the RBI factors in while arriving at its monetary policy, galloped for the seventh straight month to touch an 8-year high of 7.79 per cent in April. The RBI raised the interest rate by 50 basis points to a two-year high of 4.9 per cent as it doubled down to tame inflation that has surged in the last couple of months.
                        </p>
                        <p className="text-center mt-4">
                        Let’s talk policy is a series of discussions by Kautilya School of Public Policy, that brings together speakers and experts from various fields. Here they share insights on national and global issues and build a conversation for the student community. Up for discussion are major themes around democracy, politics and human rights.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto px-4">
                    <div className="flex">
                    <div className="w-full">
                        <img src="/assets/img/talkseries/talkpolicy/speakers_bg.jpg" alt="Economy Inflation" class="max-w-[90%] h-auto align-top" />
                    </div>
                    </div>
                </div>
            </section>
            <section className="economyInflation2 bg-[url('/assets/img/talkseries/talkpolicy/economic_middle_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                    <div className="hidden xl:block xl:w-1/4"></div>
                    <div className="xl:w-3/4">
                        <div className="ms-auto">
                        <h4 className="pseudo_border mb-3">What will be discussed?</h4>
                        <ul className="entry_content">
                            <li>Legislation regarding the prevention of stagflation</li>
                            <li>Frameworks for steps to be taken by the RBI to tackle inflation</li>
                            <li>Impact of the Russia-Ukraine war on the economy</li>
                            <li>The card tokenisation policy that is to be implemented</li>
                            <li>Monitoring bodies to keep track of the economy and its state on a day-to-day basis</li>
                            <li>Public initiatives and concerns about the falling cryptocurrency markets</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto p-5">
                    <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="ms-auto">
                        <h4 className="pseudo_border mb-4">What will be discussed?</h4>
                        <ul className="entry_content">
                            <li>Young Indians who are committed to bringing about change and building India.</li>
                            <li>Those aspiring to build a career in public policy, public administration, social sector, journalism, mass communications, and other related fields.</li>
                            <li>Academicians, researchers, journalists, professionals working in or following the fields mentioned above.</li>
                            <li>Economists, investors, business owners, and everyone wishing to get a grip on the current scenario of the economy and the new policies that are to be implemented.</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


        </MainLayout>
    )
}

export default IndiaEconomy;