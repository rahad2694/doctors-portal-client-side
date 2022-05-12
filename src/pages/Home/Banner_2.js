import React from 'react';
import careimg from './../../assets/images/treatment.png'

const Banner_2 = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-white px-12 w-3/4 mx-auto">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={careimg} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-4 ml-6'>
                        <h1 class="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner_2;