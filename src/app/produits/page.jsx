'use client'

import Header from "../components/header";
import React from "react";
import Footer from "../components/footer";
import { listeProduits } from "./components/constantes";
import Viennoiseries from "./components/viennoiseries";
import Salés from "./components/sales";
import Entremets from "./components/entremts";
import { useState } from "react";

export default function Page() {

    const [selectedContent, setSelectedContent] = useState('toutes les categories'); // Initially no content is selected  

    const handleButtonClick = (content) => {  
      setSelectedContent(content); 
    };  
   
    const [isActive, setIsActive] = useState(false);
    
    const toggleActiveClass = () => {
        setIsActive(!isActive);}
        const removeActive = () => {
            setIsActive(false)
          }
   
   const handleButton = (content) => {
        handleButtonClick(content);
        removeActive();
   }

    return (
        <main className="flex flex-col">
            <Header />
            <div className="bg-macarons w-screen h-56 sm:bg-center bg-left bg-cover flex justify-center items-center ">
                <h1 className=" text-aroma font-bold text-center  text-xl xs:text-2xl sm:text-3xl md:text-4xl  2xl:text-6xl">Découvrez nos produits en ligne</h1>
            </div>
            <div className="flex flex-col lg:flex-row h-max">
                <aside className="lg:flex lg:flex-col lg:justify-start lg:items-center lg:mt-28 lg:gap-12 lg:w-1/4  lg:h-fit h-16 flex items-center ">
                    
            

                    <div className="flex  visible lg:hidden ml-3">
                  
                    <button onClick={toggleActiveClass} className="">
                    {isActive ? (
                       <img src="/assets/hambrgerClose.svg" className="w-8 h-8 "alt="menu is close"/>
                        ) : (
                      <img src="/assets/arrowbottom.svg" alt="arrow" className="w-4 h-4" />
                         )}
                    </button>
                    <h1 className="pb-1 ml-2 font-semibold flex items-center"> nos produits <span >  <img src="/assets/arrowright.svg" alt="arrow" className="w-4 h-4 mx-1 " /> </span> <span className="">{selectedContent}</span></h1>
                    
                   
                    </div>
                   


                <div className="lg:flex lg:flex-col lg:justify-start lg:items-center lg:mt-8 lg:gap-12 lg:w-fit  items-center lg:visible hidden ">
                    <button className="font-semibold text-lg hover:text-gray-400 " onClick={() => handleButtonClick('All')}>toutes les categories</button>
                    {
                        listeProduits.map((produit, index) => (
                            <button key={index} className="font-semibold text-lg hover:text-gray-400" onClick={() => handleButtonClick(produit)}>{produit}</button>
                        ))
                    }
                 </div>
                </aside>
               
                <aside className="bg-aroma lg:w-3/4 w-screen  " >
                <div className={`md:hidden ${isActive ? "block top-50" : "hidden"}  w-screen  bg-white pb-10 `}>
                        <ul className="flex flex-col items-center gap-5 pt-10 h-max">
                        <button className="font-semibold text-lg hover:text-gray-400" onClick={() => handleButton('All')}>toutes les categories</button>

    
                {
                        listeProduits.map((produit, index) => (
                           <li key={index}>
                            <button  className="font-semibold text-lg hover:text-gray-400" onClick={() => handleButton(produit)}>{produit}</button>
                            
                            </li>
                    
                        ))
                    }
                </ul>
            </div>
                    {selectedContent === 'toutes les categories' &&
                        <div>
                            <Viennoiseries />
                            <Salés />
                            <Entremets />
                            
                        </div>
                    }

                    {selectedContent === 'viennoiseries' && <Viennoiseries />}
                    {selectedContent === 'salés' && <Salés />}
                    {selectedContent === 'entremets' && <Entremets />}
                </aside>
            </div>
            <Footer />
        </main>
    );
    }
