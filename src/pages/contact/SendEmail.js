import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const SendEmail = () => {
    const [isChecked, setIsChecked] = useState(false);
    const form = useRef();
    function handleCheckboxChange(event) {
        setIsChecked(event.target.checked);
    }
    const handleSendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_nhro12h', 'template_mrsptgl', form.current, 'TEH9ZXddwbom_iuuq')
            .then((result) => {
                console.log(result.text);
                toast.success('Your email send successfully')
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <form ref={form} onSubmit={handleSendEmail}>
            <h1 className='text-4xl font-bold text-slate-900'>Send a message</h1>
            <div className='grid grid-cols-2 gap-4 mt-10'>
                <div>
                    <input type="text" name='name' required placeholder="Enter Your Name" className="input bg-slate-100 rounded-none text-sm h-14 w-full" />
                </div>
                <div>
                    <input type="text" name='email' required placeholder="Enter Your Email" className="input bg-slate-100 rounded-none text-sm h-14 w-full" />
                </div>
                <div>
                    <input type="number" name='phone' placeholder="Enter Your Mobile No." className="input bg-slate-100 rounded-none text-sm h-14 w-full" />
                </div>
                <div>
                    <input type="text" name='companyName' placeholder="Enter Your Company" className="input bg-slate-100 rounded-none text-sm h-14 w-full" />
                </div>
                <div className='col-span-2'>
                    <textarea name='message' required className="textarea bg-slate-100 w-full rounded-none h-40" placeholder="Your Message"></textarea>
                </div>
            </div>
            <div className="form-control mt-3">
                <label onChange={handleCheckboxChange} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="checkbox rounded-none checkbox-xs checkbox-primary" />
                    <span className="label-text">I am bound by the terms of the Service I accept Privacy Policy.</span>
                </label>
            </div>
            <button className='btn btn-outline rounded-none btn-wide mt-3' disabled={!isChecked}>Send Email</button>
        </form>
    );
};

export default SendEmail;