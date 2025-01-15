import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
const Course = () => {
    return (
        <div>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='text-center mt-28 justify-center space-y-10'>
                    <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span> </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magni.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga consequatur corporis explicabo quo sit vero neque debitis, blanditiis quia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nesciunt in atque illo amet quos accusantium neque rerum ipsa quibusdam quaerat tenetur ex blanditiis, soluta inventore sequi, quis repellat corrupti.</p>
                    <Link to={'/'}><button type='button' className='mt-6 rounded-lg bg-secondary text-white px-4 py-2 hover:bg-pink-600 duration-300'>Back</button></Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                {list.map((item)=>{
                    return <Cards key={item.id} item={item} />
                })}
                </div>
            </div>
        </div>
    )
}

export default Course
