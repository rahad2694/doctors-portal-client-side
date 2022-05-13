import React from 'react';
import careimg from './../../assets/images/treatment.png'

const Banner_2 = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white px-12 w-3/4 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={careimg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-4 ml-6'>
                        <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner_2;