import React from 'react';
import ContactForm from './ContactForm';

const ContactBanner = () => {
    return (
        <div className="bg-[url('/src/assets/images/appointment.png')] bg-cover py-10">
            <h1 className='text-center text-secondary font-semibold my-2'>Contact Us</h1>
            <h1 className="text-center text-3xl mb-4 text-white">Stay Connected with us</h1>
            <div className='flex justify-center'>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactBanner;