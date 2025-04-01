import React from 'react'
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { useState } from 'react';

export default function Carousel({ children: slides }) {
    const [current, setCurrent] = useState(0)
    const prev = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1 ))
    const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1 ))
    return (
        <div className='overflow-hidden relative'>
            <div className='flex h-100 transition-transform ease-out duration-500' style={{transform:`translateX(-${current*100}%)`}}>{slides}</div>
            <div className=" px-4 absolute buttons inset-0  flex justify-between items-center">
                <button onClick={prev} className="left cursor-pointer bg-black opacity-70 hover:opacity-100 transition-opacity p-4 rounded-full text-white"><IoChevronBack size={30} /></button>
                <button onClick={next} className="right cursor-pointer bg-black opacity-70 hover:opacity-100 transition-opacity p-4 rounded-full text-white"><IoChevronForward size={30} /></button>
            </div>
        </div>
    )
}
