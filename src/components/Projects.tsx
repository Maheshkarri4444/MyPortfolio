// import { AnimatePresence, motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { useState } from "react";
// import { SlideIn, Transition } from "./ui/transitions";
// import { SectionHeading, TextReveal } from "./ui/typography";
// import { useMediaQuery } from "../utils/useMediaQuery";
// import { Button } from "./ui/button";
// import { useCursorVariants } from "../utils/context";
// import { Dialog } from "./ui/dialog";
// import Filters from "./Filters";

// const Projects = () => {
//   // Static projects data
//   const projects = [
//     {
//       _id: "1",
//       title: "Project One",
//       image: { url: "https://via.placeholder.com/500" },
//       enabled: true,
//       sequence: 1,
//     },
//     {
//       _id: "2",
//       title: "Project Two",
//       image: { url: "https://via.placeholder.com/500" },
//       enabled: true,
//       sequence: 2,
//     },
//     {
//       _id: "3",
//       title: "Project Three",
//       image: { url: "https://via.placeholder.com/500" },
//       enabled: true,
//       sequence: 3,
//     },
//     {
//       _id: "4",
//       title: "Project Four",
//       image: { url: "https://via.placeholder.com/500" },
//       enabled: true,
//       sequence: 4,
//     },
//   ];

//   return (
//     <section className="relative p-4 md:p-8" id="projects">
//       <SectionHeading className="md:pl-16">
//         <SlideIn className="text-white/40">Selected</SlideIn>
//         <br />
//         <SlideIn>works</SlideIn>
//       </SectionHeading>
//       <Filters/>
//       <ProjectContainer projects={projects} />
//     </section>
//   );
// };

// export default Projects;

// const ProjectContainer = ({ projects }: { projects: any[] }) => {
//   const [showMore, setShowMore] = useState(false);
//   const [showDialog, setShowDialog] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const isMobile = useMediaQuery("(max-width: 768px)");

//   const numProjectToShow = isMobile ? 6 : 8;

//   return (
//     <AnimatePresence>
//       <motion.div
//         layout
//         className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6"
//       >
//         {projects
//           .slice(0, showMore ? projects.length : numProjectToShow)
//           .map((project, index) =>
//             project.enabled ? (
//               <Transition
//                 transition={{ delay: 0.2 + index * 0.1 }}
//                 viewport={{ once: true }}
//                 key={project._id}
//                 onClick={() => {
//                   setShowDialog(true);
//                   setSelectedProject(project);
//                 }}
//               >
//                 <Card title={project.title} image={project.image} />
//               </Transition>
//             ) : null
//           )}
//       </motion.div>
//       <div className="grid py-8 place-items-center">
//         {projects.length > numProjectToShow && (
//           <Button onClick={() => setShowMore(!showMore)}>
//             <TextReveal>{showMore ? "Show less" : "Show more"}</TextReveal>
//           </Button>
//         )}
//       </div>
//       {showDialog && (
//         <Dialog
//           showDialog={showDialog}
//           setShowDialog={setShowDialog}
//           project={selectedProject}
//         />
//       )}
//     </AnimatePresence>
//   );
// };

// const Card = ({ title, image }: { title: string; image: { url: string } }) => {
//   const [hover, setHover] = useState(false);
//   const { setVariant } = useCursorVariants();

//   const mouseEnter = () => {
//     setHover(true);
//     setVariant("PROJECT");
//   };
//   const mouseLeave = () => {
//     setHover(false);
//     setVariant("DEFAULT");
//   };

//   return (
//     <motion.div
//       layout
//       className="relative overflow-hidden rounded-xl md:rounded-3xl aspect-square bg-secondary/30 md:px-4"
//       onMouseEnter={mouseEnter}
//       onMouseLeave={mouseLeave}
//     >
//       <div className="absolute flex justify-end w-full h-full top-2 right-2 md:hidden">
//         <div className="grid text-black bg-white rounded-full size-8 place-items-center">
//           <ArrowUpRight size={20} />
//         </div>
//       </div>
//       <div className="relative md:py-8">
//         <motion.div
//           animate={{ y: hover ? -10 : 0 }}
//           className="flex items-center justify-between max-md:hidden"
//         >
//           <p className="text-sm font-semibold md:text-xl max-md:opacity-0">
//             {title}
//           </p>
//           <button className="flex items-center justify-center gap-2 max-md:px-4">
//             <TextReveal className="max-md:text-sm">Visit</TextReveal>
//             <span className="p-1 bg-black rounded-full text-white/80">
//               <ArrowUpRight className="size-4 md:size-6" />
//             </span>
//           </button>
//         </motion.div>
//       </div>
//       <img
//         src={image.url}
//         width={500}
//         height={500}
//         alt={title}
//         className="object-cover object-center w-full h-full rounded-xl md:rounded-t-3xl"
//       />
//     </motion.div>
//   );
// };



import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './ui/typography';
import { SlideIn ,Transition } from './ui/transitions';

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Real-time analytics and sales tracking platform",
    category: "Nextjs",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 2,
    title: "Classic Cars Showcase",
    description: "Vintage automobile collection gallery",
    category: "React",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 3,
    title: "Fashion Store",
    description: "Modern e-commerce fashion platform",
    category: "TailwindCSS",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 4,
    title: "VR Experience",
    description: "Immersive virtual reality showcase",
    category: "Mern",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 5,
    title: "Tech Blog",
    description: "Modern technology news platform",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 6,
    title: "AI Dashboard",
    description: "Machine learning analytics interface",
    category: "React",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 7,
    title: "E-Commerce Dashboard",
    description: "Real-time analytics and sales tracking platform",
    category: "Nextjs",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 8,
    title: "Classic Cars Showcase",
    description: "Vintage automobile collection gallery",
    category: "React",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 9,
    title: "Fashion Store",
    description: "Modern e-commerce fashion platform",
    category: "TailwindCSS",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 10,
    title: "VR Experience",
    description: "Immersive virtual reality showcase",
    category: "Mern",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 11,
    title: "Tech Blog",
    description: "Modern technology news platform",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 12,
    title: "AI Dashboard",
    description: "Machine learning analytics interface",
    category: "React",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  }
  
];

const categories = ["All", "Reactjs", "Nextjs", "Mern", "CSS", "TailwindCSS"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(4);

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <div className="min-h-screen px-4 py-12 text-white bg-black/30">
      
       <SectionHeading className="md:pl-16">
         <SlideIn className="text-white/40">All my</SlideIn>
         <br />
         <SlideIn><span className='text-red-600'>P</span>rojects</SlideIn>
       </SectionHeading>
      {/* Filter Options */}

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 border-2 border-white/40 rounded-full duration-200 transition-all ${
              activeCategory === category
                ? "bg-red-600 text-black border-black/40"
                : " hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <Transition>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden group rounded-xl"
          >
            {/* Hover Description */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 transition-opacity duration-300 bg-black opacity-0 bg-opacity-70 group-hover:opacity-100">
              <p className="text-lg">
                <span className="">{project.description[0]}</span>
                {project.description.slice(1)}
              </p>
              <a
                href={project.url}
                className="flex items-center self-end gap-2 text-red-500 transition-colors hover:text-white"
              >
                Visit <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Project Title */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {filteredProjects.length > visibleProjects && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleProjects(prev => prev + 3)}
            className="px-8 py-2 text-red-500 transition-colors border-0 rounded-full border-white/40 hover:bg-white/10"
          >
            Show more
          </button>
        </div>
      )}
      </Transition>
    </div>
  );
}