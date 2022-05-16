import React, { useState } from 'react';
import bannerimg from './../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    // console.log(date);
    let footer = <p>Please pick a day.</p>;
    // if (date) {
    //     footer = <p>You picked {format(date, 'PP')}.</p>;
    // }
    return (
        <div>
            <div className="hero min-h-screen bg-white lg:px-12 my-8 lg:my-0">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img src={bannerimg} alt="Chair of doctor" className="lg:w-2/4 w-11/12 rounded-lg shadow-2xl" />
                    <div className='mx-auto py-10 lg:py-0 px-12 lg:px-0 mt-12 lg:mt-0 shadow-lg rounded-lg'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            // footer={footer}
                        />
                    </div>
                </div>
            </div>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;