import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className='bg-gray-400 text-white flex justify-around items-start flex-wrap px-12 py-4'>
    <div className="logo capitalize w-50" > <img src="../public/logoo.png" alt="" /> </div>
         <p className='apropos w-3xs'>LIVRAISON A DOMICILE <br /> 
         livraison rapide sur toutes la Tunisie Vous pouvez choisir entre l'envoi à domicile ou l'enlèvement dans l'une des boutiques perfecto de votre choix</p>
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
