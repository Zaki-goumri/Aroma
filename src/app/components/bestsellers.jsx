
import Link from "next/link";

const BestSellers = ()  => {
  
   const  bestSellers = [
        {path: '/patisserie/croissants.png', title: 'croissants'},
        {
            path: '/patisserie/coeur.png', title: 'coeurs'  
        },
        {path: '/patisserie/cupCakes.png', title: 'cup cakes'},
        {path: '/patisserie/mousse.png', title: 'mousse fraise'}
    ]
  
    return (
       <main className=" flex flex-col items-center gap-5 ">
         <h1 className="md:text-4xl text-black font-bold text-2xl mt-2  ">Check Out Our <span className="text-white"> Best Sellers </span></h1>
    <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-20  sm:gap-10  xxs:gap-8 gap-1">
    {
       
       bestSellers.map((bestSeller, index) => {
            return (
                <li key={index} className="flex flex-col items-center gap-4">
                    <img src={bestSeller.path} alt={bestSeller.title} className="w-40 h-40 rounded-full" />
                    <h2 className="text-white font-bold text-2xl">{bestSeller.title}</h2>
                </li>
            )
})}
    </ul>
        <Link className="bg-white text-aroma rounded-[50px] w-44 h-16 font-bold mt-6 pt-5 text-center"href="/produits"> Voir plus</Link>
        </main>
    );
    }
export default BestSellers;