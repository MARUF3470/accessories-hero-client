import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=' flex items-center justify-center min-h-screen bg-cover' style={{ backgroundImage: `url("https://wallpapercrafter.com/sizes/1366x768/101791-anime-manga-anime-girls-simple-background-minimalism-laptop-brunette.png")` }}>
            <div className='border bg-white px-14 py-10 shadow-2xl'>
                <h3 className='text-3xl font-extrabold text-center text-slate-900'>Hello Again</h3>
                <p className='text-center mt-2'>Enter your credentials to acces your account.</p>
                <input type="text" placeholder="Enter Your Email" className="input text-sm input-bordered input-primary w-full rounded-none mt-8" />
                <input type="password" placeholder="Password" className="input text-sm input-bordered input-primary w-full rounded-none mt-4" />
                <div className='lg:flex justify-between mt-4'>
                    <label class="label justify-start cursor-pointer gap-2">
                        <input type="radio" name="radio-10" class="radio checked:radio-primary rounded-none" />
                        <span class="label-text">Remember me</span>
                    </label>
                    <a href="" className='mt-4 text-sm hover:text-red-500'>Forgot Password?</a>
                </div>
                <button className='btn btn-warning w-full rounded-none hover:btn-primary mt-4'>Sign In</button>
                <p className='text-sm text-center mt-4'>Don’t have an account? <Link className='text-red-500' to='/registretion'>Register Now</Link></p>
            </div>
        </div>
    );
};

export default Login;