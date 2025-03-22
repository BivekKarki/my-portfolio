import React from 'react'

const TechStack = () => {

    const tech = [
        { src: "/icons/icon-javscript.svg", name: "Javascript" },
        { src: "/icons/icon-typescript.svg", name: "Typescript" },
        { src: "/icons/icon-react.svg", name: "React" },
        { src: "/icons/icon-tailwindcss.svg", name: "Tailwindcss" },
        { src: "/icons/icon-nextjs.svg", name: "Next.js" },
        { src: "/icons/icon-nodejs.svg", name: "Node.js" },
        { src: "/icons/icon-postgresql.svg", name: "PostgreSQL" },
        { src: "/icons/icon-mongodb.svg", name: "MongoDB" },
        { src: "/icons/icon-git.svg", name: "Git" },
    ];

  return (
    <>
      <section className='bg-[#191919] py-16'>
        <div className='container mx-auto'>
            <div className='text-center mb-20'>
                <h1 className='text-5xl font-bold text-white mb-8'>Tech Stack</h1>
                <p className='text-3xl text-[#A7A7A7]'> Technologies I've been working with recently</p>
            </div>
            <div className='flex flex-wrap justify-center gap-8 md:gap-20 md:w-2/3 mx-auto'>
                {tech.map((item, index)=>(
                    <div key={index} className="flex flex-col items-center space-y-2">
                        <img src={item.src} alt={item.name} className="w-12 h-12 object-contain" />
                        <span className="text-white text-sm">{item.name}</span>
                </div>
                ))}
            </div>
        </div>
       
      </section>
    </>
  )
}

export default TechStack
