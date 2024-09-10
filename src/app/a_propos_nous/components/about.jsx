import Image from "next/image";

const About = () => {
    return (
        <div className="flex flex-col items-center mt-12">
        <Image src="/patisserie/caisse.png" alt="entremet" height={620} width={1000} className="rounded-[35px]   md:px-3 px-4 md:rounded-[35px]   " />
            <h1 className="text-4xl font-bold text-aroma py-6">Qui sommes-nous </h1>
            <p className="md:max-w-[60vw] text-center max-w-96 font-medium">Depuis 2009, la Pâtisserie Aroma vous propose un large choix de gâteaux sucrés et salés, ainsi que de délicieuses viennoiseries, toutes préparées avec des ingrédients frais et de qualité. Laissez-vous tenter par nos créations gourmandes !.</p>
        </div>
    );
}

export default About;