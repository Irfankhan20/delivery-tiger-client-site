import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Slider = () => {
    return (
        <section className='mt-44'>
            <SectionTitle
            heading={"Delivery Online"}
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
                    <img src='https://i.ibb.co/nCP8gfY/delivery-boy.jpg' alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://i.ibb.co/nCP8gfY/delivery-boy.jpg' alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://i.ibb.co/nCP8gfY/delivery-boy.jpg' alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://i.ibb.co/nCP8gfY/delivery-boy.jpg' alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://i.ibb.co/nCP8gfY/delivery-boy.jpg' alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Desserts</h2>
                </SwiperSlide>
                

            </Swiper>
        </section>
    );
};

export default Slider;