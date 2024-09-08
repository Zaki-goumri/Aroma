import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full md:px-20 mt-20 mb-10 flex md:justify-between flex-col md:flex-row gap-4 px-4 h-52">
        <div className="leading-5 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Visitez-nous</h1>
        <span className="flex gap-2">
            <img src="/assets/location.svg" alt="lacation" />
            <p> 123 rue de la paix, Paris</p>
        </span>
        <span className="flex gap-2">
            <img src="/assets/phone.svg" alt="phone number" />
                
            <p> 01 23 45 67 89</p>
            </span>
        </div>
        <div className=" flex gap-4 md:justify-center items-end justify-start">
            <p>suivez-nous</p>
           <Link href="https://www.facebook.com/">
            <img src="/assets/facebook.svg" alt="facebook" />
           </Link>
            <Link href="https://www.instagram.com/">
            <img src="/assets/insta.svg" alt="instagram" />
           </Link>
           <Link href="https://www.tiktok.com/">
            <img src="/assets/tiktok.svg" alt="tiktok" />
              </Link>
        </div>
        </footer>
    );
}
export default Footer;