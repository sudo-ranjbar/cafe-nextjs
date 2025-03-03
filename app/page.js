import BestSeller from "@/components/layouts/BestSeller";
import Club from "@/components/layouts/Club";
import Footer from "@/components/layouts/Footer";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Hero from "@/components/layouts/Hero";
import MainTag from "@/components/layouts/MainTag";
import ProductCategories from "@/components/layouts/ProductCategories";
import Products from "@/components/layouts/Products";


export default function Home() {

	return (
		<>
			<HeaderMobile />
			<MainTag>
				<Hero />
				<ProductCategories />
				<Products />
				<BestSeller />
				<Club />
				<Footer />
			</MainTag>
			<div className="overlay"></div>
		</>
	)
}
