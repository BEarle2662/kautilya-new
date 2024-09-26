import MainLayout from "@/components/MainContainer/MainLayout";

function Crypto(){
    return (
        <MainLayout>
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <div className="col">
                    <p className="text-right mt-3">
                        <a className="inline-block px-4 text-black font-bold">
                        INVITE US TO A COLLEGE WEBINAR
                        </a>
                    </p>
                    </div>
                </div>
            </div>
            <section className="crypto bg-[url('/assets/img/talkseries/talkpolicy/crypto_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                    <div className="m-3 p-3 col-span-1">
                        {/* Empty div for spacing, if needed */}
                    </div>
                    <div className="col-span-1">
                        <div className="top-div text-left">
                        <img src="/assets/img/talkseries/talkpolicy/quote.png" alt="Quote" className="w-32 mb-12" />
                        <h4 className="cus-public text-white text-3xl mb-8">
                            Let’s Talk Policy
                        </h4>
                        <h4 className="k-h2 eventsubtitle-lineheighttit text-white text-4xl font-semibold mb-8">
                            Decrypting Crypto- How<br />Should India Regulate<br />Cryptocurrency?
                        </h4>
                        <h4 className="cus-time text-white text-xl">
                            07:00 pm – 8:00 pm IST | November 21st
                        </h4>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/zaki.jpg" alt="Crypto Image 1" class="max-w-[75%] h-auto align-top"/>
                    </div>
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/prashant.jpg" alt="Crypto Image 2" class="max-w-[75%] h-auto align-top"/>
                    </div>
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/meghna.jpg" alt="Crypto Image 3" class="max-w-[75%] h-auto align-top"/>
                    </div>
                    <div className="col-span-1">
                        <img src="/assets/img/talkseries/talkpolicy/crypto_smita.jpg" alt="Crypto Image 4" class="max-w-[75%] h-auto align-top"/>
                    </div>
                    </div>
                </div>
            </section>
            <section className="crypto2 bg-[url('/assets/img/talkseries/talkpolicy/crypto_middle_bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                    <div className="col-span-1 my-5">
                        <h4 className="eventsubtitle-lineheight2 text-white font-bold text-2xl mb-3">
                        <strong>What will be discussed</strong>
                        </h4>
                        <div className="heading_border_white mb-4"></div>
                        <p className="text-white">
                        The draft Cryptocurrency and Regulation of Official Digital Currency Bill, 2021, declares that the mining, holding, selling, issuing, transfer or use of cryptocurrency by Indians will attract a maximum imprisonment of 10 years. However, this draft bill is still in limbo as Parliament keenly watches the global headwinds, which means although cryptocurrency is not banned in India, it is still an unregulated sector.
                        </p>
                        <p className="text-white">
                        We are yet to decide on our fate on whether we join the league of countries like China, Thailand, Indonesia and Taiwan who have banned its use as against countries like Canada, Japan and USA who have proper laws regulating its usage & penalties for misuse. While the RBI and other global regulators like IMF have acknowledged the benefits of DLT (Distributed Ledger Technology) underlying cryptocurrencies, India can learn something from its Asian counterpart, Japan, who have some of the best crypto laws in the world.
                        </p>
                        <p className="text-white">
                        Institutions in India have shifted grounds on crypto many times with the RBI banning lenders from dealing with crypto exchanges way back in 2018, a move that was quashed by the Supreme Court in 2020, to be followed by the introduction of the draft Crypto Bill in 2021 which suggests banning all private cryptocurrencies in India and preparing the ground for introducing an official digital currency by RBI.
                        </p>
                        <p className="text-white">
                        While the global divide hardens on the issue- on the one hand we have countries where cryptoassets are becoming a part of the mainstream financial system and on the other hand we see higher walls being constructed to save the citizen from its volatility.
                        </p>
                        <p className="text-white">
                        Our panel of esteemed speakers will discuss the virtues of the suggested ban and whether it will be effective technologically and fruitful in the long run.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <h4 className="pseudo_border mb-3">What will be discussed?</h4>
                        <div className="heading_border mb-4"></div>
                    </div>
                    <div className="col-span-1">
                        <p className="text-base mb-4">
                        In this episode of Let’s Talk Policy, our panel experts will discuss and answer questions which are at the core of this renewed policy and its impact on India and her citizens.
                        </p>
                        <ul className="entry_content">
                        <li>Young Indians who are committed to bringing about change and building India.</li>
                        <li>Those aspiring to build a career in politics, public policy, public administration, journalism, political consulting, public relations, image consulting and related fields.</li>
                        <li>Those working as researchers, academicians, journalists, and in the fields mentioned above.</li>
                        <li>Others who take a deep interest in the subject.</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Crypto;