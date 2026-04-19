import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
// import Footer from "../compotents/footer";

const products = [
  {
    title: "KLAS Realty",
    link: "/projects/klas-realty",
    thumbnail: "/images/realestart.png",
  },
  {
    title: "KLAS Capital",
    link: "/projects/klas-capital",
    thumbnail: "/images/capital1.png",
  },
  // {
  //   title: "KLAS Aviation",
  //   link: "/projects/klas-aviation",
  //   thumbnail: "/images/bg1.png",
  // },
  {
    title: "KLAS Infotech",
    link: "/projects/klas-infotech",
    thumbnail: "/images/klas-info.png",
  },
  {
    title: "KLAS Animation",
    link: "/projects/klas-animation",
    thumbnail: "/images/animation.jpeg",
  },
  
  // {
  //   title: "KLAS Aviation",
  //   link: "/projects/klas-aviation",
  //   thumbnail: "/images/bg1.png",
  // },
  
  {
    title: "KLAS Capital",
    link: "/projects/klas-capital",
    thumbnail: "/images/capital1.png",
  },
  {
    title: "KLAS Realty",
    link: "/projects/klas-realty",
    thumbnail: "/images/realestart.png",
  },
 
  {
    title: "KLAS Animation",
    link: "/projects/klas-animation",
    thumbnail: "/images/animation.jpeg",
  },
  {
    title: "KLAS Infotech",
    link: "/projects/klas-infotech",
    thumbnail: "/images/bgmain.png",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#12394C]">
      <HeroParallax products={products} />
      <section  className="bg-white pt-10 pb-6" 
    >
      
      <div className="  flex flex-col h-full py-10 rounded-xl max-w-6xl mx-auto mb-10 mt-10  px-16 relative" style={{backgroundImage: 'url(/images/callbg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="max-w-2xl ">
         <h1 className="text-white text-6xl font-bold leading-tight mb-8">
           Let&apos;s Build Future<br />
           <span className="text-7xl">Together.</span>
         </h1>
         
         <button className="bg-white text-[#12394C] px-8 py-4 rounded-lg flex items-center gap-3 hover:bg-[#12394C] hover:text-white transition-colors duration-300 cursor-pointer">
           <span className="text-lg font-medium">Get Started Now</span>
           <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
             <svg className="w-4 h-4 text-[#12394C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
             </svg>
           </div>
         </button>
       </div>
     </div>

     
   
    </section>
    </main>
  );
}


