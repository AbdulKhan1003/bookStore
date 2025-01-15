import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const handleClick = () => {
            document.getElementById('my_modal_3').close();
    };
    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        <Link onClick={handleClick} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="text-lg font-bold mb-4">Login!</h3>
                        <label htmlFor="email">Email</label>
                        <input className=' block border w-full p-2'
                            type="email" name="email" id="email" placeholder='Enter you email'
                            {...register("email", { required: true })} />
                            {errors.email && <span className='text-sm text-red-600'>This field is required</span>} <br />
                        <label htmlFor="password">Password</label>
                        <input className=' block border w-full p-2'
                            type="password" name="password" id="password" placeholder='Enter your password'
                            {...register("password", { required: true })} />

                            {errors.password && <span className='text-sm text-red-600'>This field is required</span>} <br />
                        <div className="flex justify-around mt-4">
                            <button className="bg-secondary text-white px-3 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer">Login</button>
                            <p className='mt-2'>Not Registered? <Link to='/signup' className='text-blue-500 underline cursor-pointer'>Signup</Link> </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Login
