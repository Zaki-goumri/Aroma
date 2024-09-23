'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
import { easeIn, motion } from "framer-motion";
const Header = () => {
    const navBarElement=[{name:"Acceuil ",href:"/"},{name:"À propos de nous",href:"/a_propos_nous"},{name:"Nos produits",href:"/produits"},{name:"Contactez-nous",href:"tel:024943317"}]

    const [isActive, setIsActive] = useState(false);
    
    const toggleActiveClass = () => {
        setIsActive(!isActive);}
        const removeActive = () => {
            setIsActive(false)
          }
    

//        
 const navBarVar={
    hidden:{
      opacity:0,
      y:-200,
    },
   visible:{
  opacity:1,
  y:0,
  transition:{
        
        easing:easeIn,
         type:"spring" 
      }

}
  }
    return (
    <motion.div variants={navBarVar} initial="hidden" animate="visible">        <main className="w-screen  flex justify-between lg:px-[93px] md:px-8 py-[32px] sm:px-10 xs:px-6 px-4">
      <Link className="flex items-center gap-[9px]" href="/">           
        <Image src="/assets/aroma.svg" height={90} width={90} alt="aroma logo" />
      </Link>
      <ul className={`md:flex items-center lg:gap-10 md:gap-5 text-lg font-medium  md:visible hidden`}>
        {
          navBarElement.map((elem,index)=>(
            <li key={index} className="hover:scale-105">
              <Link href={elem.href}>{elem.name} </Link>

            </li>
          ))
        }
              </ul>
      <button onClick={toggleActiveClass} className="md:hidden ">
        {isActive ? (
          <Image src="/assets/closeHeader.svg" height={40} width={40} alt="menu is close"/>
        ) : (
            <Image src="/assets/menu.svg" height={40} width={40} alt="menu is open"/>)
        }


      </button>
      <div className={`md:hidden ${isActive ? "block" : "hidden"} absolute top-36 left-0 w-full h-full bg-white z-50`}>
        <ul className="flex flex-col items-center gap-5 pt-20">
{
          navBarElement.map((elem,index)=>(
            <li key={index} className="gap-y-4 w-screen flex flex-col items-center">
              <Link href={elem.href} className="font-medium" onClick={removeActive}> {elem.name}</Link>
              <hr className="w-3/4"/>
            </li>
          ))
        }
                    
        </ul>
      </div>
    </main>
    </motion.div>    );
    }
    export default Header;
