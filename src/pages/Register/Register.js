import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('')
    const { registration, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const imgKey = process.env.REACT_APP_imgkey
    const handleRegistretion = (data, event) => {
        setError('')
        if (data.password !== data.cpassword) {
            setError('Check Password')
            return
        }
        setError('')
        event.preventDefault()
        console.log(data)
        const image = data.image[0]
        console.log(image)
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    registration(data.email, data.password)
                        .then(res => {
                            const user = res.user;
                            const currentUser = {
                                email: user.email
                            }
                            toast.success('User registration done')
                            fetch('https://accessories-hero-server.vercel.app/jwt', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(currentUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);

                                    localStorage.setItem('ACCESSORIES_HERO-token', data.token);
                                    navigate(from, { replace: true });
                                });
                            event.target.reset()
                            console.log(imgData.data.url)
                            const profile = {
                                displayName: data.name,
                                photoURL: imgData.data.url
                            }
                            updateUserInfo(profile, data.email)
                        })
                        .catch(err => {
                            console.log(err)
                            setError(err.message)
                        })

                }
            })
        const updateUserInfo = (profile, email) => {
            const savedUser = {
                email: email,
                name: profile.displayName,
                img: profile.photoURL
            }
            fetch('https://accessories-hero-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(savedUser)
            })
                .then(res => res.json())
                .then(data => {

                })
                .catch(err => console.error(err))
            updateUser(profile)
                .then(() => {
                    navigate('/')
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-cover py-1' style={{ backgroundImage: `url("https://wallpapercrafter.com/sizes/1366x768/101791-anime-manga-anime-girls-simple-background-minimalism-laptop-brunette.png")` }}>
            <form onSubmit={handleSubmit(handleRegistretion)} className='border bg-white px-14 py-10 shadow-2xl lg:w-[550px] h-full'>
                <h3 className='text-3xl font-extrabold text-center text-slate-900'>Register Now</h3>
                <p className='text-center mt-2'>You can signup with you social account below</p>
                <input type="text" {...register('name', { required: 'Enter Your Name' })} placeholder="Enter Your Name" className="input text-sm input-bordered input-primary w-full rounded-none mt-8" />
                {errors.name && <p className='text-red-400 text-xs mt-1'>{errors.name.message}</p>}
                <input type="email" {...register('email', { required: 'Enter Your Email' })} placeholder="Enter Your Email" className="input text-sm input-bordered input-primary w-full rounded-none mt-4" />
                {errors.email && <p className='text-red-400 text-xs mt-1'>{errors.email.message}</p>}
                <input type="password" {...register('password', { required: 'Enter Your Password' })} placeholder="Password" className="input text-sm input-bordered input-primary w-full rounded-none mt-4" />
                {errors.password && <p className='text-red-400 text-xs mt-1'>{errors.password.message}</p>}
                <input type="password" {...register('cpassword', { required: 'Re-type Your Password' })} placeholder="Confirm Password" className="input text-sm input-bordered input-primary w-full rounded-none mt-4" />
                {errors.cpassword && <p className='text-red-400 text-xs mt-1'>{errors.cpassword.message}</p>}
                <input type="file" {...register('image', { required: 'Give Your Image' })} className="file-input file-input-bordered file-input-success w-full rounded-none mt-4" />
                {errors.image && <p className='text-red-400 text-xs mt-1'>{errors.image.message}</p>}
                <div className='mt-4'>
                    <label className="label justify-start cursor-pointer gap-2">
                        <input type="radio" name="radio-10" className="radio checked:radio-primary rounded-none" />
                        <span className="label-text">Accept our terms and conditions</span>
                    </label>
                </div>
                <p>{error}</p>
                <button className='btn btn-warning w-full rounded-none hover:btn-primary mt-4'>Sign Up</button>
                <p className='text-sm text-center mt-4'>Do you have an account? <Link className='text-red-500' to='/login'>Sign In</Link></p>
            </form>
        </div>
    );
};

export default Register;