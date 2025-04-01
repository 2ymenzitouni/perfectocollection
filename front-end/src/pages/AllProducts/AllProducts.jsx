import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { RiTShirt2Fill } from "react-icons/ri";

export default function AllProducts() {

    const addclass = (e,Class="bg-gray-200") => {
        const mainList = document.querySelectorAll(".filter button");
        mainList.forEach((el) => {
            el.classList.remove(Class)
        })
        e.currentTarget.classList.add(Class)
    }

    return (
        <main>
            <div className="all-products container mx-auto">
                <div className="heading flex px-12 justify-center items-center pb-6">
                    <h2 className='text-3xl font-bold text-left grow flex items-center gap-x-2'>Tous Produits <RiTShirt2Fill size={35}/></h2>
                    <div className="filter flex gap-x-6">
                        <button onClick={addclass} className='cursor-pointer rounded-full bg-gray-200 px-4 py-2 hover:bg-gray-200 transition-all'>Filter1</button>
                        <button onClick={addclass} className='cursor-pointer rounded-full px-4 py-2 hover:bg-gray-200 transition-all'>Filter2</button>
                        <button onClick={addclass} className='cursor-pointer rounded-full px-4 py-2 hover:bg-gray-200 transition-all'>Filter3</button>
                        <button onClick={addclass} className='cursor-pointer rounded-full px-4 py-2 hover:bg-gray-200 transition-all'>Filter4</button>
                    </div>
                </div>
                <section className='flex justify-center gap-7 flex-wrap'>
                    <a href="/product">
                        <article className='shadow pb-4 rounded-xl hover:scale-105 transition cursor-pointer relative'>
                            {/* <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span> */}
                            <img className='w-3xs rounded-xl' src="../../public/item.jpg" alt="" />
                            <div className="informations">
                                <h3 className="name pt-2">Bottines Femme- Simili Daim</h3>
                                <div className="price flex justify-around">
                                    <p className='text-gray-400 text-xl line-through'>119.900 TND</p>
                                    <p className='font-bold text-xl'>79.900 TND</p>
                                </div>
                                <div className="rating flex justify-center">
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <CiStar className='text-amber-300' />
                                </div>
                            </div>
                        </article>
                    </a>
                    <a href="/product">
                        <article className='shadow pb-4 rounded-xl hover:scale-105 transition cursor-pointer relative'>
                            {/* <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span> */}
                            <img className='w-3xs rounded-xl' src="../../public/item.jpg" alt="" />
                            <div className="informations">
                                <h3 className="name pt-2">Bottines Femme- Simili Daim</h3>
                                <div className="price flex justify-around">
                                    <p className='text-gray-400 text-xl line-through'>119.900 TND</p>
                                    <p className='font-bold text-xl'>79.900 TND</p>
                                </div>
                                <div className="rating flex justify-center">
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <CiStar className='text-amber-300' />
                                </div>
                            </div>
                        </article>
                    </a>
                    <a href="/product">
                        <article className='shadow pb-4 rounded-xl hover:scale-105 transition cursor-pointer relative'>
                            {/* <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span> */}
                            <img className='w-3xs rounded-xl' src="../../public/item.jpg" alt="" />
                            <div className="informations">
                                <h3 className="name pt-2">Bottines Femme- Simili Daim</h3>
                                <div className="price flex justify-around">
                                    <p className='text-gray-400 text-xl line-through'>119.900 TND</p>
                                    <p className='font-bold text-xl'>79.900 TND</p>
                                </div>
                                <div className="rating flex justify-center">
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <CiStar className='text-amber-300' />
                                </div>
                            </div>
                        </article>
                    </a>
                    <a href="/product">
                        <article className='shadow pb-4 rounded-xl hover:scale-105 transition cursor-pointer relative'>
                            {/* <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span> */}
                            <img className='w-3xs rounded-xl' src="../../public/item.jpg" alt="" />
                            <div className="informations">
                                <h3 className="name pt-2">Bottines Femme- Simili Daim</h3>
                                <div className="price flex justify-around">
                                    <p className='text-gray-400 text-xl line-through'>119.900 TND</p>
                                    <p className='font-bold text-xl'>79.900 TND</p>
                                </div>
                                <div className="rating flex justify-center">
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <CiStar className='text-amber-300' />
                                </div>
                            </div>
                        </article>
                    </a>
                    <a href="/product">
                        <article className='shadow pb-4 rounded-xl hover:scale-105 transition cursor-pointer relative'>
                            {/* <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span> */}
                            <img className='w-3xs rounded-xl' src="../../public/item.jpg" alt="" />
                            <div className="informations">
                                <h3 className="name pt-2">Bottines Femme- Simili Daim</h3>
                                <div className="price flex justify-around">
                                    <p className='text-gray-400 text-xl line-through'>119.900 TND</p>
                                    <p className='font-bold text-xl'>79.900 TND</p>
                                </div>
                                <div className="rating flex justify-center">
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <CiStar className='text-amber-300' />
                                </div>
                            </div>
                        </article>
                    </a>
                    <a href="/product">
                        <article className='shadow pb-4 rounded-xl hover:scale-105 transition cursor-pointer relative'>
                            {/* <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span> */}
                            <img className='w-3xs rounded-xl' src="../../public/item.jpg" alt="" />
                            <div className="informations">
                                <h3 className="name pt-2">Bottines Femme- Simili Daim</h3>
                                <div className="price flex justify-around">
                                    <p className='text-gray-400 text-xl line-through'>119.900 TND</p>
                                    <p className='font-bold text-xl'>79.900 TND</p>
                                </div>
                                <div className="rating flex justify-center">
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <CiStar className='text-amber-300' />
                                </div>
                            </div>
                        </article>
                    </a>
                    <a href="/product">
                        <article className='shadow pb-4 rounded-xl hover:scale-105 transition cursor-pointer relative'>
                            <span className='bg-red-600 text-white rounded-full absolute -top-3 -right-3 flex justify-center items-center'>50%</span>
                            <img className='w-3xs rounded-xl' src="../../public/item.jpg" alt="" />
                            <div className="informations">
                                <h3 className="name pt-2">Bottines Femme- Simili Daim</h3>
                                <div className="price flex justify-around">
                                    <p className='text-gray-400 text-xl line-through'>119.900 TND</p>
                                    <p className='font-bold text-xl'>79.900 TND</p>
                                </div>
                                <div className="rating flex justify-center">
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <CiStar className='text-amber-300' />
                                </div>
                            </div>
                        </article>
                    </a>
                    <a href="/product">
                        <article className='shadow pb-4 rounded-xl hover:scale-105 transition cursor-pointer relative'>
                            {/* <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span> */}
                            <img className='w-3xs rounded-xl' src="../../public/item.jpg" alt="" />
                            <div className="informations">
                                <h3 className="name pt-2">Bottines Femme- Simili Daim</h3>
                                <div className="price flex justify-around">
                                    <p className='text-gray-400 text-xl line-through'>119.900 TND</p>
                                    <p className='font-bold text-xl'>79.900 TND</p>
                                </div>
                                <div className="rating flex justify-center">
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <CiStar className='text-amber-300' />
                                </div>
                            </div>
                        </article>
                    </a>
                    <a href="/product">
                        <article className='shadow pb-4 rounded-xl hover:scale-105 transition cursor-pointer relative'>
                            {/* <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span> */}
                            <img className='w-3xs rounded-xl' src="../../public/item.jpg" alt="" />
                            <div className="informations">
                                <h3 className="name pt-2">Bottines Femme- Simili Daim</h3>
                                <div className="price flex justify-around">
                                    <p className='text-gray-400 text-xl line-through'>119.900 TND</p>
                                    <p className='font-bold text-xl'>79.900 TND</p>
                                </div>
                                <div className="rating flex justify-center">
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <CiStar className='text-amber-300' />
                                </div>
                            </div>
                        </article>
                    </a>
                    <a href="/product">
                        <article className='shadow pb-4 rounded-xl hover:scale-105 transition cursor-pointer relative'>
                            {/* <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span> */}
                            <img className='w-3xs rounded-xl' src="../../public/item.jpg" alt="" />
                            <div className="informations">
                                <h3 className="name pt-2">Bottines Femme- Simili Daim</h3>
                                <div className="price flex justify-around">
                                    <p className='text-gray-400 text-xl line-through'>119.900 TND</p>
                                    <p className='font-bold text-xl'>79.900 TND</p>
                                </div>
                                <div className="rating flex justify-center">
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <FaStar className='text-amber-300' />
                                    <CiStar className='text-amber-300' />
                                </div>
                            </div>
                        </article>
                    </a>
                </section>
                <div className="pagination flex gap-x-2 justify-center my-6">
                    <a href="#" className='bg-gray-300 hover:bg-gray-400 p-2 rounded-sm'>Prev</a>
                    <a href="#" className='border border-gray-300 hover:bg-gray-200 rounded-b-sm px-4 py-2'>1</a>
                    <a href="#" className='border border-gray-300 hover:bg-gray-200 rounded-b-sm px-4 py-2'>2</a>
                    <a href="#" className='border border-gray-300 hover:bg-gray-200 rounded-b-sm px-4 py-2'>3</a>
                    <a href="#" className='border border-gray-300 hover:bg-gray-200 rounded-b-sm px-4 py-2'>4</a>
                    <a href="#" className='bg-gray-300 hover:bg-gray-400  p-2 rounded-sm'>Next</a>
                </div>
            </div>
        </main>
    )
}
