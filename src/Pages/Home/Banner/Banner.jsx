import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            {/* Add your search bar here */}
            
                <div className=" mb-52 -bottom-12 left-28 absolute z-30">
                    <input className="w-[470px] text-black py-4 pl-4 border border-[#DEDEDE] rounded-l-lg"
                         type="text" placeholder="Search here...." />
                    <button className="bg-[#40b683f7] text-white rounded-r-lg py-4 px-7 text-center font-semibold">Search</button>
                </div>
            

            {/* Swiper component for the banner */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Slide with the image */}
                <SwiperSlide className=''>
                    <img src="https://i.ibb.co/gWj88rx/Your-Express-Gateway-to-Seamless-Deliveries.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
