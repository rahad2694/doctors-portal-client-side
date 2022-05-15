import React from 'react';
import careimg from './../../assets/images/treatment.png'

const Banner_2 = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white lg:px-12 lg:w-3/4 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={careimg} alt='' className="max-w-sm rounded-lg shadow-2xl mb-6 lg:mb-0" />
                    <div className='mx-4 lg:ml-6'>
                        <h1 className="lg:text-4xl text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner_2;