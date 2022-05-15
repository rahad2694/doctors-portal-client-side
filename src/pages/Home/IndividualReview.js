import React from 'react';

const IndividualReview = ({ review }) => {
    const { text, img, name, address } = review;
    return (
        <div className='p-8 rounded-xl shadow-lg'>
            <h1 className='pb-4'>{text}</h1>
            <div className='flex pr-4 pt-4 items-center'>
                <div class="avatar mr-4">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img alt='' src={img} />
                    </div>
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default IndividualReview;