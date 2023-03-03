import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './teamMemberSlider.css'
import { Pagination } from "swiper";
import './teamMemberSlider.css'
import { Link } from "react-router-dom";
import { BiShareAlt } from 'react-icons/bi'
const TeamMembersSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwipers"
            >
                <SwiperSlide className="padding mb-10 geeks">
                    <div className="card h-56  image-full">
                        <figure><img src="https://i.ibb.co/Wg0hWjZ/Maruf.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-actions  justify-end h-full items-end">
                                <button className=" relative -right-10 btn btn-primary"><BiShareAlt className="text-lg"></BiShareAlt></button>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-black ml-1 font-semibold mt-2">Maruf Hossain</h1>
                    <p className="text-slate-700 ml-1 mb-2 text-sm ">CEO</p>
                </SwiperSlide>
                <SwiperSlide className="padding mb-10 geeks">
                    <div className="card h-56 image-full">
                        <figure>
                            <img className="h-56 w-full" src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/333050794_912817579864022_6506463859100443390_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGBKx2wwZRd_oysCeMac0-0PRGQhAn_BIg9EZCECf8EiEBkV5_WkKysNCh4Z09enoNAtNsNH7YuzbroOH_t_Blq&_nc_ohc=LSZAPn0-QB4AX8tQSTs&_nc_ht=scontent.fzyl2-1.fna&oh=00_AfD14TAPSQyWKfnzAWLzrcMRDtC_gGJi0EVyWJn9k0temg&oe=6406601E" alt="" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions  justify-end h-full items-end">
                                <button className=" relative -right-10 btn btn-primary"><BiShareAlt className="text-lg"></BiShareAlt></button>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-black ml-1 font-semibold mt-2">Junayed Arefin</h1>
                    <p className="text-slate-700 ml-1 mb-2 text-sm ">Marketing Manager</p>
                </SwiperSlide>
                <SwiperSlide className="padding mb-10 geeks">
                    <div className="card h-56 image-full">
                        <figure>
                            <img className="h-56 w-full" src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/280373002_561545392144199_1719643930407709182_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeG1IaBWgxEkw_bHvfVwyG8EGijMPHkYXHYaKMw8eRhcdtABcmGVc5gQzoU1yM9jQg_KZMfirUwYTteYgIF3hVyC&_nc_ohc=boi19NwrkV8AX88rJh9&_nc_oc=AQkn5rnRHh1DdS3D_pFaWg82Evbl6BnBLnpdgyIzepEFQJ7z2e4-DGt02BAIlyqYln8&_nc_ht=scontent.fzyl2-1.fna&oh=00_AfBC5zSlHRiWM-3G8J2vyw5Z7UKnvow3tTA9ym3CiSjHjA&oe=6406BA0A" alt="" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions  justify-end h-full items-end">
                                <button className=" relative -right-10 btn btn-primary"><BiShareAlt className="text-lg"></BiShareAlt></button>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-black ml-1 font-semibold mt-2">Sakir Hossain Farukie</h1>
                    <p className="text-slate-700 ml-1 mb-2 text-sm ">Co-Marketing Manager</p>
                </SwiperSlide>
                <SwiperSlide className="padding mb-10 geeks">
                    <div className="card h-56 image-full">
                        <figure>
                            <img className="h-56 w-full" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions  justify-end h-full items-end">
                                <button className=" relative -right-10 btn btn-primary"><BiShareAlt className="text-lg"></BiShareAlt></button>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-black ml-1 font-semibold mt-2">Fakir Khan</h1>
                    <p className="text-slate-700 ml-1 mb-2 text-sm ">Store Manager</p>
                </SwiperSlide>
                <SwiperSlide className="padding mb-10 geeks">
                    <div className="card h-56 image-full">
                        <figure>
                            <img className="h-56 w-full" src="https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg" alt="" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions  justify-end h-full items-end">
                                <button className=" relative -right-10 btn btn-primary"><BiShareAlt className="text-lg"></BiShareAlt></button>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-black ml-1 font-semibold mt-2">Morjina Khan</h1>
                    <p className="text-slate-700 ml-1 mb-2 text-sm ">Brand Manager</p>
                </SwiperSlide>
                <SwiperSlide className="padding mb-10 geeks">
                    <div className="card h-56 image-full">
                        <figure>
                            <img className="h-56 w-full" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions  justify-end h-full items-end">
                                <button className=" relative -right-10 btn btn-primary"><BiShareAlt className="text-lg"></BiShareAlt></button>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-black ml-1 font-semibold mt-2">Sokina Banu</h1>
                    <p className="text-slate-700 ml-1 mb-2 text-sm ">Brand Ambassidor</p>
                </SwiperSlide>
                <SwiperSlide className="padding mb-10 geeks">
                    <div className="card h-56 image-full">
                        <figure>
                            <img className="h-56 w-full" src="https://media.istockphoto.com/photos/fit-woman-standing-outdoors-after-a-late-afternoon-trail-run-picture-id1347431090?b=1&k=20&m=1347431090&s=612x612&w=0&h=AzXSkVID3sBS88XWNX9hid2rey4SHGEy1wLQM5x92OE=" alt="" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions  justify-end h-full items-end">
                                <button className=" relative -right-10 btn btn-primary"><BiShareAlt className="text-lg"></BiShareAlt></button>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-black ml-1 font-semibold mt-2">Bini Banu</h1>
                    <p className="text-slate-700 ml-1 mb-2 text-sm ">Brand Ambassidor</p>
                </SwiperSlide>
                <SwiperSlide className="padding mb-10 geeks">
                    <div className="card h-56 image-full">
                        <figure>
                            <img className="h-56 w-full" src="https://media.istockphoto.com/id/515235898/photo/studio-shot-of-young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=S8Ik7gPGTOq5WoI5DeaBFt_-DHHWWaq5lyK3W_AhLjg=" alt="" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions  justify-end h-full items-end">
                                <button className=" relative -right-10 btn btn-primary"><BiShareAlt className="text-lg"></BiShareAlt></button>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-black ml-1 font-semibold mt-2">Hasina Hasi</h1>
                    <p className="text-slate-700 ml-1 mb-2 text-sm ">Customer Handler</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default TeamMembersSlider;