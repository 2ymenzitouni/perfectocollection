import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Carousel from '../../components/Carousel/Carousel';

export default function Home() {
  const slides = [
    'hero.png',       
    'hero.png',       
    'hero.png',       
   ]
  return (
    <main>
      <div className="hero">
        <Carousel>{slides.map((source)=>(
          <img src={source}/>
        ))}</Carousel>
      </div>
      {/* videos */}
      <div className="videos container mx-auto pt-10">
        <section className='flex gap-4 justify-center'>
          <article className='w-sm h-60 bg-blue-300 text-white flex justify-center items-center'>1</article>
          <article className='w-sm h-60 bg-blue-300 text-white flex justify-center items-center'>2</article>
          <article className='w-sm h-60 bg-blue-300 text-white flex justify-center items-center'>3</article>
        </section>
      </div>
      {/* discount */}
      <div className="discount container mx-auto">
        <h2 className='text-3xl font-bold py-6 text-center'>Nos dernières promotions</h2>
        <section className='flex justify-center gap-7 flex-wrap'>
          <a href="/product">
            <article className='shadow pb-4 rounded-xl hover:scale-105 transition cursor-pointer relative'>
              <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span>
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
              <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span>
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
              <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span>
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
              <span className='bg-red-600 text-white px-4 rounded-xs absolute top-4 left-2'>50%</span>
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
      </div>
      {/* all products here */}
      <div className="all-products container mx-auto mt-20">
        <h2 className='text-3xl font-bold pb-6 text-center'>Nos Produits</h2>
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
        <div className="more text-center mb-6">
          <a href="/allproducts" className="bg-blue-600 px-8 mt-6 py-2 inline-block text-white rounded-3xl">More</a>
        </div>
      </div>
    </main>
  )
}
