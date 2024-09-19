import React from "react";
import Image from "next/image";


const Card = ({pic,name,description,price}) => {
  
    return (
        <div className="flex justify-center items-center flex-col my-10 mx-0">
            <Image src={pic}  alt={name} height={300} width={270} className="rounded-3xl overflow-hidden"/>
            <h1 className="text-xl xs:text-2xl sm:text-3xl text-white font-bold text-center ">{name}</h1>
            <p className="text-md xs:text-lg sm:text-xl text-slate-300 font-medium mt-4 text-center max-w-fit">{description}</p>
            <p className="text-md xs:text-lg sm:text-xl text-slate-300 font-medium mt-4 text-center max-w-fit">{price} DA</p>
               
        </div>
    );
    }
    export default Card;