import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import FileInput from '../../components/FileInput/FileInput';
import { ImGift } from 'react-icons/im';
export default function AddProduct() {
    const [image, setImage] = useState([null,null,null,null])
    const handleImageChange = (index,event) => {
        const file = event.target.files[0];
        const images = [...image]
        images[index] = URL.createObjectURL(file)
        setImage(images)
        if (file) {
          setImage(URL.createObjectURL(file));
        }
        console.log(image)
      };
    return (
        <div className="add-product mb-8">
            <form action="" className='flex flex-col gap-4'>
                <div className="product-name flex gap-x-6 items-center">
                    <label className='font-medium w-52 text-xl' htmlFor="">Nom du produit: </label>
                    <input className='border border-gray-400 px-4 py-2 outline-none rounded-sm' type="text" placeholder='Produit Fouleni' />
                </div>
                <div className="category flex gap-x-6 items-center">
                    <label className='font-medium w-52 text-xl' htmlFor="">Catégorie: </label>
                    <select name="" id="" className='bg-gray-200 px-4 py-2 rounded-sm outline-none'>
                        <option value="category1">category1</option>
                        <option value="category2">category1</option>
                        <option value="category3">category1</option>
                    </select>
                </div>
                <div className="product-name flex gap-x-6 items-center">
                    <label className='font-medium w-52 text-xl' htmlFor="">Nombre de pièces: </label>
                    <input className='border border-gray-400 px-4 py-2 outline-none rounded-sm' type="number" defaultValue={1} min={1} />
                </div>
                <div className="size flex gap-x-6 items-center">
                    <label className='font-medium w-52 text-xl' htmlFor="">Taille: </label>
                    <select name="" id="" className='bg-gray-200 px-4 py-2 rounded-sm outline-none'>
                        <option value="size1">size1</option>
                        <option value="size2">size1</option>
                        <option value="size3">size1</option>
                        <option value="size3">size1</option>
                        <option value="size3">size1</option>
                    </select>
                </div>
                <div className="colors flex gap-x-6 items-center">
                    <label className='font-medium w-52 text-xl' htmlFor="">Couleur: </label>
                    <select name="" id="" className='bg-gray-200 px-4 py-2 rounded-sm outline-none'>
                        <option value="color1">color1</option>
                        <option value="color2">color1</option>
                        <option value="color3">color1</option>
                        <option value="color3">color1</option>
                        <option value="color3">color1</option>
                    </select>
                </div>
                <div className="product-photo flex gap-x-6 items-center">
                    <label htmlFor="" className='font-medium w-52 text-xl self-start'>Ajouter Photos: </label>
                    <div className="photos flex flex-col justify-center gap-4 w-1/2">
                        <div className="select-images flex gap-4">
                            <FileInput name={'Photo principale'} OnchangeEvent={handleImageChange} />
                            <FileInput name={'Photo 2'} OnchangeEvent={handleImageChange} />
                            <FileInput name={'Photo 3'} OnchangeEvent={handleImageChange} />
                            <FileInput name={'Photo 4'} OnchangeEvent={handleImageChange} />
                        </div>
                        <div className="overview flex">
                            {[0,1,2,3,4].map((index)=>(
                                <div><img src={image[index]} alt="" /></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="tissu flex gap-x-6 items-center mt-8">
                    <div className="col">
                        <div className="row-1 flex gap-x-6 items-center mb-4">
                            <div className="tissu-name flex gap-x-6 items-center">
                                <label className='font-medium w-52 text-xl' htmlFor="">Choisir Tissu: </label>
                                <select name="" id="" className='bg-gray-200 px-4 py-2 rounded-sm outline-none'>
                                    <option value="color1">Tissu</option>
                                    <option value="color2">Tissu</option>
                                    <option value="color3">Tissu</option>
                                    <option value="color3">Tissu</option>
                                    <option value="color3">Tissu</option>
                                </select>
                            </div>
                            <div className="tissu-price flex gap-x-6 items-center">
                                <label className='font-medium w-52 text-xl' htmlFor="">Combien de mètres: </label>
                                <input className='border border-gray-400 px-4 py-2 outline-none rounded-sm' type="text" placeholder='100 mètres' />
                            </div>
                        </div>
                        <div className="row-2 flex gap-x-6 items-center">
                            <div className="tissu-name flex gap-x-6 items-center">
                                <label className='font-medium w-52 text-xl' htmlFor="">Autres: </label>
                                <select name="" id="" className='bg-gray-200 px-4 py-2 rounded-sm outline-none'>
                                    <option value="color1">Tissu</option>
                                    <option value="color2">Tissu</option>
                                    <option value="color3">Tissu</option>
                                    <option value="color3">Tissu</option>
                                    <option value="color3">Tissu</option>
                                </select>
                            </div>
                            <div className="tissu-price flex gap-x-6 items-center">
                                <label className='font-medium w-52 text-xl' htmlFor="">Nombre de pièces: </label>
                                <input className='border border-gray-400 px-4 py-2 outline-none rounded-sm' type="number" min={1} defaultValue={1} />
                            </div>
                        </div>
                    </div>
                    <button className='flex items-center gap-2 cursor-pointer bg-black text-white p-2 rounded-xl justify-center font-medium'>Ajouter <FaPlusCircle /></button>
                </div>
                <div className="costs flex gap-x-6 items-center">
                    <label className='font-medium w-52 text-xl' htmlFor="">Autres Frais: </label>
                    <div className="frais-1">
                        <label className='font-medium w-52 text-xl pr-4 outline-none' contentEditable htmlFor="">frais 1 </label>
                        <input className='border border-gray-400 px-4 py-2 outline-none rounded-sm' type="text" placeholder='00.00DT' />
                    </div>
                    <div className="frais-1">
                        <label className='font-medium w-52 text-xl pr-4' htmlFor="">frais 2 </label>
                        <input className='border border-gray-400 px-4 py-2 outline-none rounded-sm' type="text" placeholder='00.00DT' />
                    </div>
                    <button className='flex items-center gap-2 cursor-pointer bg-black text-white p-2 rounded-xl justify-center font-medium'>Ajouter un frais <FaPlusCircle /></button>
                </div>
                <h1 className='font-bold text-2xl'>Prix: <span className='text-red-600'>200DT</span></h1>
                <h1 className='font-bold text-2xl'>Prix pour chaque pièce: <span className='text-red-600'>200DT</span></h1>
                <div className="margin-gain flex items-center gap-x-6">
                    <label className='font-medium w-52 text-xl pr-4 outline-none' htmlFor="">Marge de gain: </label>
                    <input className='border border-gray-400 px-4 py-2 outline-none rounded-sm' type="text" placeholder='40%' />
                </div>
                <h1 className='font-bold text-2xl'>Gain Total: <span className='text-green-600'>200DT</span></h1>
                <h1 className='font-bold text-2xl'>Prix de chaque pièce: <span className='text-green-600'>200DT</span></h1>
                <br />
                <div className="add flex justify-center">
                    <button className=' w-60 flex items-center gap-2 cursor-pointer bg-green-600 text-white p-2 rounded-xl justify-center font-medium'>Ajouter le produit <FaPlusCircle /></button>
                </div>
            </form>
        </div>
    )
}
