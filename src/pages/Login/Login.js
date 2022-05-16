import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
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
                    </div>

                    <input type="submit" value="log in" className="btn btn-active input input-bordered w-full max-w-lg" />
                </form>
            </div>
            <div className="divider">OR</div>
            <button className="btn text-accent hover:text-white input input-bordered w-full max-w-lg my-2">Continue with Google</button>
        </div>
    );
};

export default Login; <h1>This is login page</h1>