import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-cover py-1' style={{ backgroundImage: `url("https://wallpapercrafter.com/sizes/1366x768/101791-anime-manga-anime-girls-simple-background-minimalism-laptop-brunette.png")` }}>
            <div className='border bg-white px-14 py-10 shadow-2xl lg:w-[550px] h-full'>
                <h3 className='text-3xl font-extrabold text-center text-slate-900'>Register Now</h3>
                <p className='text-center mt-2'>You can signup with you social account below</p>
                <input type="text" placeholder="Enter Your Name" className="input text-sm input-bordered input-primary w-full rounded-none mt-8" />
                <input type="text" placeholder="Enter Your Email" className="input text-sm input-bordered input-primary w-full rounded-none mt-4" />
                <input type="password" placeholder="Password" className="input text-sm input-bordered input-primary w-full rounded-none mt-4" />
                <input type="password" placeholder="Confirm Password" className="input text-sm input-bordered input-primary w-full rounded-none mt-4" />
                <input type="file" className="file-input file-input-bordered file-input-success w-full rounded-none mt-4" />
                <div className='mt-4'>
                    <label className="label justify-start cursor-pointer gap-2">
                        <input type="radio" name="radio-10" className="radio checked:radio-primary rounded-none" />
                        <span className="label-text">Accept our terms and conditions</span>
                    </label>
                </div>
                <button className='btn btn-warning w-full rounded-none hover:btn-primary mt-4'>Sign Up</button>
                <p className='text-sm text-center mt-4'>Do you have an account? <Link className='text-red-500' to='/login'>Sign In</Link></p>
            </div>
        </div>
    );
};

export default Register;