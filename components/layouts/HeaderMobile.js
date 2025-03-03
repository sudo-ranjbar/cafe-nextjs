import Icon from "../svg/Icon";

export default function HeaderMobile() {
    return (
        <>
            <section className="flex md:hidden items-center justify-between bg-white dark:bg-zinc-700 px-4 h-16">

                {/* <!-- mobile header nav icon --> */}
                <div className="burger">
                    <Icon style={`w-7 h-7 dark:text-white`} hrefId={`#bars3`} />
                </div>

                {/* <!-- mobile sidebar menu --> */}
                <div className="nav overflow-y-auto fixed top-0 bottom-0 -right-64 w-64 pt-3 px-4 min-h-screen bg-white dark:bg-zinc-700 z-20 transition-all">

                    {/* <!-- sidebar menu top --> */}
                    <div className="flex justify-between items-center pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">

                        <div className="flex items-center gap-x-3.5">
                            <Icon style={`w-[41px] h-10 text-orange-300`} hrefId={`#logo`} />
                            <Icon style={`w-[100px] h-10 text-orange-300`} hrefId={`#logo-type`} />
                        </div>

                        <div className="xmark">
                            <Icon style={`text-zinc-600 dark:text-white w-6 h-6`} hrefId={`#xmark`} />
                        </div>

                    </div>

                    {/* <!-- sidebar menu main --> */}
                    <ul className="space-y-4 child:pr-2.5 dark:text-white text-zinc-600 font-VazirBold">
                        <li className="flex items-center mobile-menu-active">
                            <a href="#" className="flex items-center gap-x-2">
                                <Icon style={`w-5 h-5`} hrefId={`#home`} />
                                صفحه اصلی
                            </a>
                        </li>

                        <li className="">
                            <div className="flex items-center justify-between">
                                <a href="#" className="flex items-center gap-x-2">
                                    <Icon style={`w-5 h-5`} hrefId={`#shop`} />
                                    فروشگاه
                                </a>
                                <span className="submenu-dropdown">
                                    <Icon style={`w-4 h-4`} hrefId={`#chev-down`} />
                                </span>
                            </div>
                            <div className="submenu transition-transform duration-300">
                                <a href="#">قهوه ویژه</a>
                                <a href="#">ویژه در سطح جهانی</a>
                                <a href="#" className="submenu__item--active">قهوه درجه یک</a>
                                <a href="#">ترکیبات تجاری</a>
                                <a href="#">کپسول قهوه</a>
                                <a href="#">قهوه زینو برزیلی</a>
                            </div>
                        </li>

                        <li className="flex items-center">
                            <a href="#" className="flex items-center gap-x-2">
                                <Icon style={`w-5 h-5`} hrefId={`#dictionary`} />
                                دیکشنری
                            </a>
                        </li>

                        <li className="flex items-center">
                            <a href="#" className="flex items-center gap-x-2">
                                <Icon style={`w-5 h-5`} hrefId={`#about`} />
                                درباره ما
                            </a>
                        </li>

                        <li className="flex items-center">
                            <a href="#" className="flex items-center gap-x-2">
                                <Icon style={`w-5 h-5`} hrefId={`#blog`} />
                                بلاگ
                            </a>
                        </li>

                        <li className="flex items-center">
                            <a href="#" className="flex items-center gap-x-2">
                                <Icon style={`w-5 h-5`} hrefId={`#phone`} />
                                تماس با ما
                            </a>
                        </li>
                    </ul>

                    {/* <!-- sidebar menu bot --> */}
                    <div className="flex flex-col items-start gap-y-4 pt-6 px-2.5 py-8 mt-8 border-t border-t-gray-100 dark:border-t-white/10 text-orange-400 dark:text-orange-300">

                        <a href="#" className="inline-flex items-center gap-x-2">
                            <Icon style={`w-5 h-5`} hrefId={`#login`} />
                            <span>ورود | ثبت نام</span>
                        </a>

                        <div className="toggle-theme inline-block">
                            <div className="flex items-center gap-x-2 dark:hidden">
                                <Icon style={`w-5 h-5`} hrefId={`#moon`} />
                                <span>تم تیره</span>
                            </div>
                            <div className="dark:flex items-center gap-x-2 hidden">
                                <Icon style={`w-5 h-5`} hrefId={`#sun`} />
                                <span>تم روشن</span>
                            </div>
                        </div>

                        <a href="#" className="inline-flex items-center gap-x-2">
                            <Icon style={`w-5 h-5`} hrefId={`#shopping-cart`} />
                            سبد خرید
                        </a>

                    </div>

                </div>

                {/* <!-- mobile header logo --> */}
                <div>
                    <Icon style={`w-[100px] h-10 text-orange-300`} hrefId={`#logo-type`} />
                </div>

                {/* <!--mobile header cart icon --> */}
                <div className="cart-burger">
                    <Icon style={`w-7 h-7 dark:text-white`} hrefId={`#shopping-cart`} />
                </div>

                {/* <!-- mobile cart left-sidebar--> */}
                <div className="left-side flex flex-col overflow-y-auto fixed top-0 bottom-0 -left-64 w-64 pt-5 px-4 min-h-screen bg-white dark:bg-zinc-700 z-20 transition-all">

                    {/* <!-- cart top --> */}
                    <div className="flex justify-between items-center pb-5 mb-5 border-b border-b-gray-300 dark:border-b-white/10">
                        <div className="cart-xmark">
                            <Icon style={`text-zinc-600 dark:text-white w-6 h-6`} hrefId={`#xmark`} />
                        </div>
                        <span className="text-zinc-700 dark:text-white font-VazirMedium">سبد خرید</span>
                    </div>

                    {/* <!-- cart main --> */}
                    <div className="child:mb-5 child:pb-5">
                        <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
                            <img src="assets/img/products/p1.png" className="w-[90px] h-[90px]" alt="coffe" />
                            <div className="flex flex-col justify-between gap-y-1.5">
                                <h4 className="font-VazirMedium text-zinc-700 dark:text-white text-sm line-clamp-2">
                                    قهوه اسپرسو
                                    بن
                                    مانو مدل پریسکا 250 گرمی</h4>
                                <div>
                                    <p className="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                                        14,500
                                        تومان تخفیف</p>
                                    <p className="text-zinc-700 dark:text-white font-VazirBold">175,000 <span
                                        className="font-Vazir text-xs">تومان</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
                            <img src="assets/img/products/p2.png" className="w-[90px] h-[90px]" alt="coffe" />
                            <div className="flex flex-col justify-between gap-y-1.5">
                                <h4 className="font-VazirMedium text-zinc-700 dark:text-white text-sm line-clamp-2">
                                    قهوه اسپرسو
                                    بن
                                    مانو مدل پریسکا 250 گرمی</h4>
                                <div>
                                    <p className="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                                        14,500
                                        تومان تخفیف</p>
                                    <p className="text-zinc-700 dark:text-white font-VazirBold">175,000 <span
                                        className="font-Vazir text-xs">تومان</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
                            <img src="assets/img/products/p1.png" className="w-[90px] h-[90px]" alt="coffe" />
                            <div className="flex flex-col justify-between gap-y-1.5">
                                <h4 className="font-VazirMedium text-zinc-700 dark:text-white text-sm line-clamp-2">
                                    قهوه اسپرسو
                                    بن
                                    مانو مدل پریسکا 250 گرمی</h4>
                                <div>
                                    <p className="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                                        14,500
                                        تومان تخفیف</p>
                                    <p className="text-zinc-700 dark:text-white font-VazirBold">175,000 <span
                                        className="font-Vazir text-xs">تومان</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- cart bot --> */}
                    <div className="flex mt-auto mb-8 items-end justify-between gap-x-4">
                        <a href="#"
                            className="w-[115px] h-11 flex justify-center items-center rounded-xl bg-teal-600 dark:bg-emerald-500 hover:bg-teal-700 dark:hover:bg-emerald-600 transition-colors text-white tracking-tightest">ثبت
                            سفارش</a>

                        <div>
                            <p className="text-gray-500 dark:text-gray-300 text-xs tracking-tighter">مبلغ قابل
                                پرداخت:
                            </p>
                            <p className="text-zinc-700 dark:text-white font-VazirBold pt-1 text-[17px]">350,000<span
                                className="font-Vazir text-xs mr-1">تومان</span></p>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}