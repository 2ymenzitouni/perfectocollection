import { BsCartCheck } from "react-icons/bs";
export default function Navbar() {
    return (
        <div className="navbar container mx-auto flex items-center justify-around py-4" >
            <div className="logo capitalize w-50" > <img src="../public/logoo.png" alt="" /> </div>
            <ul className="flex gap-x-6" >
                <li><a href="">Nouvelle Collection</a></li>
                <li><a href="">Hiver</a></li>
                <li><a href="">Eté</a></li>
                <li><a href="">Promotions</a></li>
                <li><a href="">Nos Contact</a></li>
            </ul>
            <div className="user flex items-center gap-x-4">
                <div className="search" ><input type="text" placeholder="rechercher" /></div>
                <div className="cart"><span className="text-2xl"><BsCartCheck /></span>
                <span className="compteur">0</span> </div>
            </div>
    
        </div>
    )
}