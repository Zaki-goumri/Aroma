'use client'
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import BestSellers from "./components/bestsellers";
import Entremet from "./components/entremet";
import Link from "next/link";

export default function Home() {
  
 
 
 
  return (
    <main className="flex flex-col items-center ">
    <Header />
    <div className="flex md:justify-around  md:gap-10 lg:flex-row items-center md:mx-[100px] my-10 flex-col gap-4 mb-0 ">
      <img src="/patisserie/entremet.png" alt="entremet" height={400} width={420} className="mb-4 md:px-0 px-12" />
      <aside className="flex flex-col items-start gap-7 xs:pl-4 pl-6">
        <h1 className="font-bold  text-2xl md:text-4xl max-w-sm text-aroma mb-3   ">Aroma, une pâtisserie </h1>
        <p className="max-w-xs md:leading-normal leading-6 font-medium ">Artisanat, passion et saveurs.Nous vous proposons des pâtisseries artisanales, élaborées avec des ingrédients frais et locaux, dans une ambiance chaleureuse. Laissez-vous tenter par nos délices !

</p>
        <Link href='/a_propos_nous' className="bg-aroma text-white rounded-[50px] w-44 h-16 font-bold text-center pt-5 ">À propos de nous</Link>
       

      </aside>
    </div >
          

    <div className="bg-aroma w-screen overflow-hidden mt-0  flex flex-col content-center "> 
    <img  src="/assets/bg.svg" alt="background" className="w-screen h-max relative top-0"  />

      <BestSellers />
      <Entremet />
      
  </div>
    <Footer />
    </main>
  );
}
