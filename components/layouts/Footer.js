import Icon from "../svg/Icon";

export default function Footer() {
    return (
        <section className="mb-8 md:mb-20 bg-zinc-700 pt-10 px-10 text-zinc-100">

            <div className="flex items-start flex-wrap">

                <div className="basis-full">

                    <div className="flex items-center gap-x-3.5 text-zinc-300 mb-5">
                        <Icon style={`w-[41px] h-10`} hrefId={`#logo`} />
                        <Icon style={`w-[100px] h-10`} hrefId={`#logo-type`} />
                    </div>

                    <p className="font-VazirThin leading-[2.5rem] text-justify">
                        لورم ایپسوم متن ساختگی با تولی
                    </p>
                </div>

                <div className="basis-full md:basis-1/4 mt-10 md:mt-0">
                    <h3 className="font-VazirBold text-2xl mb-1 md:mb-6">در تماس باشیم</h3>

                    <div className="flex items-start pt-3">
                        <Icon style={`w-5 h-5 pt-1 ml-1`} hrefId={`#location`} />
                        <p>تهران، پاسداران، کوچه کاشیها (نگارستان دوم)، پلاک 10</p>
                    </div>

                    <div className="flex flex-col gap-y-3 pt-3">
                        <div className="flex items-start text-orange-400">
                            <Icon style={`w-5 h-5 pt-1 ml-1`} hrefId={`#envelope`} />
                            <p>arses.kavosh.vira@gmail.com</p>
                        </div>

                        <div className="flex items-start">
                            <Icon style={`w-5 h-5 pt-1 ml-1`} hrefId={`#phone`} />
                            <p>09127701223</p>
                            <p className="pr-2">09126773639</p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="my-10 w-full h-0.5 bg-zinc-300"></div>

            <div className="font-VazirThin text-sm">این رابط کاربری صرفا جنبه نمونه کار دارد و کاملا متعلق به شرکت آرسس کاوش
                ویرا می باشد</div>
        </section>
    )
}