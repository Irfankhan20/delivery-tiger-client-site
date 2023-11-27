import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const About = () => {
    return (
        <div className="mt-32">
            <SectionTitle subHeading='enjoy life' heading="About Us"></SectionTitle>
            <div className="hero  bg-[#FFF]">
            <div className="hero-content flex-col  lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src='https://i.ibb.co/HD6fP2b/food-delivery-boy-delivering-food-scooter.jpg' className="w-3/4 rounded-lg shadow-2xl" />
                <img src='https://i.ibb.co/NmfX3kQ/1000-F-497003716-fd-Go-Kcm-Zhry-LNb-K8y-W14e2-Gi-XVUVzp-MG.jpg' className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div> 
                <div className='w-1/2 space-y-4'>
                    <h1 className="text-xl text-[#9078e8] font-semibold">Our Info</h1>
                    <h1 className="text-5xl  font-semibold"> Get to Know Delivery Tiger</h1>
                    <p className="py-6 text-[#737373]">Welcome to Delivery Tiger, where passion meets precision in every delivery. Our dedicated team is committed to bringing you seamless service, ensuring your packages reach their destination with speed and care. With cutting-edge technology and a relentless spirit, we redefine excellence in the world of logistics. Trust the roar of Delivery Tiger.. </p>

                    <p className="py-6 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. .</p>
                    <button className="bg-[#5b4d91] px-4 py-3 rounded-lg text-white">Get More Info</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;