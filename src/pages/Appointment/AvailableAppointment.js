import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import ServiceModal from './ServiceModal';

const AvailableAppointment = ({date}) => {
    const [services , setServices] = useState([]);
    const [treatment , setTreatment] = useState(null);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    // console.log(services);
    // console.log(date);
    return (
        <div className='mb-20 px-12'>
            <h1 className='text-secondary text-2xl text-center font-semibold my-20'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mx-auto '>
                {
                    services.map(service=><Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <ServiceModal treatment={treatment} key={treatment._id}></ServiceModal>}
        </div>
    );
};

export default AvailableAppointment;