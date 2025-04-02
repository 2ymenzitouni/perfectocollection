import React from 'react'
import { FaPlusCircle } from "react-icons/fa";
export default function SellerPlaces () {
    return (
        <div className="add-category">
            <form action="" className='flex flex-col gap-4'>
                <div className="product-name flex gap-x-6 items-center">
                    <label className='font-medium w-52 text-xl' htmlFor="">Ajouter un lieu: </label>
                    <input className='border border-gray-400 px-4 py-2 outline-none rounded-sm' type="text" placeholder='Catégorie' />
                </div>
                <div className=" flex justify-center">
                    <button className=' w-60 flex items-center gap-2 cursor-pointer bg-amber-400 text-white p-2 rounded-xl justify-center font-medium'>Ajouter la catégorie <FaPlusCircle /></button>
                </div>
            </form>
        </div>
    )
}
