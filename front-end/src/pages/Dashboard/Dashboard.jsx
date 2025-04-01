import React from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import AddProduct from '../../components/AddProduct/AddProduct';
import { FaUserCircle } from "react-icons/fa";
import AddCategory from '../../components/AddCategory/AddCategory';
import AddFabricAccessories from '../../components/AddFabricAccessories/AddFabricAccessories';
import ManageProducts from '../../components/ManageProducts/ManageProducts';
import Users from '../../components/Users/Users';
import { FaHome } from "react-icons/fa";

import { useState } from 'react';
export default function Dashboard() {
    const [visible, setVisible] = useState(true)
    const [div , setDiv] = useState("Gérer les produits")
    return (
        <>
            <main>
                <div className="row flex">
                    <div className="col-1 flex flex-col p-8 gap-5 shadow-2xl">
                        <button onClick={()=>{setVisible(false);setDiv("Ajouter un produit")}} className='cursor-pointer flex items-center gap-2 bg-green-600 text-white p-2 rounded-xl justify-center font-medium'>Ajouter Un Produit<FaPlusCircle/></button>
                        <button onClick={()=>{setVisible(false);setDiv("Ajouter Tissu & Accessoires")}} className='cursor-pointer flex items-center gap-2 bg-pink-600 text-white p-2 rounded-xl justify-center font-medium'>Tissu & Accessoires<FaPlusCircle/></button>
                        <button onClick={()=>{setVisible(false);setDiv("Ajouter une catégorie")}} className='cursor-pointer flex items-center gap-2 bg-fuchsia-600 text-white p-2 rounded-xl justify-center font-medium'>Categorie<FaPlusCircle/></button>
                        <button onClick={()=>{setVisible(true);setDiv("Gérer les prodiuts")}} className='cursor-pointer flex items-center gap-2 bg-blue-600 text-white p-2 rounded-xl justify-center font-medium'>Gérer Les Produits</button>
                        <button onClick={()=>{setVisible(false);setDiv("Gérer les utilisateurs")}} className='cursor-pointer flex items-center gap-2 bg-black text-white p-2 rounded-xl justify-center font-medium'>Utilisateurs <MdManageAccounts/></button>
                        <div className="user-buttons flex items-center gap-2.5">
                            <a href='/home' className='cursor-pointer flex items-center gap-x-2 bg-blue-600 text-white p-2 rounded-xl justify-center font-medium'>Home <FaHome/></a>
                            <button className='cursor-pointer flex items-center gap-x-2 bg-red-600 text-white p-2 rounded-xl justify-center font-medium'>Logout <HiOutlineLogout/></button>
                            <button className='cursor-pointer flex items-center gap-x-2 bg-amber-600 text-white p-2 rounded-xl justify-center font-medium'>Paramètres <IoMdSettings /></button>
                        </div>
                    </div>
                    <div className="col-2 grow">
                        <h1 className='pt-8 justify-center font-bold text-4xl flex items-center gap-x-2'>{div}<FaUserCircle size={40}/></h1>
                        <div className='px-8 pt-6'>
                            {div === 'Ajouter un produit' && (<AddProduct/>)}
                            {div === 'Ajouter Tissu & Accessoires' && (<AddFabricAccessories/>)}
                            {div === 'Ajouter une catégorie' && (<AddCategory/>)}
                            {visible && (<ManageProducts/>)}
                            {div == 'Gérer les utilisateurs' && (<Users/>)}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
