import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='h-screen justify-center items-center flex'>
            <div className="w-[600px]">
                <div className='modal-box'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <a href='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <label htmlFor="name">Name</label>
                        <input className=' block border w-full p-2' type="text" name="name" id="name" placeholder='Enter your name' 
                        {...register("name", { required: true })} />
                        {errors.name && <span className='text-sm text-red-600'>This field is required</span>} <br />
                        
                        <label htmlFor="email">Email</label>
                        <input className=' block border w-full p-2' type="email" name="email" id="email" placeholder='Enter your email'
                            {...register("email", { required: true })} />
                        {errors.email && <span className='text-sm text-red-600'>This field is required</span>} <br />
                        
                        <label htmlFor="msg">Message</label>
                        <textarea className=' block border w-full p-2' rows={5} name="msg" id="msg" placeholder='Enter your message'
                            {...register("msg", { required: true })} />
                        {errors.msg && <span className='text-sm text-red-600'>This field is required</span>} <br />

                        <div className="mt-4">
                            <button className="bg-blue-600 px-4 text-white py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
