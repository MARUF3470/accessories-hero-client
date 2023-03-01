import React from 'react';
import Slider from './Slider';

const About = () => {
    return (
        <div>
            {/* <Slider></Slider> */}
            <div className="hero h-[500px]" style={{ backgroundImage: `url("https://www.pexels.com/photo/1000445/download/")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To Our Accessories Shop</h1>
                        <p className="mb-5">We are one of the leading accessories shop in our country and hopefully we become the No.1 shop in Banglades</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default About;