import React from 'react';
import fluoride from './../../assets/images/fluoride.png'
import cavity from './../../assets/images/cavity.png'
import whitening from './../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-4 lg:px-12 gap-y-12 lg:gap-y-0 my-12  w-11/12 lg:w-full mx-auto rounded-lg text-center'>
            <div className='p-8 shadow-lg rounded-xl'>
                <div className='flex justify-center mb-4'>
                    <img src={fluoride} alt="" />
                </div>
                <h1 className='font-semibold my-2'>Fluoride Treatment</h1>
                <h1 className='text-sm w-3/4 mx-auto'>Fluoride Treatment to clean your teeth and shine as well. It is a part of scheduled care.</h1>
            </div>
            
            <div className='p-8 shadow-lg rounded-xl'>
                <div className='flex justify-center mb-4'>
                    <img src={cavity} alt="" />
                </div>
                <h1 className='font-semibold my-2'>Cavity Filling</h1>
                <h1 className='text-sm w-3/4 mx-auto'>Fluoride Treatment to clean your teeth and shine as well. It is a part of scheduled care.</h1>
            </div>

            <div className='p-8 shadow-lg rounded-xl'>
                <div className='flex justify-center mb-4'>
                    <img src={whitening} alt="" />
                </div>
                <h1 className='font-semibold my-2'>Teeth Whitening</h1>
                <h1 className='text-sm w-3/4 mx-auto'>Fluoride Treatment to clean your teeth and shine as well. It is a part of scheduled care.</h1>
            </div>
        </div>
    );
};

export default Services;