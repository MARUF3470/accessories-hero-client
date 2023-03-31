import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddProduct = () => {
    const [productType, setProductType] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgKey = process.env.REACT_APP_imgkey
    const handleAddProduct = (data, event) => {
        const image = data.picture[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {
                if (imgdata.success) {
                    const product = {
                        category: data.category,
                        type: data.type,
                        name: data.name,
                        price: data.price,
                        img: imgdata.data.url,
                        advertise: false,
                    }
                    console.log(product)
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.acknowledged) {
                                toast.success('Your Product is uploaded successfully.', {
                                    style: {
                                        border: '1px solid #713200',
                                        padding: '16px',
                                        color: '#713200',
                                    },
                                    iconTheme: {
                                        primary: '#713200',
                                        secondary: '#FFFAEE',
                                    },
                                });
                                event.target.reset()
                            }
                        })
                }
            })
    }
    return (
        <form onSubmit={handleSubmit(handleAddProduct)}>
            <div className='w-1/2 mx-auto'>
                <h1 className='text-3xl font-semibold text-gray-900 text-center my-7'>Provide Your product details correctly<br />to add product to the website</h1>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select {...register('category', { required: 'Need To select a category' })} className="select select-bordered rounded-none w-full">
                        <option disabled value={''} selected>Select the category</option>
                        <option value='01'>Watch</option>
                        <option value='02'>Mobile & Tablets</option>
                        <option value='03'>Gym Instruments</option>
                        <option value='04'>Ear Buds</option>
                        <option value='05'>Sound Box</option>
                    </select>
                    {errors.category && <p className='text-red-400 text-xs mt-1'>{errors.category.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <select {...register('type', { required: 'Need To select a type' })} className="select select-bordered rounded-none w-full">
                        <option disabled value={''} selected>Select the type</option>
                        <option value='Mobile'>Mobile</option>
                        <option value='Table'>Table</option>
                        <option value='Laptop'>Laptop</option>
                        <option value='Smart Watch'>Smart Watch</option>
                        <option value='Machnical Watch'>Machnical Watch</option>
                        <option value='Ear Phones'>Ear Phones</option>
                        <option value='Ear Buds'>Ear Buds</option>
                        <option value='Mini SoundBox'>Mini SoundBox</option>
                        <option value='Big SoundBox'>Big SoundBox</option>
                    </select>
                    {errors.type && <p className='text-red-400 text-xs mt-1'>{errors.type.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" {...register('name', { required: 'Give the name' })} placeholder="Type here" className="input input-bordered rounded-none w-full max-w-xs" />
                    {errors.name && <p className='text-red-400 text-xs mt-1'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Price</span>
                    </label>
                    <input type="number" {...register('price', { required: 'Give the price' })} placeholder="Type here" className="input input-bordered rounded-none w-full max-w-xs" />
                    {errors.price && <p className='text-red-400 text-xs mt-1'>{errors.price.message}</p>}
                </div>
                <label className="label">
                    <span className="label-text">Product Image</span>
                </label>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-none cursor-pointer bg-gray-50 dark:hover:bg-bray-800">
                        <div className="flex flex-col items-center justify-center lg:pt-5 lg:pb-6 px-5">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" {...register('picture', { required: 'Picture is required' })} type="file" className="hidden lg:block" />
                    </label>
                </div>
                {errors.picture && <p className='text-red-400 text-xs mt-1'>{errors.picture.message}</p>}
                <div className='mt-5'>
                    <input type="submit" className="btn btn-ghost w-1/2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 mb-2" value='Submit'></input>
                </div>
            </div>
        </form>
    );
};

export default AddProduct;