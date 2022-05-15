import React from 'react';
import quote from './../../assets/icons/quote.svg'
import image1 from './../../assets/images/people1.png';
import image2 from './../../assets/images/people2.png';
import image3 from './../../assets/images/people3.png';
import IndividualReview from './IndividualReview';

const PatientReview = () => {
    const reviewData = [
        { id:1, text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: image1, name: 'Winson Herry', address: 'California' },
        { id:2, text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: image2, name: 'Valina Terresa', address: 'New York' },
        { id:3, text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: image3, name: 'Natalia Gorchev', address: 'Miami' },
    ]
    return (
        <section className='lg:px-12 mx-4 px-4 my-20'>
            <div className='flex justify-between mt-6 mb-10'>
                <div>
                    <h1 className='text-primary my-2'>Testimonial</h1>
                    <h1 className="text-3xl text-accent">What Our Patients Says</h1>
                </div>
                <div className='flex justify-end'>
                    <img className='w-2/4' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-12 lg:px-8 px-4'>
                {
                    reviewData.map(review =><IndividualReview key={review.id} review = {review}></IndividualReview>)
                }
            </div>
        </section>
    );
};

export default PatientReview;