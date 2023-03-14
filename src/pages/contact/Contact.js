import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import SendEmail from './SendEmail';

const Contact = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-pink-100 to-blue-200 pt-20 pb-56'>
                <p className='text-center text-slate-900 font-bold'>GET TO KNOW US</p>
                <h3 className='text-5xl font-extrabold text-slate-900 text-center'>Do you have any inquaries?<br />Let's Talk.</h3>
            </div>
            <div className='w-11/12 mx-auto relative -top-28'>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div className="card lg:w-96 bg-base-100 shadow-lg rounded-none">
                        <figure><img className='w-1/2' src="https://cdn-icons-png.flaticon.com/512/2989/2989993.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className='text-center'>Contact</p>
                            <div className="card-actions justify-center">
                                <div className="link-hover">smmaruf25@gmail.com</div>
                                <div className="link-hover">+8801872129989</div>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:w-96 bg-base-100 shadow-lg rounded-none">
                        <figure><img className='w-1/2 mt-4' src="https://cdn-icons-png.flaticon.com/512/2775/2775994.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className='text-center'>Location</p>
                            <div className="card-actions justify-center">
                                <div className="link-hover">Tongi, Station road, Gazipur, Dhaka, Bangladesh</div>

                            </div>
                        </div>
                    </div>
                    <div className="card lg:w-96 bg-base-100 shadow-lg rounded-none">
                        <figure><img className='w-1/2 mt-5' src="https://cdn-icons-png.flaticon.com/512/166/166258.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className='text-center'>Social Media</p>
                            <div className="card-actions justify-center">
                                <div>
                                    <p>Follow on social media</p>
                                    <div className='flex gap-2 justify-center'>
                                        <FaFacebook className='text-gray-300 hover:text-red-400'></FaFacebook>
                                        <FaTwitter className='text-gray-300 hover:text-red-400'></FaTwitter>
                                        <FaLinkedin className='text-gray-300 hover:text-red-400'></FaLinkedin>
                                        <FaYoutube className='text-gray-300 hover:text-red-400'></FaYoutube>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto border-2 p-14'>
                <SendEmail></SendEmail>
            </div>
            <div className='w-3/4 mx-auto my-24'>
                <p className='text-slate-900 text-sm font-semibold mb-2'>LOCATIONS</p>
                <h3 className='text-3xl text-slate-900 font-extrabold mb-7'>Come and visit our office.</h3>
                <iframe className='w-full h-44' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.919544576207!2d90.39968401425737!3d23.892471489252564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4453f44ee37%3A0xc5ca99a2db987f01!2sStation%20Road%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1678765669351!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Contact;