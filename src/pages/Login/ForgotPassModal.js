import React, { useEffect } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';

const ForgotPassModal = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userEmail = e.target.email.value;
        await sendPasswordResetEmail(userEmail);
        toast.success('Reset Email Sent!', { id: 'reset-sent' })
    }
    useEffect(() => {
        if (error) {
            toast.error(error.message, { id: 'reset-error' });
        }
    }, [error]);
    if (sending) {
        return <div>
            <input type="checkbox" id="forgot-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="forgot-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Sending Reset Email</h3>
                    <LoadingSpinner></LoadingSpinner>
                </div>
            </div>
        </div >
    }
    return (
        <div>
            <input type="checkbox" id="forgot-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="forgot-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Enter Your Email</h3>
                    <form onSubmit={handleSubmit} className='py-4'>
                        <input required type="email" placeholder="Email" name="email" className="input input-bordered w-full max-w-lg mt-5 mb-8" />
                        <input type="submit" value="Reset Password" className="btn btn-active input input-bordered w-full max-w-lg" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default ForgotPassModal;