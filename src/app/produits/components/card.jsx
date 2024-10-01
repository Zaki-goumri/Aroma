import React from "react";
import Image from "next/image";


const Card = ({produit}) => {
  
    return (
        <div className="flex justify-center items-center flex-col my-10 mx-0">
            <Image src={produit.url}  alt={produit.name} height={300} width={270} className="rounded-3xl overflow-hidden"/>
            <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold text-center ">{produit.name}</h1>
            <p className="text-md xs:text-lg sm:text-xl text-slate-300 font-medium mt-4 text-center max-w-fit">{produit.description}</p>
            <p className="text-md xs:text-lg sm:text-xl text-slate-300 font-medium mt-4 text-center max-w-fit">{produit.price} DA</p>
               
        </div>
    );
    }
    export default Card;