
const Entremet = () => {
  return (
    <div className="flex md:justify-around  md:gap-10 md:flex-row items-center md:mx-[100px] my-10  gap-4 flex-col-reverse">
   
    <aside className="flex flex-col items-start gap-7">
      <h1 className="font-bold  text-2xl md:text-4xl max-w-sm text-white mb-3">Special Orders</h1>
      <p className="max-w-xs md:leading-normal leading-6 ">Lorem ipsum dolor sit amet consectetur. Dictum et at posuere dolor lacus sed urna nisl. Fermentum et purus lectus nisi gravida morbi vitae condimentum ullamcorper. Justo diam duis in ullamcorper aliquam fringilla et sed semper. Sapien magna sodales nibh sapien viverra neque gravida risus.</p>
      <button className="bg-stone-300 text-aroma rounded-[50px] w-44 h-16 font-bold mt-6 ">Contactez-nous</button>
      </aside>
    <img src="/patisserie/entremet2.png" alt="entremet" height={400} width={420} className="mb-4 sm:px-4 px-6" />
  </div >
  );
}
export default Entremet;