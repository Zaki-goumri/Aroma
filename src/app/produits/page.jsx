'use client'
import { easeIn, motion } from "framer-motion";
import React, { useEffect } from "react";
import { listeProduits } from "./components/constantes";

import { useState } from "react";
import Card from "./components/card";
import {db} from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

 


export default function Page() {
  
  const [selectedContent, setSelectedContent] = useState( {category:'Tout les catégories',collect:'tout les categories'}); // Initially no content is selected  

  const [produits, setProduits] = useState([]);

  const fetchData = async () => {
    if(selectedContent !== null){
      if(selectedContent.collect !== "tout les categories"){
        try { 
        const querySnapshot = await getDocs(collection(db, selectedContent.collect));
        const docsData = querySnapshot.docs.map(doc => doc.data());
        setProduits(docsData);

    } catch (error) {
      console.log("Error getting documents: ", error);           
    }
  }
  else{
    try {
      let allDocsData = [];

      for (const coll of listeProduits) {
      const querySnapshot = await getDocs(collection(db, coll.collect));
      const docsData = querySnapshot.docs.map(doc => doc.data());
      allDocsData.push(...docsData);
      }
      
      setProduits(allDocsData);
      
    } 
    catch (error) {
      console.log("Error getting documents: ", error);
    }
  }
    
}
};
     useEffect(() => {
        fetchData();  
        },[selectedContent])

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
                  
                    <button onClick={toggleActiveClass} >
                    {isActive ? (
                       <img src="/assets/hambrgerClose.svg" className="w-8 h-8 "alt="menu is close"/>
                        ) : (
                      <img src="/assets/arrowbottom.svg" alt="arrow" className="w-4 h-4" />
                         )}
                    </button>
                    <h1 className="pb-1 ml-2 font-semibold flex items-center"> nos produits <span >  <img src="/assets/arrowright.svg" alt="arrow" className="w-4 h-4 mx-1 " /> </span>{selectedContent ? <span className="">{selectedContent.category}</span>: <span>Tout les catégories</span> }</h1>
                    
                   
                    </div>
                   


                <div className="lg:flex lg:flex-col lg:justify-start lg:items-center lg:mt-8 lg:gap-12 lg:w-fit  items-center lg:visible hidden ">
              <motion.button whileTap={{scale:0.85}} custom={-1} variants={buttonVar} initial="hidden" animate="visible" key={-1} className="font-semibold text-lg hover:text-gray-400" onClick={() => handleButtonClick({category:'Tout les catégories',collect:'tout les categories'})}>Tout les catégories</motion.button>

                    {

                        listeProduits.map((produit, index) => (
                            <motion.button whileTap={{scale:0.85}} custom={index} variants={buttonVar} initial="hidden" animate="visible" key={index} className="font-semibold text-lg hover:text-gray-400" onClick={() => handleButtonClick(produit)}>{produit.category}</motion.button>
                        ))
                    }
                 </div>
                </aside>
               
                <aside className="bg-aroma lg:w-3/4 w-screen   " >
                <div className={`lg:hidden ${isActive ? "block top-50" : "hidden"}  w-screen  bg-white pb-10 `}>
                        <ul className="flex flex-col items-center gap-5 pt-10 h-max">
                        <button  className="font-semibold text-lg hover:text-gray-400" onClick={() => handleButton({category:'Tout les catégories',collect:'tout les categories'})}>Tout les catégories</button>
                         
    
                {
                        listeProduits.map((produit, index) => (
                           <li key={index}>
                            <button  className="font-semibold text-lg hover:text-gray-400" onClick={() => handleButton(produit)}>{produit.category}</button>
                       

                            </li>
                    
                        ))
                    }
                </ul>
            </div>
          <motion.div variants={categoriesVar} initial="hidden" animate="visible"> 

            <div className="flex flex-col items-center mt-7">
           <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold  ">{selectedContent.category}</h1>

           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-6">  
            {produits.map((product,index) => (   
              <li key={index}>  
                <Card  
                 produit={product}  
                />  
              </li>  
            ))}  
          </ul>  
          </div>
         
         </motion.div>             
            </aside>
            </div>
        </main>
    );
    }
