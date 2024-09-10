import React from 'react';
import Link from 'next/link';




const More = () => {
    return (
        <div className="bg-merengue md:w-screen w-screen h-80 bg-cover bg-center flex justify-center items-center flex-col mt-20 gap-10">
        <h1 className="xs:text-2xl text-xl sm:text-3xl md:text-4xl text-center text-aroma font-semibold">Vous voulez en savoir plus sur nous ?</h1>
        <Link href="https://www.google.com/maps/place/Aroma+patisserie/@36.7571962,3.4518575,17z/data=!3m1!4b1!4m6!3m5!1s0x128e685eebfa7bb5:0x161a72eb077673b4!8m2!3d36.7571963!4d3.4564656!16s%2Fg%2F11b6r024x6?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className='bg-aroma text-white font-semibold py-4 px-3 rounded-full' >Notre Localisation</Link>
        </div>
    )
}
export default More;