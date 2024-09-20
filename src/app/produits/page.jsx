'use client'
import { easeIn, motion } from "framer-motion";
import React from "react";
import Footer from "../components/footer";
import { listeProduits, viennoiseries,salés,entremets, gateauxOrientaux, patisseries, tartes } from "./components/constantes";

import { useState } from "react";
import Card from "./components/card";
export default function Page() {
   
  const buttonVar={
    hidden:{
      x:"-5vw",
      opacity:0
    },
  visible:(index)=>(
      {
        x:0,
        transition:{

        delay:index*0.175,
        type:"spring",
        ease:easeIn,
        },
        opacity:1,
      }
  )
  }
  const categoriesVar={
    hidden:{
      opacity:0,
    },
    visible:{
      opacity:1,
      duration:0.5
    }
  }
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
                    <button className="font-semibold text-lg hover:text-gray-400 " onClick={() => handleButtonClick('toutes les categories')}>toutes les categories</button>
                    {
                        listeProduits.map((produit, index) => (
                            <motion.button whileTap={{scale:0.85}} custom={index} variants={buttonVar} initial="hidden" animate="visible" key={index} className="font-semibold text-lg hover:text-gray-400" onClick={() => handleButtonClick(produit)}>{produit}</motion.button>
                        ))
                    }
                 </div>
                </aside>
               
                <aside className="bg-aroma lg:w-3/4 w-screen   " >
                <div className={`md:hidden ${isActive ? "block top-50" : "hidden"}  w-screen  bg-white pb-10 `}>
                        <ul className="flex flex-col items-center gap-5 pt-10 h-max">
                        <button className="font-semibold text-lg hover:text-gray-400" onClick={() => handleButton('toutes les categories')}>toutes les categories</button>

    
                {
                        listeProduits.map((produit, index) => (
                           <li key={index}>
                            <button  className="font-semibold text-lg hover:text-gray-400" onClick={() => handleButton(produit)}>{produit}</button>
                            
                            </li>
                    
                        ))
                    }
                </ul>
            </div>
          <motion.div variants={categoriesVar} initial="hidden" animate="visible"> {selectedContent === 'toutes les categories' &&
            

            <div className="flex flex-col items-center mt-7">
            <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold  ">{selectedContent}</h1>

            {/* <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  
            {viennoiseries.concat( entremets,gateauxOrientaux, salés).map((product) => (   
              <li key={product.id}>  
                <Card  
                  pic={product.path}  
                  name={product.name}  
                  description={product.description}  
                  price={product.price}  
                />  
              </li>  
            ))}  
          </ul>   */}
            <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold  ">viennoiseries</h1>

<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  
 {viennoiseries.map((product) => (   
   <li key={product.id}>  
     <Card  
       pic={product.path}  
       name={product.name}  
       description={product.description}  
       price={product.price}  
     />  
   </li>  
 ))}  
</ul> 

{/* <h1 className="text-lg xs:text-xl sm:text-2xl text-white font-bold  "> salés</h1>


          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  
            {salés.map((product) => (   
              <li key={product.id}>  
                <Card  
                  pic={product.path}  
                  name={product.name}  
                  description={product.description}  
                  price={product.price}  
                />  
              </li>  
            ))}  
          </ul>   */}
          <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold  "> entremets</h1>

<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  

 {entremets.map((product) => (   
   <li key={product.id}>  
     <Card  
       pic={product.path}  
       name={product.name}  
       description={product.description}  
       price={product.price}  
     />  
   </li>  
 ))}  
</ul>  

<h1 className="text-lg xs:text-xl sm:text-2xl text-white font-bold  "> gateaux Orientaux</h1>

<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  

 {gateauxOrientaux.map((product) => (   
   <li key={product.id}>  
     <Card  
       pic={product.path}  
       name={product.name}  
       description={product.description}  
       price={product.price}  
     />  
   </li>  
 ))}  
</ul>  
<h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold  "> patisseries</h1>

<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  

 {patisseries.map((product) => (   
   <li key={product.id}>  
     <Card  
       pic={product.path}  
       name={product.name}  
       description={product.description}  
       price={product.price}  
     />  
   </li>  
 ))}  
</ul>  

<h1 className="text-lg xs:text-xl sm:text-2xl text-white font-bold  "> tartes </h1>

           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  
 
            {tartes.map((product) => (   
              <li key={product.id}>  
                <Card  
                  pic={product.path}  
                  name={product.name}  
                  description={product.description}  
                  price={product.price}  
                />  
              </li>  
            ))}  
          </ul>  

          </div>
  }
{/* ------------------------------------------------------------- */}
            {selectedContent === 'viennoiseries' && 
            <div className="flex flex-col items-center mt-7">
            <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold  ">{selectedContent}</h1>

           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  
            {viennoiseries.map((product) => (   
              <li key={product.id}>  
                <Card  
                  pic={product.path}  
                  name={product.name}  
                  description={product.description}  
                  price={product.price}  
                />  
              </li>  
            ))}  
          </ul>  
          </div>
            }
            {selectedContent === 'salés' && 

<div className="flex flex-col items-center mt-7">
           <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold  "> {selectedContent}</h1>


          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  
            {salés.map((product) => (   
              <li key={product.id}>  
                <Card  
                  pic={product.path}  
                  name={product.name}  
                  description={product.description}  
                  price={product.price}  
                />  
              </li>  
            ))}  
          </ul>  
          </div>
            }
            {selectedContent === 'entremets' && 
                           <div className="flex flex-col items-center mt-7">
                           <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold  "> {selectedContent}</h1>

           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  
 
            {entremets.map((product) => (   
              <li key={product.id}>  
                <Card  
                  pic={product.path}  
                  name={product.name}  
                  description={product.description}  
                  price={product.price}  
                />  
              </li>  
            ))}  
          </ul>  
          </div>
            }
             {selectedContent === 'gateaux orientaux' && 
                           <div className="flex flex-col items-center mt-7">
                           <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold  "> {selectedContent}</h1>

           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  
 
            {gateauxOrientaux.map((product) => (   
              <li key={product.id}>  
                <Card  
                  pic={product.path}  
                  name={product.name}  
                  description={product.description}  
                  price={product.price}  
                />  
              </li>  
            ))}  
          </ul>  
          </div>
            }



             {selectedContent === 'Patisseries' && 
                          
                          <div className="flex flex-col items-center mt-7">
                           <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold  "> {selectedContent}</h1>

           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  
 
            {patisseries.map((product) => (   
              <li key={product.id}>  
                <Card  
                  pic={product.path}  
                  name={product.name}  
                  description={product.description}  
                  price={product.price}  
                />  
              </li>  
            ))}  
          </ul>  
          </div>
            }

{selectedContent === 'tartes' && 
                          
                          <div className="flex flex-col items-center mt-7">
                           <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold  "> {selectedContent}</h1>

           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  
 
            {tartes.map((product) => (   
              <li key={product.id}>  
                <Card  
                  pic={product.path}  
                  name={product.name}  
                  description={product.description}  
                  price={product.price}  
                />  
              </li>  
            ))}  
          </ul>  
          </div>
            }
         
         </motion.div>             
            </aside>
            </div>
            <Footer />
        </main>
    );
    }
