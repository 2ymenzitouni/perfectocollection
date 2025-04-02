import { BsCartCheck } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import './navbar.css'
export default function Navbar() {
    const addclass = (e) => {
        const mainList = document.querySelectorAll(".navbar > ul > li > a");
        mainList.forEach((el) => {
            el.classList.remove("bg-blue-600", "text-white", "font-medium")
        })
        e.currentTarget.classList.add("bg-blue-600", "text-white", "font-medium")
    }
    return (
        <div className="navbar container mx-auto border-b-2 border-gray-300 bg-white flex items-center justify-around py-4 fixed z-50 left-0 right-0 top-0" >
            <div className="logo capitalize w-50" ><a href="/home"><img src="../public/logoo.png" alt="" /></a></div>
            <ul className="flex gap-x-6" >
                <li><a href="/allproducts" onClick={addclass} className="py-2 px-4 bg-blue-600 font-medium rounded-xl text-white transition-colors hover:bg-blue-600 hover:text-white hover:font-medium">Nouvelle Collection</a></li>
                <li><a href="/allproducts" onClick={addclass} className="rounded-xl py-2 px-4 transition-colors hover:bg-blue-600 hover:text-white hover:font-medium">Hiver</a></li>
                <li><a href="/allproducts" onClick={addclass} className="rounded-xl py-2 px-4 transition-colors hover:bg-blue-600 hover:text-white hover:font-medium">Eté</a></li>
                <li><a href="/allproducts" onClick={addclass} className="rounded-xl py-2 px-4 transition-colors hover:bg-blue-600 hover:text-white hover:font-medium">Promotions</a></li>
                <li><a href="*" onClick={addclass} className="rounded-xl py-2 px-4 transition-colors hover:bg-blue-600 hover:text-white hover:font-medium">Nos Contact</a></li>
            </ul>
            <div className="user flex items-center gap-x-8">
                <div className="search flex items-center relative w-2xs" >
                    <span className="absolute left-2 text-gray-400"><IoSearchOutline size={20} /></span>
                    <input type="text" className="py-2 pl-10 outline-none border border-gray-300 rounded-sm w-full" placeholder="Rechercher" />
                </div>
                <div className="cart relative">
                    <a href="/cart">
                        <span className="text-2xl"><BsCartCheck /></span>
                        <span className="compteur bg-red-600 text-white flex justify-center items-center absolute -top-2 -right-2 rounded-full w-5 h-5">4</span>
                    </a>
                </div>
                <a href="/user/dashboard">
                    <div className="account p-4 bg-gray-300 border border-gray-400 rounded-full w-12 h-12 flex justify-center items-center">
                        <p className="text-gray-600">A</p>
                    </div>
                </a>
            </div>
        </div>
    )
}