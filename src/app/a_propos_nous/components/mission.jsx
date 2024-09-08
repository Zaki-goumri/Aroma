import React from 'react';
import Image from 'next/image';
const Mission = () => {

    return (
       <main>
       <div className='flex justify-center gap-x-52 mt-24 md:flex-row  items-center flex-col-reverse sm:gap-x-20 px-6'>
           <aside className="flex flex-col md:items-start gap-7 items-center  ">
            <h1 className='text-aroma text-4xl font-bold md:mt-0 mt-3'>Notre mission</h1>
            <p className='md:max-w-[40vw] max-w-96 '>Notre mission est de vous aider à trouver le meilleur produit pour votre besoin.Lorem ipsum dolor sit amet consectetur. Sagittis quis lorem neque fermentum sit. Nullam habitant orci varius turpis dui nec nisi suspendisse. Sit at odio lacus sit hendrerit cras enim rhoncus. Ultricies cras nibh commodo senectus id semper. Neque nisi ultrices enim hac cras. Venenatis placerat etiam in quisque suscipit orci ut. Facilisis amet sed nibh in a. Nunc amet quis amet magna eget non tortor feugiat faucibus.</p>
        </aside>
            <Image src="/patisserie/piecemontee.png" alt="mission" width={400} height={400} />
        </div>
        <div className='flex justify-center gap-x-52 mt-24  md:flex-row  items-center flex-col sm:gap-x-20 px-6'>
            <Image src="/patisserie/piecemontee.png" alt="mission" width={400} height={400} />
            <aside className="flex flex-col md:items-start gap-7 items-center">
            <h1 className='text-aroma text-4xl font-bold md:mt-0 mt-3'>notre promesse</h1>
            <p className='md:max-w-[40vw] max-w-96'>Notre mission est de vous aider à trouver le meilleur produit pour votre besoin.Lorem ipsum dolor sit amet consectetur. Sagittis quis lorem neque fermentum sit. Nullam habitant orci varius turpis dui nec nisi suspendisse. Sit at odio lacus sit hendrerit cras enim rhoncus. Ultricies cras nibh commodo senectus id semper. Neque nisi ultrices enim hac cras. Venenatis placerat etiam in quisque suscipit orci ut. Facilisis amet sed nibh in a. Nunc amet quis amet magna eget non tortor feugiat faucibus.</p>
        </aside>
        </div>
        </main>
    );
}
export default Mission;