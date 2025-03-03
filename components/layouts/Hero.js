import Icon from "../svg/Icon";

export default function Hero() {
    return (
        <section className="relative mb-5 h-[200px] xs:h-auto xs:aspect-[2/1] bg-home-mobile bg-no-repeat bg-cover bg-[center_top]">

            <div className="container relative overflow-y-hidden h-full flex justify-end items-start pt-5">

                <div className="text-white">
                    <h2 className="font-VazirBold text-xl mb-0.5">قهوه عربیکا تانزانیا</h2>
                    <span className="font-VazirLight text-base">یک فنجان بالانس!</span>
                    <span className="w-[100px] h-px bg-orange-300 block my-3"></span>
                </div>

                {/* <!-- circles --> */}
                <div className="circle--parent circle circle--lg">
                    <div className="circle circle--md">
                        <div className="circle circle--sm"></div>
                    </div>
                </div>

            </div>

            {/* <!-- curve --> */}
            <Icon style={`absolute left-0 right-0 bottom-0 mx-auto text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]`} hrefId={`#curve`} />

            {/* <!-- arrow circle --> */}
            <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full border-2 border-orange-400 circle--parent">
                <Icon style={`w-4 h-4 text-zinc-700 dark:text-white`} hrefId={`#chev-down`} />
            </div>

        </section>
    )
}