import { faClock, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cards = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-4 gap-y-4 lg:gap-y-0 lg:px-12 w-11/12 lg:w-full mx-auto my-12 text-center'>
            <div className='rounded-lg bg-gradient-to-r from-secondary to-primary text-white lg:flex lg:px-6 lg:py-12 py-6'>
                <div>
                <h1 className='text-6xl lg:mr-4 mb-8 lg:mb-0'><FontAwesomeIcon icon={faClock} /></h1>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Opening Hours</h1>
                    <p>Everyday from 10 am to 5 pm</p>
                </div>
            </div>
            <div className='rounded-lg bg-accent text-white lg:flex lg:px-6 lg:py-12 py-6'>
                <div>
                <h1 className='text-6xl lg:mr-4 mb-8 lg:mb-0'><FontAwesomeIcon icon={faLocationDot} /></h1>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Visit Our Location</h1>
                    <p>Mohammadpur Dhaka, 1200</p>
                </div>
            </div>
            <div className='rounded-lg bg-gradient-to-r from-secondary to-primary text-white lg:flex lg:px-6 lg:py-12 py-6'>
                <div>
                <h1 className='text-6xl lg:mr-4 mb-8 lg:mb-0'><FontAwesomeIcon icon={faPhoneVolume} /></h1>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Contact Us Now</h1>
                    <p>+880 1675508829</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;