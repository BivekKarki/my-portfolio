import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "@/assets/image/bivek.jpeg";


export default function Hero() {
  return (
    <>
    


<section className="container mx-auto bg-[#121212] text-white flex items-center justify-center px-5 md:h-full">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 py-20">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center gap-2">
            Hi, I'm Bivek 👋
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            I'm a full-stack developer (React.js & Node.js) with a focus on
            creating exceptional digital experiences that are fast, accessible,
            and visually appealing. Even though I have been creating web
            applications for over 7 years, I still love it as if it was
            something new.
          </p>

          <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-gray-200">
            <FaMapMarkerAlt className="text-green-400" />
            <span>Mid Baneshwor, Kathmandu</span>
          </div>
          <p className="text-gray-200 mt-1 flex justify-center md:justify-start">
            <span className="mr-2">•</span> Available for new projects
          </p>

          <div className="mt-6 flex justify-center md:justify-start gap-5 text-2xl">
            <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative mx-auto w-[250px] sm:w-[300px] h-[320px] sm:h-[350px]">
            <div className="absolute -right-6 -bottom-6 w-full h-full bg-gray-700 border-4 border-gray-900"></div>
            <div className="relative w-full h-full border-4 border-gray-900">
              <Image
                src={profile} 
                alt="Bivek's Profile"
                className="w-full h-full object-cover rounded-lg"
                width={300}
                height={350}
              />
            </div>
          </div>
        </div>
      
      </div>
    </section>

    </>
  );
}
