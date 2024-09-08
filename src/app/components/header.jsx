'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    
    const toggleActiveClass = () => {
        setIsActive(!isActive);}
        const removeActive = () => {
            setIsActive(false)
          }
    

//        

    return (
        <main className="w-screen  flex justify-between lg:px-[93px] md:px-8 py-[32px] sm:px-10 xs:px-4 px-2">
          <Link className="flex items-center gap-[9px]" href="/">           
             <Image src="/assets/logo.svg" height={46} width={47} alt="aroma logo" />
                <h1 className="font-bold text-xl text-aroma">Aroma Cake </h1>
          </Link>
          <ul className={`md:flex items-center lg:gap-10 md:gap-5 text-lg font-medium  md:visible hidden`}>
              
                <li>
                    <a href="/a_propos_nous">À propos de nous</a>
                </li>
                <li>
                    <a href="#">Nos produits</a>
                </li>
                <li>
                    <a  href="tel:0673629225">Contactez-nous</a>
                </li>
            </ul>
           <button onClick={toggleActiveClass} className="md:hidden ">
          {isActive ? (
           <Image src="/assets/hambrgerClose.svg" height={40} width={40} alt="menu is close"/>
          ) : (
            <Image src="/assets/menu.svg" height={40} width={40} alt="menu is open"/>)
          }
          
           
            </button>
            <div className={`md:hidden ${isActive ? "block" : "hidden"} absolute top-20 left-0 w-full h-full bg-white z-50`}>
                <ul className="flex flex-col items-center gap-5 pt-20">
                    <li>
                        <a href="/a_propos_nous" onClick={removeActive} className="font-medium">À propos de nous</a>
                    </li>
                    <hr className="w-3/4"/>
                    <li>
                        <a href="#" onClick={removeActive} className="font-medium">Nos produits</a>
                    </li>
                    <hr className="w-3/4"/>
                    <li>
                        <a  href="tel:0673629225" onClick={removeActive} className="font-medium">Contactez-nous</a>
                    </li>
                    <hr className="w-3/4"/>
                </ul>
            </div>
        </main>
    );
    }
    export default Header;