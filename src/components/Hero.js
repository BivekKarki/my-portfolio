import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "@/assets/image/bivek.jpeg";


export default function Hero() {
  return (
    <section className="container mx-auto bg-[#121212] text-white flex items-center justify-center px-5 h-full">
      {/* Profile Section */}
      <div className="flex justify-between">
        <div className="md:w-1/2 w-full">
        <h1 className="text-7xl font-bold flex items-center justify-start gap-2">
          Hi, I'm Bivek 👋
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating exceptional digital experiences that are fast, accessible,
          and visually appealing. Even though I have been creating web
          applications for over 7 years, I still love it as if it was something
          new.
        </p>

        <div className="mt-8 flex items-center gap-2 text-gray-200">
          <FaMapMarkerAlt className="text-green-400" />
          <span>Mid Baneshwor, Kathmandu</span>
        </div>
        <p className="text-gray-200 mt-1 flex"><span className="flex justify-center w-fit">•</span> &nbsp; Available for new projects</p> 

        <div className="mt-8 flex justify-start gap-5 text-2xl">
          <FaTwitter className="hover:text-blue-500 cursor-pointer" />
          <FaGithub className="hover:text-gray-400 cursor-pointer" />
          <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
        </div>

        </div>
    
    <div className="md:w-1/2 w-full">
      <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -right-6 -bottom-6 w-[300px] h-[350px] bg-gray-700 border-4 border-gray-900"></div>

              <div className="relative w-[300px] h-[350px] border-4 border-gray-900">
                <Image
                  src={profile} 
                  alt="Mountain"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
    </div>
        

       

        {/* Location and Availability */}
        {/* <div className="mt-4 flex items-center justify-center gap-2 text-gray-400">
          <FaMapMarkerAlt className="text-green-400" />
          <span>Mid Baneshwor, Kathmandu</span>
        </div>
        <p className="text-green-400 mt-1">• Available for new projects</p> */}

        {/* Social Icons */}
        {/* <div className="mt-4 flex justify-center gap-5 text-2xl">
          <FaTwitter className="hover:text-blue-500 cursor-pointer" />
          <FaGithub className="hover:text-gray-400 cursor-pointer" />
          <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
        </div>
      </div> */}

      {/* Tech Stack Section */}
      {/* <div className="mt-12">
        <h2 className="text-3xl font-bold">My Tech Stack</h2>
        <p className="text-gray-400 mt-2">
          Technologies I’ve been working with recently
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 mt-6 text-center">
          {[
            { src: "/icons/js.png", name: "Javascript" },
            { src: "/icons/ts.png", name: "Typescript" },
            { src: "/icons/react.png", name: "React" },
            { src: "/icons/tailwind.png", name: "Tailwindcss" },
            { src: "/icons/nextjs.png", name: "Next.js" },
            { src: "/icons/nodejs.png", name: "Node.js" },
            { src: "/icons/postgresql.png", name: "PostgreSQL" },
            { src: "/icons/mongodb.png", name: "MongoDB" },
            { src: "/icons/git.png", name: "Git" },
          ].map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={tech.src} width={40} height={40} alt={tech.name} />
              <p className="text-gray-300 mt-1">{tech.name}</p>
            </div>
          ))}
        </div>
      </div> */}
      </div>
      
    </section>
  );
}
