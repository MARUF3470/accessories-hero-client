import React from 'react';
import Category from './Category';
import './category.css'

const Categories = () => {
    const categories = [
        {
            id: "01",
            name: 'Watch',
            pic: 'https://www.popsci.com/uploads/2019/12/28/Apple-Watch-on-table.jpg?auto=webp'
        },
        {
            id: "02",
            name: 'Mobile And Tablets',
            pic: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/07/vivo-x80-pro-001.jpg?fit=1920%2C1080&quality=55&strip=all&ssl=1'
        },
        {
            id: '03',
            name: 'Gym Instruments',
            pic: 'https://bestshoppe.ae/wp-content/uploads/2019/12/281345162s8y.jpg'
        },
        {
            id: '04',
            name: 'Ear Buds',
            pic: 'https://images.macrumors.com/t/DE_ywxD1q39ndpOq1BR-gaIcoKs=/1600x/article-new/2022/01/beats-fit-pro-green-background.jpeg'
        },
        {
            id: '05',
            name: 'Sound Box',
            pic: 'https://wallpaperaccess.com/full/5270757.jpg'
        }
    ]
    return (
        <div className='w-4/5 mx-auto'>
            <div className='overflow-x-auto scrollable-component mb-5'>
                <div className='flex gap-4 mb-8'>
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;