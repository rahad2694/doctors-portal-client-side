import React from 'react';
import Banner from './Banner';
import Banner_2 from './Banner_2';
import Banner_3_appoinment from './Banner_3_appoinment';
import ContactBanner from './ContactBanner';
import PatientReview from './PatientReview';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='lg:my-32 my-18'>
                <h1 className='mt-6 text-center text-primary font-bold'>OUR SERVICES</h1>
                <h1 className='text-center text-2xl mt-2 mb-8'>Services we provide</h1>
            </div>
            <Services></Services>
            <Banner_2></Banner_2>
            <Banner_3_appoinment></Banner_3_appoinment>
            <PatientReview></PatientReview>
            <ContactBanner></ContactBanner>
        </div>
    );
};

export default Home;