import React from 'react'
import Checkbox from '../../components/Checkbox/Checkbox'
import { FaCartPlus } from "react-icons/fa";
export default function Product() {
    return (
        <main>
            <div className="products container mx-auto ">
                <section className='flex justify-center'>
                    <div className="col-1">
                        <img src="../../public/1.jpg" alt="" />
                        <div className="more-pictures flex justify-center gap-x-4">
                            <article><img className="w-36 cursor-pointer" src="../../public/2.jpg" alt="" /></article>
                            <article><img className="w-36 cursor-pointer" src="../../public/3.jpg" alt="" /></article>
                            <article><img className="w-36  cursor-pointer" src="../../public/4.jpg" alt="" /></article>
                        </div>
                    </div>
                    <div className="col-2 pt-10">
                        <p className="name font-medium text-2xl pb-2">Nom du produit</p>
                        <div className="category flex gap-x-2 pb-4">
                            <p>Category: </p>
                            <p className='text-gray-400'>Category</p>
                        </div>
                        <div className="price flex gap-x-4">
                            <p className='text-gray-400 text-xl line-through'>119.900 TND</p>
                            <p className='font-bold text-xl'>79.900 TND</p>
                        </div>
                        <p className='description w-xl py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vero, qui perferendis maiores neque, minima aut explicabo repudiandae ratione quos autem optio unde accusantium adipisci nam, id illo voluptates aliquam?</p>
                        <div className="size flex gap-x-4 py-4">
                            <button className='font-medium border border-sky-500 rounded-sm px-4 inline-block bg-sky-500 text-white cursor-pointer'>XS</button>
                            <button className='font-medium border border-sky-500 rounded-sm px-4 inline-block  text-sky-500 cursor-pointer'>S</button>
                            <button className='font-medium border border-sky-500 rounded-sm px-4 inline-block  text-sky-500 cursor-pointer'>M</button>
                            <button className='font-medium border border-sky-500 rounded-sm px-4 inline-block  text-sky-500 cursor-pointer'>L</button>
                        </div>
                        <div className="colors flex gap-x-4">
                            <p>Couleurs: </p>
                            <Checkbox color='bg-red-600' text={'Rouge'} />
                            <Checkbox color='bg-blue-600' text={'Bleu'} />
                            <Checkbox color='bg-amber-400' text={'Jaune'} />
                            <Checkbox color='bg-green-600' text={'Vert'} />
                        </div>
                        <div className="quantity flex gap-x-4 items-center">
                            <p>Quantité: </p>
                            <input className='py-2 outline-none border border-gray-400 text-center' type="number" min={1} defaultValue={1} name="" id="" />
                        </div>
                        <div className="buttons flex gap-x-4 py-4">
                            <button className='rounded-sm bg-sky-600 py-2 px-4 text-white cursor-pointer flex items-center gap-x-2'><FaCartPlus size={25} />Ajouter Au Panier</button>
                            <button className='rounded-sm bg-sky-600 py-2 px-4 text-white cursor-pointer inline-block'>Commander</button>
                        </div>
                    </div>
                </section>
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
