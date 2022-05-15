import React from 'react';
import doctorLogo from './../../assets/images/doctor-small.png'

const Banner_3_appoinment = () => {
    return (
        <div className='pt-10'>
            <div className="hero my-10 bg-white bg-[url('/src/assets/images/appointment.png')] bg-cover">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctorLogo} alt='' className="w-2/4 hidden lg:block mt-[-140px]" />
                    <div className='text-white px-2 lg:px-0 lg:py-0 py-8'>
                        <h1 className='text-secondary font-semibold my-4'>Appointment</h1>
                        <h1 className="text-3xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner_3_appoinment;