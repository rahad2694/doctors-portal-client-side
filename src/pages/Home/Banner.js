import React from 'react';
import bannerimg from './../../assets/images/chair.png'
import Cards from './Cards';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-white lg:px-12 my-8 lg:my-0">
                <div class="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img src={bannerimg} alt="Chair of doctor" class="lg:w-2/4 w-11/12 rounded-lg shadow-2xl" />
                    <div className='lg:w-2/4 mx-4 lg:mx-auto mt-12 lg:mt-0'>
                        <h1 class="text-4xl font-bold lg:w-3/4">Your New Smile Starts Here</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Cards></Cards>
        </div>
    );
};

export default Banner;