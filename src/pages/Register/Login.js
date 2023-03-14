import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = (data, event) => {
        setError('')
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user
                console.log(user)
                event.target.reset()
            })
            .catch(err => {
                console.error(err)
                setError(err.message.split(' ')[2])
            })
    }
    return (
        <form onSubmit={handleSubmit(handleLogin)} className=' flex items-center justify-center min-h-screen bg-cover' style={{ backgroundImage: `url("https://wallpapercrafter.com/sizes/1366x768/101791-anime-manga-anime-girls-simple-background-minimalism-laptop-brunette.png")` }}>
            <div className='border bg-white px-14 py-10 shadow-2xl'>
                <h3 className='text-3xl font-extrabold text-center text-slate-900'>Hello Again</h3>
                <p className='text-center mt-2'>Enter your credentials to acces your account.</p>
                <input type="text" placeholder="Enter Your Email" {...register("email", { required: 'Enter Your Email' })} className="input text-sm input-bordered input-primary w-full rounded-none mt-8" />
                {errors.email && <p className='text-red-400 text-xs mt-1'>{errors.email.message}</p>}
                <input type="password" {...register('password', { required: 'Enter Your Password' })} placeholder="Password" className="input text-sm input-bordered input-primary w-full rounded-none mt-4" />
                {errors.password && <p className='text-red-400 text-xs mt-1'>{errors.password.message}</p>}
                <div className='lg:flex justify-between mt-4'>
                    <label className="label justify-start cursor-pointer gap-2">
                        <input type="radio" name="radio-10" className="radio checked:radio-primary rounded-none" />
                        <span className="label-text">Remember me</span>
                    </label>
                    <a href="/" className='mt-4 text-sm hover:text-red-500'>Forgot Password?</a>
                </div>
                <p className='text-red-400 text-xs mt-1'>{error}</p>
                <button className='btn btn-warning w-full rounded-none hover:btn-primary mt-4'>Sign In</button>
                <p className='text-sm text-center mt-4'>Don’t have an account? <Link className='text-red-500' to='/registretion'>Register Now</Link></p>
            </div>
        </form>
    );
};

export default Login;