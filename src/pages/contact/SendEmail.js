import React, { useState } from 'react';

const SendEmail = () => {
    const [isChecked, setIsChecked] = useState(false);
    function handleCheckboxChange(event) {
        setIsChecked(event.target.checked);
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-slate-900'>Send a message</h1>
            <div className='grid grid-cols-2 gap-4 mt-10'>
                <div>
                    <input type="text" placeholder="Enter Your Name" className="input bg-slate-100 rounded-none text-sm h-14 w-full" />
                </div>
                <div>
                    <input type="text" placeholder="Enter Your Email" className="input bg-slate-100 rounded-none text-sm h-14 w-full" />
                </div>
                <div>
                    <input type="text" placeholder="Enter Your Mobile No." className="input bg-slate-100 rounded-none text-sm h-14 w-full" />
                </div>
                <div>
                    <input type="text" placeholder="Enter Your Company" className="input bg-slate-100 rounded-none text-sm h-14 w-full" />
                </div>
                <div className='col-span-2'>
                    <textarea className="textarea bg-slate-100 w-full rounded-none h-40" placeholder="Your Message"></textarea>
                </div>
            </div>
            <div className="form-control mt-3">
                <label onChange={handleCheckboxChange} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="checkbox rounded-none checkbox-xs checkbox-primary" />
                    <span className="label-text">I am bound by the terms of the Service I accept Privacy Policy.</span>
                </label>
            </div>
            <button className='btn btn-outline rounded-none btn-wide mt-3' disabled={!isChecked}>Send Email</button>
        </div>
    );
};

export default SendEmail;