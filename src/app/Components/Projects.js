import React from "react";
import Image from "next/image";

//import project1Image from "/assets/images/thumbnail-project-1-small.webp";

const projectsData = [
  {
    id: 1,
    name: "DESIGN PORTFOLIO",
    technologies: `HTML   CSS`,
    image: "/assets/images/thumbnail-project-1-small.webp" ,
  },
  {
    id: 2,
    name: "E-LEARNING LANDING PAGE",
    technologies: "HTML   CSS",
    image: "/assets/images/thumbnail-project-2-small.webp",
  },
  {
    id: 3,
    name: "TODO WEB APP",
    technologies: "HTML   CSS   JavaScript",
    image: "/assets/images/thumbnail-project-3-small.webp",
  },
  {
    id: 4,
    name: "ENTERTAINMENT WEB APP",
    technologies: "HTML   CSS   JavaScript",
    image: "/assets/images/thumbnail-project-4-small.webp",
  },
  {
    id: 5,
    name: "MEMORY GAME",
    technologies: "HTML   CSS   JavaScript",
    image: "/assets/images/thumbnail-project-5-small.webp",
  },
  {
    id: 6,
    name: "ART GALLERY SHOWCASE",
    technologies: "HTML   CSS   JavaScript",
    image: "/assets/images/thumbnail-project-6-small.webp",
  },
];

{/* md:grid grid-flow-row-dense grid-cols-2 grid-rows-3 */}
export default function Projects() {
  return (
    <div id="projects" className="flex justify-center md:justify-between  md:justity-end flex-wrap">
       {projectsData.map((project) => (
         <div id="projects-images" className="" key={project.id}>
          <Image
            src={project.image}
            alt={project.technologies}
            width={465}
            height={400}
            key={project.id}
            className="mt-8 mb-3">
              
            </Image>

          <p className="text-xl font-bold tracking-wide uppercase">{project.name}</p>
            <p className="whitespace-pre text-sm uppercase">{project.technologies}</p>
       </div>
       ))}
      
    </div>
  );
}
