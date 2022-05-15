import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className='p-5 lg:w-2/6' onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Email Address' type="email" className='mb-3 input input-bordered input-md w-full' {...register("email", { required: true, maxLength: 40, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i })} />
            <input placeholder='Subject' type="text" className='mb-3 input input-bordered input-md w-full' {...register("subject", { required: true, maxLength: 30 })} />
            <textarea style={{height:'100px'}} placeholder='Your Message' className='mb-3 input input-bordered input-md w-full' type="text" {...register("message", { required: true })} />
            <div className='flex justify-center'>
                <input className="btn btn-primary text-white capitalize px-8" type="submit" />
            </div>
        </form>
    );
};

export default ContactForm;