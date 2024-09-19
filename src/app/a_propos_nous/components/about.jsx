"use client" 

import Image from "next/image";
import { motion } from "framer-motion";
const About = () => {
    return (
        <motion.div initial={{opacity:0, y:50 }} transition={{delay:0.5, type:"tween"}} animate={{opacity:1, y:0}} className="flex flex-col items-center mt-12">
      
        <Image src="/aroma/aromaout.jpg" alt="entremet" height={620} width={1000} className="rounded-[35px]   md:px-3 px-4 md:rounded-[35px]   " />
            <h1 className="text-4xl font-bold text-aroma py-6">Qui sommes-nous </h1>
            <p className="md:max-w-[60vw] text-center max-w-96 font-medium">Depuis 2009, la Pâtisserie Aroma vous propose un large choix de gâteaux sucrés et salés, ainsi que de délicieuses viennoiseries, toutes préparées avec des ingrédients frais et de qualité. Laissez-vous tenter par nos créations gourmandes !.</p>
        </motion.div>
    );
}

export default About;
