import Link from "next/link";
import { easeIn, motion } from "framer-motion";
const Footer = () => {
  const footerVars={
    hidden:{
  opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        ease:easeIn
      }
         }
  }
    return (
    <motion.div variants={footerVars} initial="hidden" whileInView="visible" viewport={{once:true}}>       
    
     <footer className="w-screen md:px-20 mt-20 mb-10 flex md:justify-between  flex-col md:flex-row gap-4 px-4 h-52">
      <div className="leading-5 flex flex-col gap-4 justify-start">
        <h1 className="text-3xl font-bold ml-0"><span>&#8226; </span>Visitez-nous</h1>
        <span className="flex gap-2">
          <img src="/assets/location.svg" alt="lacation" />
          <p> Residence Ysrf ,coopérative, Boumerdes</p>
        </span>
        <span className="flex gap-2">
          <img src="/assets/phone.svg" alt="phone number" />

          <p> 05 60 31 32 17</p>
        </span>
      </div>
      <div className=" flex gap-4 md:justify-end items-end justify-start">
        <div className="flex gap-4 md:justify-center items-center justify-start">
          <p className="font-semibold">suivez-nous</p>
          <aside className="flex gap-4 md:justify-center items-center justify-start">
            <Link href="https://web.facebook.com/patisserie.aroma.35?mibextid=zbwkwl&_rdc=1&_rdr" target="_blank" >
              <img src="/assets/facebook.svg" alt="facebook"  className="bg-aroma rounded-full w-[35px]  sm:w-[40px]   xs:w-[37px] md:w-[45px]" />
            </Link>
            <Link href="https://www.instagram.com/patisserie_aroma" target="_blank">
              <img src="/assets/insta.svg" alt="instagram"  className="bg-aroma rounded-full w-[35px]   sm:w-[40px] xs:w-[37px] md:w-[45px] " />
            </Link>
            <Link href="https://www.tiktok.com/@patisserie_aroma" target="_blank">
              <img src="/assets/tiktok.svg" alt="tiktok"  className="bg-aroma rounded-full w-[35px]  sm:w-[40px]  xs:w-[37px] md:w-[45px]" />
            </Link>
          </aside>
        </div>
      </div>
    </footer>
    </motion.div>    );
}
export default Footer;
