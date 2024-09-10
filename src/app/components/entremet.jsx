import Link from 'next/link';

const Entremet = () => {
  return (
    <div className="flex md:justify-around  md:gap-10 lg:flex-row items-center md:mx-[100px] my-10  gap-4 flex-col-reverse">
   
    <aside className="flex flex-col items-start gap-4  pl-2 xxs:pl-4 xs:pl-6">
      <h1 className="font-bold  text-2xl lg:text-4xl max-w-sm text-white mb-3">Les commandes speciales  </h1>
    <div>
      <p className=" lg:leading-normal leading-6  max-w-screen-xs font-medium">Chez Aroma, nous aimons vous faire plaisir !<br/>

Vous avez une envie particulière ? Un gâteau d'anniversaire original ?<br/> Un dessert pour une occasion spéciale ? Une envie de saveurs uniques ?

N'hésitez pas à nous contacter pour vos commandes spéciales !

Nous pouvons réaliser :<br/>
</p>

<ul className='list-disc pl-5 lg:leading-normal leading-6  font-medium'>
<li>Des gâteaux sur mesure : forme, saveurs, décoration, tout est possible !</li>
<li>Des desserts personnalisés pour vos événements : anniversaires, mariages, baptêmes...</li>
<li>Des créations originales à partir de vos idées.</li>
</ul>
</div>
      <Link  href="tel:0560313217" className="bg-white  text-aroma rounded-[50px] w-44 h-16 font-bold mt-6 text-center pt-5">Contactez-nous</Link>
      </aside>
    <img src="/patisserie/entremet2.png" alt="entremet" height={400} width={420} className="mb-4 sm:px-4 px-6" />
  </div >
  );
}
export default Entremet;