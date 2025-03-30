import React from 'react'
import { FaPlusCircle } from "react-icons/fa";

export default function AddFabricAccessories() {
  return (
    <div className="fabric-accessories">
      <form action="" className='flex flex-col gap-4'>
        <div className="tissu flex gap-x-6 items-center mt-8">
          <div className="col">
            <div className="row-1 flex gap-x-6 items-center mb-4">
              <div className="tissu-name flex gap-x-6 items-center">
                <label className='font-medium w-52 text-xl' htmlFor="">Nom du Tissu: </label>
                <input className='border border-gray-400 px-4 py-2 outline-none rounded-sm' type="text" placeholder='Nom du tissu' />
              </div>
              <div className="tissu-price flex gap-x-6 items-center">
                <label className='font-medium w-52 text-xl' htmlFor="">Prix du tissu par mètre: </label>
                <input className='border border-gray-400 px-4 py-2 outline-none rounded-sm' type="text" placeholder='00.00 DT' />
              </div>
            </div>
            <div className="row-2 flex gap-x-6 items-center">
              <div className="tissu-name flex gap-x-6 items-center">
                <label className='font-medium w-52 text-xl' htmlFor="">Accessoires: </label>
                <input className='border border-gray-400 px-4 py-2 outline-none rounded-sm' type="text" placeholder="Nom d'accessoires" />
              </div>
              <div className="tissu-price flex gap-x-6 items-center">
                <label className='font-medium w-52 text-xl' htmlFor="">Prix par pièce: </label>
                <input className='border border-gray-400 px-4 py-2 outline-none rounded-sm' type="number" min={1} defaultValue={1} />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center my-6">
          <button className=' w-60 flex items-center gap-2 cursor-pointer bg-pink-600 text-white p-2 rounded-xl justify-center font-medium'>Ajouter<FaPlusCircle /></button>
        </div>

      </form>
    </div>
  )
}
