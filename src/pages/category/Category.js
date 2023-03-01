import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    console.log(category)
    return (
        <Link to={`/category/${category?.id}`}>
            <div className="w-72">
                <figure><img className='h-48 border w-full' src={category.pic} alt="Shoes" /></figure>
                <div>
                    <h2 className='text-center text-sm font-semibold mt-4'>{category.name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Category;