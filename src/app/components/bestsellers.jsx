"use client"
import Link from "next/link";
import { delay, motion } from "framer-motion";
const BestSellers = ()  => {
  
   const  bestSellers = [
        {path: '/aroma/croissant.jpg', title: 'croissants'},
        {
            path: '/aroma/mousseCoeur.jpg', title: 'coeurs'  
        },
        {path: '/aroma/orange.jpg', title: 'Orange'},
        {path: '/aroma/tartecitron.jpg', title: 'Tarte au Citron'}
    ]
  const itemVariant={
    hidden:{
      opacity:0,
      y:20
    },
  visible:(index)=>({
    transition:{
      delay:index*0.3,
      type:"spring"
    },
      y:0,
      opacity:1
  })
  }
  
    return (
       <main className=" flex flex-col items-center gap-5 ">
         <h1 className="md:text-4xl text-black font-bold text-2xl mt-2 text-center  ">Découvrez Nos <span className="text-white"> Meilleures Ventes </span></h1>
    <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-20  sm:gap-10  xxs:gap-8 gap-1">
    {
       
       bestSellers.map((bestSeller, index) => {
            return (
                <motion.li variants={itemVariant}  initial="hidden" whileInView="visible" viewport={{once:true}} custom={index} key={index} className="flex flex-col items-center gap-4">
                    <img src={bestSeller.path} alt={bestSeller.title} className="w-40 h-40 rounded-full" />
                    <h2 className="text-white font-bold text-2xl">{bestSeller.title}</h2>
                </motion.li>
            )
})}
    </ul>
        <Link className="bg-white text-aroma rounded-[50px] w-44 h-16 font-bold mt-6 pt-5 text-center"href="/produits"> Voir plus</Link>
        </main>
    );
    }
export default BestSellers;
