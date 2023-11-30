import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Slider = () => {
    return (
        <section className='mt-44'>
            <SectionTitle
            heading={"Our Delivery Mens"}
            subHeading={"From 11.00am to 10.00pm"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img className='w-[454px] h-[378px] shadow-2xl' src='https://i.ibb.co/L9Ng2mQ/young-delivery-man-red-uniform-cap-holding-box-package-writing-blank-page-smiling-friendly.jpg' alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Jahid Hasan</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[454px] h-[378px] shadow-2xl' src='https://i.ibb.co/LzMYPQ4/smiling-young-delivery-man-wearing-uniform-with-cap-holding-points-phone-isolated-white-wall.jpg' alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Md.Riad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[454px] h-[378px] shadow-2xl' src='https://i.ibb.co/g6004d1/young-delivery-man-red-uniform-cap-holding-box-package-showing-smartphone-looking-camera-with-confid.jpg' alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Arif Hassan</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[454px] h-[378px] shadow-2xl' src='https://i.ibb.co/K57fgQF/packages-parcels-delivery-covid19-delivery-transfer-orders-profile-friendly-courier-red-uniform-face.jpg' alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Sadik Khan</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[454px] h-[378px] shadow-2xl' src='https://i.ibb.co/82bnnzj/young-delivery-man-wearing-red-polo-shirt-cap-pointing-finger-up-copy-space-looking-with-smile-face.jpg' alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Mijanur</h2>
                </SwiperSlide>
                

            </Swiper>
        </section>
    );
};

export default Slider;