import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './slider.css'
import { Parallax, Pagination, Navigation } from "swiper";
const Slider = () => {
    return (
        <div className=''>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper h-[450px]"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        "background-image":
                            "url(https://www.pexels.com/photo/1000445/download/)",
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="title text-center text-5xl" data-swiper-parallax="-300">
                        Lets Make The World A Perfect Place For Living
                    </div>

                    <div className="text text-center mt-10" data-swiper-parallax="-100">
                        <p>
                            We are one of the leading Electrical Accesories company in our country and we are trying to make peoples life easy by bring them all the electical device they need in one place and hopefully we will be the best electical accessories provider in our county soon
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title text-center text-5xl" data-swiper-parallax="-300">
                        Spread Happiness to everybody
                    </div>
                    <div className="text text-center mt-10" data-swiper-parallax="-100">
                        <p>
                            Spreading happiness is a wonderful way to make a positive impact on the world around us. When we spread happiness, we not only bring joy to others but also to ourselves. There are many simple things we can do to spread happiness, such as complimenting someone, giving a small gift, or just being kind and attentive.
                            Happiness is contagious, and when we make an effort to spread it, we create a ripple effect that can reach far beyond the initial recipient. By spreading happiness, we can improve the mood and well-being of those around us, strengthen our relationships, and make the world a happier and more positive place.
                            Remember, spreading happiness doesn't have to be complicated or expensive. Even small acts of kindness can go a long way. So, let's all make an effort to spread happiness wherever we go and make the world a happier place, one smile at a time.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title text-center text-5xl" data-swiper-parallax="-300">
                        Let's Save The World Together
                    </div>
                    <div className="text text-center mt-10" data-swiper-parallax="-100">
                        <p>
                            Saving the world is a monumental task that requires a collective effort from individuals, organizations, and governments across the globe. It's about taking small steps in our daily lives to reduce our carbon footprint, conserve resources, and protect the environment. It's also about advocating for policies and practices that promote sustainability and foster a greener future.
                            By working together, we can create a world that is more sustainable, equitable, and resilient. Let's Save The World Together is not just a slogan but a rallying cry for all of us to do our part and contribute to a better future for ourselves and future generations.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;