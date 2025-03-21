'use client'
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "@/assets/image/bivek.jpeg";
import { motion } from "framer-motion";

const FloatingIcon = ( src, alt, className ) => (
  <motion.div
    className={`absolute bg-white p-5 rounded-2xl shadow-md ${className}`}
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
  >
    <Image src={src} alt={alt} width={50} height={50} />
  </motion.div>
);

export default function Hero() {
  return (
    <section className="container mx-auto bg-[#121212] text-white min-h-screen flex items-center justify-center px-5 py-24">
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
    <div className="relative flex justify-center items-center h-screen bg-gray-100">
      {/* Hero Image */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
        <Image
          src={profile}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-full shadow-lg"
          
        />
        
        {/* Floating Icons */}
        <FloatingIcon src={profile} alt="Photoshop" className="top-10 left-0" />
        <FloatingIcon src={profile} alt="Illustrator" className="top-10 right-0" />
        <FloatingIcon src={profile} alt="Diamond" className="bottom-0 right-10" />
      </div>
      
      {/* Project Count */}
      <motion.div
        className="absolute bottom-5 left-0 bg-white px-5 py-3 rounded-full flex items-center shadow-md"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold">1500+</h3>
          <p className="text-gray-600">Complete Projects</p>
        </div>
      </motion.div>
    </div>
    {/* <div className="relative w-36 h-36 mx-auto mb-4">
          <Image
            src={profile} 
            width={144}
            height={144}
            alt="Bivek"
            className="rounded-lg border-2 border-[#1f2937]"
          />
          <div className="absolute inset-0 bg-[#1f2937] rounded-lg w-36 h-36 top-2 left-2"></div>
        </div> */}
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
