import Icon from "../svg/Icon";

export default function Products() {
    return (
        <section className="py-1 my-1">

            <h2 className="text-center my-3 text-lg md:text-2xl lg:text-3xl dark:text-white font-bold">محصولات</h2>

            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-6 gap-x-6 lg:gap-x-0">

                <div className="w-72 sm:w-60 xl:w-72 bg-white dark:bg-zinc-700 p-4 rounded-md">

                    <div className="mx-auto">
                        <img src="/assets/img/products/p4.png"
                            className="w-52 h-52 mb-2 mx-auto border border-zinc-100 dark:border-zinc-600 shadow-2xl shadow-cyan-500/50"
                            alt="coffee" />
                        <h4 className="pb-2.5 font-VazirLight text-zinc-700 dark:text-white text-xs md:text-sm lg:text-base">
                            قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم
                            طولانی قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی</h4>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="pb-2.5 text-teal-600 dark:text-emerald-500">
                            <span className="font-VazirBold text-sm">150,000</span><span className="font-VazirBold text-sm">تومان</span>
                        </div>

                        <div className="pb-2.5 text-red-500 dark:text-red-300 line-through">
                            <span className="font-VazirBold text-sm">175,000</span><span className="font-Vazir text-sm">تومان</span>
                        </div>
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

                <div className="w-72 sm:w-60 xl:w-72 bg-white dark:bg-zinc-700 p-4 rounded-md">

                    <div className="mx-auto">
                        <img src="/assets/img/products/p4.png"
                            className="w-52 h-52 mb-2 mx-auto border border-zinc-100 dark:border-zinc-600 shadow-2xl shadow-cyan-500/50"
                            alt="coffee" />
                        <h4 className="pb-2.5 font-VazirLight text-zinc-700 dark:text-white text-xs md:text-sm lg:text-base">
                            قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم
                            طولانی قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی</h4>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="pb-2.5 text-teal-600 dark:text-emerald-500">
                            <span className="font-VazirBold text-sm">150,000</span><span className="font-VazirBold text-sm">تومان</span>
                        </div>

                        <div className="pb-2.5 text-red-500 dark:text-red-300 line-through">
                            <span className="font-VazirBold text-sm">175,000</span><span className="font-Vazir text-sm">تومان</span>
                        </div>
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
        </section>
    )
}