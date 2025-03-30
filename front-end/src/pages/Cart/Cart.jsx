import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

export default function Cart() {
    return (
        <main className='p-20'>
            <h2 className='text-3xl font-bold pb-6 flex items-center gap-x-2'>Panier <BsCart4 /></h2>
            <div className="cart container mx-auto flex gap-x-4">
                <div className="col1 grow shadow px-2 border border-gray-200 pt-4">
                    <div className="headings grid grid-cols-12">
                        <p className='col-span-3 text-gray-400 text-center'>Produit</p>
                        <p className='col-span-3 text-gray-400 text-center'>Quantité</p>
                        <p className='col-span-3 text-gray-400 text-center'>Prix</p>
                        <p className='col-span-3 text-gray-400 text-center'></p>
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
                        <div className="remove col-span-3 text-red-500 text-center">
                            <button className='cursor-pointer'><MdDelete size={35} /></button>
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
                        <div className="remove col-span-3 text-red-500 text-center">
                            <button className='cursor-pointer'><MdDelete size={35} /></button>
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
                        <div className="remove col-span-3 text-red-500 text-center">
                            <button className='cursor-pointer'><MdDelete size={35} /></button>
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
                        <div className="remove col-span-3 text-red-500 text-center">
                            <button className='cursor-pointer'><MdDelete size={35} /></button>
                        </div>
                    </article>
                </div>
                <div className="col2 shadow border border-gray-200 p-6 px-8">
                    <div className="tva flex items-center py-2">
                        <p className='pr-4 text-sm text-gray-600'>TVA:</p>
                        <p className='font-bold text-sm text-gray-600'>0.5 Dt</p>
                    </div>
                    <div className="delivery flex items-center py-2">
                        <p className='pr-4 text-sm text-gray-600'>Livraison:</p>
                        <p className='font-bold text-sm text-gray-600'>7 Dt</p>
                    </div>
                    <div className="total flex items-center py-2">
                        <p className='pr-4 text-2xl'>Prix Total:</p>
                        <p className='font-bold text-2xl'>150 Dt</p>
                    </div>
                    <div className="buttons flex flex-col">
                        <button className='rounded-sm bg-sky-600 py-2 px-4 my-4 text-white cursor-pointer text-center'>Commander</button>
                        <button className='rounded-sm bg-green-600 py-2 px-4 text-white cursor-pointer text-center'>Continuer le shopping</button>
                    </div>
                </div>
            </div>
            <div className="buy flex justify-center">
                <form action="">
                    <h2 className='text-3xl font-bold py-6 text-center'>Commander</h2>
                    <div className="product-name my-6">
                        <label htmlFor="" className='w-30 inline-block'>Nom du prduit</label>
                        <input className="border border-gray-400 py-2 bg-gray-100 w-sm pl-4 outline-none rounded-xs" type="text" readOnly value={'product name'} />
                    </div>
                    <div className="product-category my-6">
                        <label htmlFor="" className='w-30 inline-block'>Category</label>
                        <input type="text" className='border border-gray-400 py-2 bg-gray-100 w-sm pl-4 outline-none rounded-xs' readOnly value={'product Category'} />
                    </div>
                    <div className="customer-name my-6">
                        <label htmlFor="" className='w-30 inline-block'>Votre Nom</label>
                        <input type="text" className='border border-gray-400 py-2 w-sm pl-4 outline-none rounded-xs placeholder:text-gray-400' placeholder={'Foulen Fouleni'} />
                    </div>
                    <div className="customer-phone my-6">
                        <label htmlFor="" className='w-30 inline-block'>Votre Téléphone</label>
                        <input type="text" className='border border-gray-400 py-2 w-sm pl-4 outline-none rounded-xs placeholder:text-gray-400' placeholder={'+216----'} />
                    </div>
                    <div className="customer-address my-6">
                        <label htmlFor="" className='w-30 inline-block'>Addresse</label>
                        <input type="text" className='border border-gray-400 py-2 w-sm pl-4 outline-none rounded-xs placeholder:text-gray-400' placeholder={'Addresse'} />
                    </div>
                    <div className="buy flex justify-center mb-4">
                        <button className='rounded-sm bg-sky-600 py-2 px-4 text-white cursor-pointer inline-block'>Commander</button>
                    </div>
                </form>

            </div>

        </main>
    )
}
