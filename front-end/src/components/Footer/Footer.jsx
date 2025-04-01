import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className='bg-black text-white flex justify-around items-start flex-wrap px-12 py-4'>
        <div className="logo self-center">logo</div>
        <p className='apropos w-3xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis culpa at hic corporis nulla nostrum unde eos.</p>
        <ul>
            <li><a href="#">List1</a></li>
            <li><a href="#">List2</a></li>
            <li><a href="#">List3</a></li>
            <li><a href="#">List4</a></li>
        </ul>
        <div className="social-media text-center">
            <p className='pb-4'>Suivez Nous!</p>
            <div className='flex gap-x-4'>
                <FaFacebook size={30}/>
                <FaSquareInstagram size={30}/>
                <AiFillTikTok size={30}/>
            </div>
        </div>
    </footer>
  )
}
