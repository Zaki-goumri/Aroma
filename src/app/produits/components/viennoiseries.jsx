import React from "react";
import  {viennoiseries } from "./constantes";



const Viennoiseries = () => {
  
    return (
        <div className="flex justify-center items-center flex-col my-10 mx-0">
        <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold  ">Les viennoiseries</h1>
        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2   grid-cols-1  gap-10 mt-14">  {/* //grid-col-3 is better */}
            {viennoiseries.map((item,index) => (
                <li key={index} className="flex justify-center items-center flex-col">
                <img src={item.path} alt={item.name} className=" h-52 w-48 "/>
                <p className="text-md xs:text-lg sm:text-xl text-slate-300 font-medium mt-4 text-center max-w-fit">{item.name}</p> 
            </li>
               
            ))}
        </ul>
        </div>
    );
    }
    export default Viennoiseries;