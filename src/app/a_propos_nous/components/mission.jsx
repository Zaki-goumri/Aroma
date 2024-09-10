import React from 'react';
import Image from 'next/image';
const Mission = () => {

    return (
       <main>
       <div className='flex justify-center gap-x-52 mt-24 md:flex-row  items-center flex-col-reverse sm:gap-x-20 px-6'>
           <aside className="flex flex-col md:items-start gap-7 items-center  ">
            <h1 className='text-aroma text-4xl font-bold md:mt-0 mt-3'>Notre mission</h1>
            <p className='md:max-w-[40vw] max-w-96 font-medium'>Chez Aroma, nous croyons que chaque occasion mérite d'être célébrée avec un dessert délicieux et unique. Nous mettons tout notre savoir-faire et notre créativité à votre service pour vous offrir des moments gourmands inoubliables.

Notre mission est de vous faire découvrir le plaisir d'une pâtisserie authentique et de partager avec vous notre amour pour les saveurs et les produits frais.

</p>
        </aside>
            <Image src="/patisserie/piecemontee.png" alt="mission" width={400} height={400} />
        </div>
        <div className='flex justify-center gap-x-52 mt-24  md:flex-row  items-center flex-col sm:gap-x-20 px-6'>
            <Image src="/patisserie/piecemontee.png" alt="mission" width={400} height={400} />
            <aside className="flex flex-col md:items-start gap-7 items-center">
            <h1 className='text-aroma text-4xl font-bold md:mt-0 mt-3'>notre promesse</h1>
            <p className='md:max-w-[40vw] max-w-96 font-medium'>Chez Aroma, nous vous promettons une expérience gourmande unique, où chaque bouchée est une invitation au plaisir. Nous nous engageons à utiliser des ingrédients frais et de qualité, sélectionnés avec soin, pour élaborer des pâtisseries authentiques et savoureuses. Notre passion pour la pâtisserie se retrouve dans chaque création, réalisée avec soin et expertise. Venez découvrir un univers de saveurs et d’émotions, où chaque moment partagé autour d’un dessert Aroma est une occasion de célébrer la vie et ses petits bonheurs.</p>
        </aside>
        </div>
        </main>
    );
}
export default Mission;