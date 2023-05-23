import Image from "next/image";
import Button from "@/components/Button/Button";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-4 max-w-screen-xl mx-auto">
      <div className="flex-1">
        <h4 className="text-teal-700 font-semibold mt-4 text-lg">
          Presidential Initiative for Artificial Intelligence and Computing
          (PIAIC)
        </h4>
        <h1 className="text-5xl sm:text-6xl font-bold">
          Certified Web 3.0 and Metaverse Developer
        </h1>
        <p className="mt-6 text-xl text-slate-600">
          A One and Quarter Years Panaverse DAO Earn as you Learn Program
          Getting Ready for the Next Generation of the Internet
        </p>
        <p className="mt-2 text-xl text-slate-600">
          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud,
          Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics
          Technologies
        </p>
        <div className="mt-5">
          <Link target="_blank" href="https://www.piaic.org/">
            <Button text={"Learn More"} />
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/images/hero-img.svg"
          alt="Heo Poster"
          width={550}
          height={100}
        />
      </div>
    </section>
  );
};
export default HeroSection;
