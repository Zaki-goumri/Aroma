import Link from 'next/link';

const Entremet = () => {
  return (
    <div className="flex md:justify-around  md:gap-10 lg:flex-row items-center md:mx-[100px] my-10  gap-4 flex-col-reverse">
   
    <aside className="flex flex-col items-start gap-7  pl-2 xxs:pl-4 xs:pl-6">
      <h1 className="font-bold  text-2xl lg:text-4xl max-w-sm text-white mb-3">Special Orders</h1>
      <p className=" lg:leading-normal leading-6  max-w-screen-xs">Lorem ipsum dolor sit amet consectetur. Dictum et at posuere dolor lacus sed urna nisl. Fermentum et purus lectus nisi gravida morbi vitae condimentum ullamcorper. Justo diam duis in ullamcorper aliquam fringilla et sed semper. Sapien magna sodales nibh sapien viverra neque gravida risus.</p>
      <Link  href="tel:0560313217" className="bg-white  text-aroma rounded-[50px] w-44 h-16 font-bold mt-6 text-center pt-5">Contactez-nous</Link>
      </aside>
    <img src="/patisserie/entremet2.png" alt="entremet" height={400} width={420} className="mb-4 sm:px-4 px-6" />
  </div >
  );
}
export default Entremet;