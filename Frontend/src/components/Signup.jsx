import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';
import toast,{Toaster} from 'react-hot-toast';
import axios from 'axios';

const Signup = ()  => {
    const nav = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        const userInfo = {
            fullName:data.name,
            email:data.email,
            password:data.password
        }
        await axios.post("http://localhost:4001/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success("Signup successful")
                nav("/")
            }
            localStorage.setItem("User",JSON.stringify(res.data.user))
        }).catch((err)=>{
            toast.error(err.message || "An error occured", {
                duration: 1000
              });
            if(err.response){
                toast.error(err.response.data.message || "An error occured", {
                    duration: 1000
                  });
            }
        })
    }
    return (
        <div className='h-screen justify-center items-center flex'>
            <div className="w-[600px]">
                <div className='modal-box'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <a href='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>
                        <h3 className="text-lg font-bold mb-4">Signup!</h3>
                        <label htmlFor="name">Name</label>
                        <input className=' block border w-full p-2' type="text" name="name" id="name" placeholder='Enter you name' 
                        {...register("name", { required: true })} />
                        {errors.name && <span className='text-sm text-red-600'>This field is required</span>} <br />
                        <label htmlFor="email">Email</label>
                        <input className=' block border w-full p-2' type="email" name="email" id="email" placeholder='Enter you email'
                            {...register("email", { required: true })} />
                        {errors.email && <span className='text-sm text-red-600'>This field is required</span>} <br />
                        <label htmlFor="password">Password</label>
                        <input className=' block border w-full p-2' type="password" name="password" id="password" placeholder='Enter your password'
                            {...register("password", { required: true })} />
                        {errors.password && <span className='text-sm text-red-600'>This field is required</span>} <br />
                        <div className="flex justify-around mt-4">
                            <button className="bg-secondary text-white px-3 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer">Signup</button>
                            {/* <p className='mt-2'>Have an account? <Link onClick={() => document.getElementById('my_modal_3').showModal()} className='text-blue-500 underline cursor-pointer'>Login</Link>
                                <Login />
                            </p> */}
                        </div>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Signup
