import React, { useState } from 'react'
import '../index.css'
import { useEffect } from 'react';

const Cards = ({item}) => {
  return (
    <div className={`mt-4 px-3`}>
      <div className={`card bg-base-100 min-w-52 shadow-xl mt-3 mb-5 p-3 hover:scale-105 duration-200 border-2 dark:border-white`}>
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}$</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
