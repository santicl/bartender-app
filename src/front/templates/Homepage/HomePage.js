import HeaderHome from "./components/Header/HeaderHome";
import HeroHome from "./components/Hero/HeroHome";
import '../Homepage/homepage.style.css';
import About from "./components/Main/About/About";
import WhyUs from "./components/Main/WhyUs/WhyUs";
import Footer from "./components/Footer/Footer";

function HomePage() {
    return(
        <div className="HomePage">
            <HeaderHome />
            <HeroHome />
            <About />
            <WhyUs />
            <Footer />
        </div>
    )
}

export default HomePage;