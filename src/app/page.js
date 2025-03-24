import Hero from "@/components/Hero";
import Image from "next/image";
import line1 from "@/assets/image/line-1.png";
import line2 from "@/assets/image/line-2.png";
import TechStack from "@/components/TechStack";
import MyProjects from "@/components/MyProjects";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  return (
    <>
      <div className="relative bg-[#131313] md:h-[750px]  z-10 overflow-hidden">
        <div className="absolute left-0 top-0 -z-10"><svg width="1038" height="938" viewBox="0 0 1038 938" fill="none"><g opacity="0.5" filter="url(#filter0_f_39_4392)"><circle cx="290.5" cy="282.5" r="247.5" className="bg-[#ff4155]"></circle ></g><defs><filter id="filter0_f_39_4392" x="-457" y="-465" width="1495" height="1495" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4392"></feGaussianBlur></filter></defs></svg></div>
        <div className="absolute left-[60%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"><svg width="1295" height="938" viewBox="0 0 1295 938" fill="none"><g opacity="0.4" filter="url(#filter0_f_39_4393)"><circle cx="647.5" cy="561.5" r="247.5" className="bg-[#ffe600]"></circle></g><defs><filter id="filter0_f_39_4393" x="0" y="-86" width="1295" height="1295" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4393"></feGaussianBlur></filter></defs></svg></div>
        <div className="absolute right-0 top-0 -z-10"><svg width="752" height="747" viewBox="0 0 752 747" fill="none"><g opacity="0.45" filter="url(#filter0_f_39_4394)"><circle cx="647.5" cy="99.5" r="247.5" className="bg-[#48c5ea]"></circle></g><defs><filter id="filter0_f_39_4394" x="0" y="-548" width="1295" height="1295" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4394"></feGaussianBlur></filter></defs></svg></div>
        <div className="absolute right-0 top-0 w-full h-full"><Image src={line2} alt="line2" /></div>
        {/* <div className="absolute left-0 bottom-0 w-full h-full"><Image src={line1} alt="line1" /></div> */}
      <Hero />
      </div>
      <TechStack />
      <MyProjects />
      <GetInTouch />
    </>
  );
}
