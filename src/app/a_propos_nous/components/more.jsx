import React from 'react';
import Link from 'next/link';

const More = () => {
    return (
        <div className="bg-merengue md:w-screen w-screen h-80 bg-cover bg-center flex justify-center items-center flex-col mt-20 gap-10">
        <h1 className="md:text-3xl text-2xl text-aroma font-semibold">Vous voulez en savoir plus sur nous ?</h1>
        <Link href="" className='bg-aroma text-white font-semibold py-4 px-3 rounded-full' >Vous êtes la bienvenue chez nous</Link>
        </div>
    )
}
export default More;