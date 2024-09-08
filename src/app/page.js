'use client'
import React from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import BestSellers from "./components/bestsellers";
import Entremet from "./components/entremet";

export default function Home() {
  
 
 
 
  return (
    <main className="flex flex-col items-center ">
    <Header />
    <div className="flex md:justify-around  md:gap-10 lg:flex-row items-center md:mx-[100px] my-10 flex-col gap-4 ">
      <img src="/patisserie/entremet.png" alt="entremet" height={400} width={420} className="mb-4 md:px-0 px-12" />
      <aside className="flex flex-col items-start gap-7 xs:pl-4 pl-6">
        <h1 className="font-bold  text-2xl md:text-4xl max-w-sm text-aroma mb-3   ">Deliver You A Blissful Dessert in Every Bite</h1>
        <p className="max-w-xs md:leading-normal leading-6  ">Lorem ipsum dolor sit amet consectetur. Dictum et at posuere dolor lacus sed urna nisl. Fermentum et purus lectus nisi gravida morbi vitae condimentum ullamcorper. Justo diam duis in ullamcorper aliquam fringilla et sed semper. Sapien magna sodales nibh sapien viverra neque gravida risus.</p>
        <button className="bg-aroma text-white rounded-[50px] w-44 h-16 font-bold mb-6 ">À propos de nous</button>
       

      </aside>
    </div >
          

    <div className="bg-aroma w-screen overflow-hidden mt-5  flex flex-col content-center "> 
    <img  src="/assets/bg.svg" alt="background" className="w-screen h-max relative top-0"  />

      <BestSellers />
      <Entremet />
      
  </div>
    <Footer />
    </main>
  );
}
