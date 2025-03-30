import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function ManageProducts() {
    return (
        <div className="manage-products pb-8">
            <div className="cart container mx-auto flex gap-x-4">
                <div className="col1 grow shadow px-2 border border-gray-200 pt-4">
                    <div className="headings grid grid-cols-12">
                        <p className='col-span-3 text-gray-400 text-center'>Produit</p>
                        <p className='col-span-3 text-gray-400 text-center'>Quantité</p>
                        <p className='col-span-3 text-gray-400 text-center'>Prix</p>
                        <p className='col-span-3 text-gray-400 text-center'>Options</p>
                    </div>
                    <article className='grid grid-cols-12 items-center mt-8'>
                        <div className="product flex gap-x-4 items-center col-span-3">
                            <img className="w-24" src="../../public/1.jpg" alt="" />
                            <div className="informations">
                                <p className="prduct-name font-medium">Nom du produit</p>
                                <div className="size flex">
                                    <p className='text-gray-400 font-medium pr-2'>Size:</p>
                                    <p className='text-gray-400'>M</p>
                                </div>
                                <div className="color flex">
                                    <p className='text-gray-400 font-medium pr-2'>Couleur:</p>
                                    <p className='text-gray-400'>Rouge</p>
                                </div>
                            </div>
                        </div>
                        <div className="quantity col-span-3 text-center">
                            <input className='py-2 outline-none border border-gray-400 text-center' type="number" min={1} defaultValue={1} name="" id="" />
                        </div>
                        <div className="prix col-span-3 text-center">
                            <p className='italic font-bold'>10 DT</p>
                            <p className='text-sm text-gray-400'>10 Dt Chacun</p>
                        </div>
                        <div className="options flex gap-x-2 col-span-3 text-center justify-center">
                            <button className='cursor-pointer text-red-500 '><MdDelete size={35} /></button>
                            <button className='cursor-pointer text-blue-500 '><FaEdit size={35} /></button>
                        </div>
                    </article>
                    <article className='grid grid-cols-12 items-center mt-8'>
                        <div className="product flex gap-x-4 items-center col-span-3">
                            <img className="w-24" src="../../public/1.jpg" alt="" />
                            <div className="informations">
                                <p className="prduct-name font-medium">Nom du produit</p>
                                <div className="size flex">
                                    <p className='text-gray-400 font-medium pr-2'>Size:</p>
                                    <p className='text-gray-400'>M</p>
                                </div>
                                <div className="color flex">
                                    <p className='text-gray-400 font-medium pr-2'>Couleur:</p>
                                    <p className='text-gray-400'>Rouge</p>
                                </div>
                            </div>
                        </div>
                        <div className="quantity col-span-3 text-center">
                            <input className='py-2 outline-none border border-gray-400 text-center' type="number" min={1} defaultValue={1} name="" id="" />
                        </div>
                        <div className="prix col-span-3 text-center">
                            <p className='italic font-bold'>10 DT</p>
                            <p className='text-sm text-gray-400'>10 Dt Chacun</p>
                        </div>
                        <div className="options flex justify-center gap-x-2 col-span-3 text-center ">
                            <button className='cursor-pointer text-red-500 '><MdDelete size={35} /></button>
                            <button className='cursor-pointer text-blue-500 '><FaEdit size={35} /></button>
                        </div>
                    </article>
                    <article className='grid grid-cols-12 items-center mt-8'>
                        <div className="product flex gap-x-4 items-center col-span-3">
                            <img className="w-24" src="../../public/1.jpg" alt="" />
                            <div className="informations">
                                <p className="prduct-name font-medium">Nom du produit</p>
                                <div className="size flex">
                                    <p className='text-gray-400 font-medium pr-2'>Size:</p>
                                    <p className='text-gray-400'>M</p>
                                </div>
                                <div className="color flex">
                                    <p className='text-gray-400 font-medium pr-2'>Couleur:</p>
                                    <p className='text-gray-400'>Rouge</p>
                                </div>
                            </div>
                        </div>
                        <div className="quantity col-span-3 text-center">
                            <input className='py-2 outline-none border border-gray-400 text-center' type="number" min={1} defaultValue={1} name="" id="" />
                        </div>
                        <div className="prix col-span-3 text-center">
                            <p className='italic font-bold'>10 DT</p>
                            <p className='text-sm text-gray-400'>10 Dt Chacun</p>
                        </div>
                        <div className="options flex justify-center gap-x-2 col-span-3 text-center">
                            <button className='cursor-pointer text-red-500 '><MdDelete size={35} /></button>
                            <button className='cursor-pointer text-blue-500 '><FaEdit size={35} /></button>
                        </div>
                    </article>
                    <article className='grid grid-cols-12 items-center mt-8'>
                        <div className="product flex gap-x-4 items-center col-span-3">
                            <img className="w-24" src="../../public/1.jpg" alt="" />
                            <div className="informations">
                                <p className="prduct-name font-medium">Nom du produit</p>
                                <div className="size flex">
                                    <p className='text-gray-400 font-medium pr-2'>Size:</p>
                                    <p className='text-gray-400'>M</p>
                                </div>
                                <div className="color flex">
                                    <p className='text-gray-400 font-medium pr-2'>Couleur:</p>
                                    <p className='text-gray-400'>Rouge</p>
                                </div>
                            </div>
                        </div>
                        <div className="quantity col-span-3 text-center">
                            <input className='py-2 outline-none border border-gray-400 text-center' type="number" min={1} defaultValue={1} name="" id="" />
                        </div>
                        <div className="prix col-span-3 text-center">
                            <p className='italic font-bold'>10 DT</p>
                            <p className='text-sm text-gray-400'>10 Dt Chacun</p>
                        </div>
                        <div className="options flex justify-center gap-x-2 col-span-3 text-center">
                            <button className='cursor-pointer text-red-500 '><MdDelete size={35} /></button>
                            <button className='cursor-pointer text-blue-500 '><FaEdit size={35} /></button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}
