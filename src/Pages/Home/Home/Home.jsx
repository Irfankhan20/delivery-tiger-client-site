import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import About from "../About/About";
import OurFetureSection from "../OurFetureSection/OurFetureSection";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>DeliveryTiger | Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <OurFetureSection></OurFetureSection>
            <Slider></Slider>
        </div>
    );
};

export default Home;
