import Image from "next/image";
import Hero from "./Conponents/Hero";
import Newest from "./Conponents/Newest";

export default function Home() {
  return (
    <>
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
    <Hero/>
    <Newest/>
    </div>
    
    </>
  );
}
