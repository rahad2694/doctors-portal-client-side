import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import LoadingSpinner from '../Shared/LoadingSpinner';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ForgotPassModal from './ForgotPassModal';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        signInWithEmailAndPassword(data.email, data.password);
        event.target.reset();
    };
    useEffect(() => {
        if (gError || error) {
            let errorMsg = gError || error;
            // console.log(error);
            toast.error(errorMsg?.message, { id: 'login-error' })
        }
        if (gUser || user) {
            toast.success('Successfully Logged in', { id: 'login-success' })
            navigate(from, { replace: true });
            // let currentUser = gUser || user;
            // console.log(currentUser.user);
        }
    }, [gError, error, gUser, user, from, navigate]);

    if (gLoading || loading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div className='shadow-xl rounded-lg lg:w-1/4 md:w-5/12 w-4/6 mx-auto p-6 mt-10'>
            <div>
                <h3 className="text-lg font-bold text-center mb-3">Please Log in</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='py-4 flex flex-col items-center'>
                    <div className='w-full max-w-lg mb-2'>
                        <label className="label">
                            <span className="label-text font-semibold ml-1">Email</span>
                        </label>
                        <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i })}
                            type="email"
                            placeholder="Email" name="email" className="input input-bordered w-full max-w-lg" />
                        <p className='text-red-500 text-sm ml-1 mt-1'>{errors.email?.type === 'required' && "Email is required"}</p>
                        <p className='text-red-500 text-xs ml-1 mt-1'>{errors.email?.type === 'pattern' && "Invalid Email ID"}</p>
                    </div>

                    <div className='w-full max-w-lg mb-4'>
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input {...register("password", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i })}
                            type="text"
                            placeholder="Password" name="password" className="input input-bordered w-full max-w-lg" />
                        <p className='text-red-500 text-sm ml-1 mt-1'>{errors.password?.type === 'required' && "Password is required"}</p>
                        <p className='text-red-500 text-xs ml-1 mt-1'>{errors.password?.type === 'pattern' && "Minimum eight characters, at least one letter and one number"}</p>
                        <label htmlFor="forgot-modal" className='hover:text-red-500 text-xs ml-1 mt-1 cursor-pointer'>Forgot Password?</label>

                    </div>

                    <input type="submit" value="log in" className="btn btn-active input input-bordered w-full max-w-lg" />
                </form>
            </div>
            <h5 className='text-center text-sm my-2'>New to Doctors Portal? <Link className='text-secondary hover:text-red-500' to='/signup'>Create new account</Link></h5>
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn text-accent hover:text-white input input-bordered w-full max-w-lg my-2">Continue with Google</button>
            <ForgotPassModal></ForgotPassModal>
        </div>
    );
};

export default Login; <h1>This is login page</h1>