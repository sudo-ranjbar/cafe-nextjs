import Icon from "../svg/Icon";

export default function BestSeller() {
    return (
        <section className="mb-9">
            <div className="container">

                {/* <!-- header --> */}
                <div className="container flex items-end justify-between md:px-10 mb-5 mt-10">
                    <div className="">
                        <h2 className="text-md md:text-xl lg:text-3xl dark:text-white font-bold mb-4">محصولات پر فروش</h2>
                        <p className="text-xs md:sm lg:text-sm dark:text-white">پیشنهاد قهوه خورها...</p>
                    </div>

                    <div className="flex gap-x-[18px]">
                        <div className="swiper-button-prev-cs transition-all hover:bg-gray-300 dark:hover:bg-white dark:hover:text-zinc-700 flex justify-center items-center w-9 h-10 md:w-10 md:h-10 rounded-full shadow-normal bg-white text-zinc-700 dark:bg-zinc-700 dark:text-white">
                            <Icon style={`w-5 h-5 md:w-[26px] md:h-[26px]`} hrefId={`#chevron-right`} />
                        </div>
                        <div className="swiper-button-next-cs transition-all hover:bg-gray-300 dark:hover:bg-white dark:hover:text-zinc-700 flex justify-center items-center w-9 h-10 md:w-10 md:h-10 rounded-full shadow-normal bg-white text-zinc-700 dark:bg-zinc-700 dark:text-white">
                            <Icon style={`w-5 h-5 md:w-[26px] md:h-[26px]`} hrefId={`#chevron-left`} />
                        </div>
                    </div>

                </div>

                {/* <!-- slides --> */}
                <div className="swiper">
                    {/* <!-- Additional required wrapper --> */}
                    <div className="swiper-wrapper">
                        {/* <!-- Slides --> */}
                        <div className="swiper-slide">
                            <div className="w-72 sm:w-60 xl:w-72 bg-white dark:bg-zinc-700 p-4 rounded-md">
                                <div>
                                    <img src="/assets/img/products/p5.png" className="w-52 h-52" alt="coffee" />
                                </div>
                                <h4
                                    className="pb-2.5 font-VazirMedium text-zinc-700 dark:text-white md:text-sm lg:text-base line-clamp-2">
                                    قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی</h4>
                                <div className="pb-2.5 text-teal-600 dark:text-emerald-500">
                                    <span className="font-VazirBold">175,000</span><span
                                        className="font-Vazir text-sm">تومان</span>
                                </div>
                                <div className="prod-icon-wrapper flex justify-between items-center">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded w-20 h-8 p-1 text-white">افزودن</button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <Icon style={`w-5 h-5 cursor-pointer`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="w-72 sm:w-60 xl:w-72 bg-white dark:bg-zinc-700 p-4 rounded-md">
                                <div>
                                    <img src="/assets/img/products/p5.png" className="w-52 h-52" alt="coffee" />
                                </div>
                                <h4
                                    className="pb-2.5 font-VazirMedium text-zinc-700 dark:text-white md:text-sm lg:text-base line-clamp-2">
                                    قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی</h4>
                                <div className="pb-2.5 text-teal-600 dark:text-emerald-500">
                                    <span className="font-VazirBold">175,000</span><span
                                        className="font-Vazir text-sm">تومان</span>
                                </div>
                                <div className="prod-icon-wrapper flex justify-between items-center">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded w-20 h-8 p-1 text-white">افزودن</button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <Icon style={`w-5 h-5 cursor-pointer`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="w-72 sm:w-60 xl:w-72 bg-white dark:bg-zinc-700 p-4 rounded-md">
                                <div>
                                    <img src="/assets/img/products/p5.png" className="w-52 h-52" alt="coffee" />
                                </div>
                                <h4
                                    className="pb-2.5 font-VazirMedium text-zinc-700 dark:text-white md:text-sm lg:text-base line-clamp-2">
                                    قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی</h4>
                                <div className="pb-2.5 text-teal-600 dark:text-emerald-500">
                                    <span className="font-VazirBold">175,000</span><span
                                        className="font-Vazir text-sm">تومان</span>
                                </div>
                                <div className="prod-icon-wrapper flex justify-between items-center">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded w-20 h-8 p-1 text-white">افزودن</button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <Icon style={`w-5 h-5 cursor-pointer`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="w-72 sm:w-60 xl:w-72 bg-white dark:bg-zinc-700 p-4 rounded-md">
                                <div>
                                    <img src="/assets/img/products/p5.png" className="w-52 h-52" alt="coffee" />
                                </div>
                                <h4
                                    className="pb-2.5 font-VazirMedium text-zinc-700 dark:text-white md:text-sm lg:text-base line-clamp-2">
                                    قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی</h4>
                                <div className="pb-2.5 text-teal-600 dark:text-emerald-500">
                                    <span className="font-VazirBold">175,000</span><span
                                        className="font-Vazir text-sm">تومان</span>
                                </div>
                                <div className="prod-icon-wrapper flex justify-between items-center">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded w-20 h-8 p-1 text-white">افزودن</button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <Icon style={`w-5 h-5 cursor-pointer`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                            <Icon style={`w-5 h-5 cursor-pointer text-amber-400`} hrefId={`#star`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </section>
    )
}