import Icon from "../svg/Icon";

export default function Club() {
    return (
        <section className="mb-8">
            <div className="container">
                <div className="gap-y-6 py-10 flex flex-col items-center justify-between flex-wrap text-white px-3 md:px-11 bg-gradient-to-tr from-emerald-500 to-emerald-600 h-auto rounded-xl">

                    <div className="flex items-center gap-x-3 md:gap-x-6">
                        <img src="/assets/img/club/diamond.png" className="w-[84px]" alt="diamond" />
                        <div className="">
                            <h4 className="mb-2 font-VazirBold text-2xl text-emerald-950">کافی کلاب</h4>
                            <p className="font-VazirLight text-[16px]">میدونستی میتونی با امتیاز هات قهوه بگیری؟
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-x-2 md:gap-x-5">
                            <div
                                className="w-[72px] h-[72px] text-center md:w-[98px] md:h-[98px] text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                                <Icon style={`w-10 h-10 mx-auto`} hrefId={`#activity`} />
                                <span className="text-xs md:text-sm">چرخ و بخت</span>
                            </div>

                            <div
                                className="w-[72px] h-[72px] text-center md:w-[98px] md:h-[98px] text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                                <Icon style={`w-10 h-10 mx-auto`} hrefId={`#discovery`} />
                                <span className="text-xs md:text-sm">ماموریت ها</span>
                            </div>

                            <div
                                className="w-[72px] h-[72px] text-center md:w-[98px] md:h-[98px] text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                                <Icon style={`w-10 h-10 mx-auto`} hrefId={`#ticket-star`} />
                                <span className="text-xs md:text-sm">جایزه ها</span>
                            </div>
                        </div>
                    </div>

                    <div className="gap-x-2 flex items-center lg:flex-col">
                        <h4 className="text-2xl md:text-4xl">542</h4>
                        <p className="font-VazirThin">امتیاز شما</p>
                        <a href="#"
                            className="flex items-center bg-gradient-to-tr from-orange-200 to-orange-400 rounded-full py-1 pr-2 pl-1">
                            دریافت جایزه
                            <Icon style={`w-4 h-4`} hrefId={`#chevron-left`} />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}