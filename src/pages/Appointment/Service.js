import React from 'react';

const Service = ({ service,setTreatment }) => {
    const { name, slots, _id } = service;
    return (
        <div className="shadow-lg text-center w-11/12 mx-auto py-14  rounded-xl">
            <h2 className="text-xl text-secondary my-2 font-bold">{name}</h2>
            <h4 className='my-2 text-accent '>{slots.length === 0 ? <p className='text-red-500'>Please select another date</p>:slots[0]}</h4>
            <p className='my-2 text-accent uppercase'>{slots.length} {slots.length >1 ? 'Spaces':'Space'} available</p>
            <div className="card-actions justify-center">
                <label onClick={()=>setTreatment(service)} htmlFor="service-modal" disabled={slots.length===0} className="text-white btn-sm mt-2 btn btn-secondary">Book Appointment</label>
            </div>
        </div>
    );
};

export default Service;