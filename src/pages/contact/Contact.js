import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-pink-100 to-blue-200 pt-20 pb-56'>
                <p className='text-center text-slate-900 font-bold'>GET TO KNOW US</p>
                <h3 className='text-5xl font-extrabold text-slate-900 text-center'>Do you have any inquaries?<br />Let's Talk.</h3>
            </div>
            <div className='w-11/12 mx-auto relative -top-28'>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div className="card w-96 bg-base-100 shadow-lg rounded-none">
                        <figure><img className='w-1/2' src="https://cdn-icons-png.flaticon.com/512/2989/2989993.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className='text-center'>Contact</p>
                            <div className="card-actions justify-center">
                                <div className="link-hover">smmaruf25@gmail.com</div>
                                <div className="link-hover">+8801872129989</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-lg rounded-none">
                        <figure><img className='w-1/2 mt-4' src="https://cdn-icons-png.flaticon.com/512/2775/2775994.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className='text-center'>Location</p>
                            <div className="card-actions justify-center">
                                <div className="link-hover">Tongi, Station road, Gazipur, Dhaka, Bangladesh</div>

                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-lg rounded-none">
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
        </div>
    );
};

export default Contact;