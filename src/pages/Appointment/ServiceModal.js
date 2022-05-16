import React from 'react';

const ServiceModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedDate = date;
        const timSlot = e.target.slot.value;
        const userName = e.target.name.value;
        const userPhone = e.target.number.value;
        const userEmail = e.target.email.value;
        const data = {_id, selectedDate,timSlot,userName,userPhone,userEmail};
        console.log(data);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="service-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="service-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit} className='py-4'>
                        <input type="text" disabled value={date} name="date" placeholder="Date" className="input input-bordered w-full max-w-lg mb-4" />
                        <select name="slot" className="select select-bordered w-full max-w-lg mb-4">
                            {
                                slots.map((slot,index)=><option key={index}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name"
                            name="name" className="input input-bordered w-full max-w-lg mb-4" />
                        <input type="number" placeholder="Phone Number"
                            name="number" className="input input-bordered w-full max-w-lg mb-4" />
                        <input type="email" placeholder="Email" name="email" className="input input-bordered w-full max-w-lg mb-4" />
                        <input type="submit" value="SUBMIT" className="btn btn-active input input-bordered w-full max-w-lg" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default ServiceModal;