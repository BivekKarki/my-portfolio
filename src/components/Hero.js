import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-[#121212] text-white min-h-screen flex flex-col items-center justify-center px-5">
      {/* Profile Section */}
      <div className="max-w-3xl text-center">
        <div className="relative w-36 h-36 mx-auto mb-4">
          <div className="absolute inset-0 bg-[#1f2937] rounded-lg w-36 h-36 top-2 left-2"></div>
          <Image
            src="/profile.jpg" // Replace with your profile image path
            width={144}
            height={144}
            alt="Bivek"
            className="rounded-lg border-2 border-[#1f2937]"
          />
        </div>

        <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
          Hi, I'm Bivek 👋
        </h1>
        <p className="text-gray-400 mt-3">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating exceptional digital experiences that are fast, accessible,
          and visually appealing. Even though I have been creating web
          applications for over 7 years, I still love it as if it was something
          new.
        </p>

        {/* Location and Availability */}
        <div className="mt-4 flex items-center justify-center gap-2 text-gray-400">
          <FaMapMarkerAlt className="text-green-400" />
          <span>Mid Baneshwor, Kathmandu</span>
        </div>
        <p className="text-green-400 mt-1">• Available for new projects</p>

        {/* Social Icons */}
        <div className="mt-4 flex justify-center gap-5 text-2xl">
          <FaTwitter className="hover:text-blue-500 cursor-pointer" />
          <FaGithub className="hover:text-gray-400 cursor-pointer" />
          <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-12">
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
      </div>
    </section>
  );
}
