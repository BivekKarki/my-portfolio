import Image from 'next/image';
import React from 'react'

const MyProjects = () => {

  const projects = [
    {
      id: 1,
      title: "Fiskil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      image: "/icons/Picture.png", 
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
      link: "#", // Project link
    },
    {
      id: 2,
      title: "Fiskil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
      image: "/icons/icon-typescript.svg",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
      link: "#",
    },
    {
      id: 3,
      title: "Fiskil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
      image: "/icons/icon-react.svg",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
      link: "#",
    },
  ];

  return (
    <>
        {/* <section className='bg-[#030712] py-16'>
        <div className='container mx-auto'>
            <div className='text-center mb-20'>
                <h1 className='text-5xl font-bold text-white mb-6'>Recent Work</h1>
                <p className='text-3xl text-[#A7A7A7]'> Things I built so far</p>
            </div>
            <div className='flex flex-wrap justify-center gap-8 md:gap-20 md:w-2/3 mx-auto'>
               
            </div>
        </div>
       
      </section>  */}

      <section className="bg-[#030712] py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className='text-center mb-20'>
            <h1 className='text-5xl font-bold text-white mb-6'>Recent Work</h1>
            <p className='text-3xl text-[#A7A7A7]'> Things I built so far</p>
        </div>
        <div className="grid grid-cols-1 gap-8 text-white">
          {projects.map((project) => (
            <div key={project.id} className={`bg-[#1E293B] rounded-xl flex flex-col md:flex-row gap-6 ${
              project.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}>

              <div className={`bg-[#374151]  p-12 w-full md:w-1/2 ${
              project.id % 2 === 0 ? "rounded-r-xl" : "rounded-l-xl"
            }`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="rounded-2xl w-full object-cover"
                />
              </div>
              
              <div className="flex-1 p-12">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-lg mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-xs px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={project.link}
                    className="text-blue-400 text-lg  flex items-center gap-2 hover:underline"
                  >
                    Visit Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default MyProjects
