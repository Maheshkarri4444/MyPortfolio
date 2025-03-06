import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading, TextReveal } from './ui/typography';
import { SlideIn, Transition } from './ui/transitions';
import grdnaturals from "../assets/pictures/Projects/grdnaturals.png"
import cardiolens from "../assets/pictures/Projects/cardiolens.gif"
import examify from "../assets/pictures/Projects/Examify2.png"
import chatify from "../assets/pictures/works/Chatify.png"
import tictactoe from "../assets/pictures/works/TicTacToe.png"
import brainwave from "../assets/pictures/works/Brainwave.png"
import virtualLR from "../assets/pictures/works/VirtualLR.png"
import netflixClone from "../assets/pictures/works/NetflixClone.png"
import mrs from "../assets/pictures/works/MRS.png"
import wca from "../assets/pictures/works/WCA.png"
import bhp from "../assets/pictures/works/BHP.png"
import dbp from "../assets/pictures/works/diabetespredictor.png"
import portfolio from "../assets/pictures/works/Porfolio.png"

type Project = {
  id: number;
  title: string;
  description: string;
  categories: string[];
  image: string;
  url: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "GRD-Naturals Bussiness Page",
    description: "A complete Business & e-commerce website built for GRD Naturals Company",
    categories: ["React", "Nodejs/Express", "TailwindCSS","Fullstack","MERN"],
    image: grdnaturals,
    url: "https://grdnaturals.com"
  },
  {
    id: 2,
    title: "Examify-Rgukt",
    description: "Built Examify, an online exam platform ",
    categories: ["React", "TailwindCSS" , "Golang","Fullstack","MERN"],
    image: examify,
    url: "https://github.com/Maheshkarri4444/Examify-Rgukt"
  },
  {
    id: 3,
    title: "Ai-Cardiolens",
    description: "Developed the complete website for AICardiolens an AI-powered project that secured AIR 3rd in an IEEE hackathon",
    categories: ["React","Nodejs/Express","TailwindCSS","Flask","MERN"],
    image: cardiolens,
    url: "https://github.com/Maheshkarri4444/Examify-Rgukt"
  },
  {
    id: 4,
    title: "Chatify",
    description: "Realtime ChatApp",
    categories: [ "React", "Nodejs/Express","TailwindCSS","Fullstack","MERN"],
    image: chatify,
    url: "https://chat-app-ylbu.onrender.com/"
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    description: "Multiplayer Realtime TicTacToe Game",
    categories: ["React","Nodejs/Express","TailwindCSS","Fullstack","MERN"],
    image: tictactoe,
    url: "https://tic-tac-toe-mern-azure.vercel.app"
  },
  {
    id: 6,
    title: "Netflix Clone",
    description: "Netflix clone model for Practicing React",
    categories: ["React"],
    image: netflixClone,
    url: "https://maheshkarri4444.github.io/Netflix-clone-Mahesh/"
  },
  {
    id: 7,
    title: "Brainwave Website",
    description: "A website made using React",
    categories: ["React", "TailwindCSS"],
    image: brainwave,
    url: "https://brainwave-react-practice-project-2.vercel.app"
  },
  {
    id: 8,
    title: "VirtualLR website",
    description: "A website made using React",
    categories: ["React", "TailwindCSS"],
    image: virtualLR,
    url: "https://react-practice-website-1-virtuallr.vercel.app"
  },
  {
    id: 9,
    title: "Banglore House Price Predicter",
    description: "A Machine Learning basic project for practice",
    categories: ["ML"],
    image: bhp,
    url: "https://github.com/Maheshkarri4444/Bangalore_House_Price_Predictor"
  },
  {
    id: 10,
    title: "Diabetes Predictor",
    description: "A Machine Learning basic project for practice",
    categories: ["ML"],
    image: dbp,
    url: "https://github.com/Maheshkarri4444/DIABETES-PREDICTOR"
  },
  {
    id: 11,
    title: "Whatsapp Chat Analysis",
    description: "A Machine Learning basic project for practice",
    categories: ["ML"],
    image: wca,
    url: "https://github.com/Maheshkarri4444/WhatsappChatAnalysis"
  },
  {
    id: 12,
    title: "Movie Recommendation System",
    description: "A Machine Learning basic project for practice",
    categories: ["ML"],
    image: mrs,
    url: "https://github.com/Maheshkarri4444/Movie-Recommendation-System"
  },
  {
    id: 13,
    title: "My Portfolio",
    description: "A dynamic and interactive portfolio website built to show case my skills and my projects",
    categories: ["React","Fullstack","MERN"],
    image: portfolio,
    url: "https://github.com/Maheshkarri4444/MyPortfolio"
  }
];

const allCategories = ["All", ...new Set(projects.flatMap(project => project.categories))].sort();

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projectVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const filterVariants = {
  active: {
    scale: 1.05,
    backgroundColor: "#dc2626",
    color: "#000000",
    borderColor: "rgba(0,0,0,0.4)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  inactive: {
    scale: 1,
    backgroundColor: "transparent",
    color: "#ffffff",
    borderColor: "rgba(255,255,255,0.4)"
  },
  hover: {
    scale: 1.02,
    backgroundColor: "rgba(255,255,255,0.1)"
  }
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" ? true : project.categories.includes(activeCategory)
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleProjects(4);
    setActiveProject(null);
  };

  const handleProjectClick = (projectId: number) => {
    if (isMobile) {
      setActiveProject(activeProject === projectId ? null : projectId);
    }
  };

  const handleProjectHover = (projectId: number | null) => {
    if (!isMobile) {
      setActiveProject(projectId);
    }
  };

  return (
    <div className="px-4 py-12 text-white bg-black/30">
      <SectionHeading className="md:pl-16">
        <SlideIn className="text-white/40">All my</SlideIn>
        <br />
        <SlideIn><span className='text-red-600'>W</span>orks</SlideIn>
      </SectionHeading>

      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {allCategories.map((category) => (
          <motion.button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className="px-6 py-2 border-2 rounded-full"
            variants={filterVariants}
            animate={activeCategory === category ? "active" : "inactive"}
            whileHover={activeCategory === category ? "" : "hover"}
            whileTap={{ scale: 0.95 }}
          >
            <TextReveal>{category}</TextReveal>
          </motion.button>
        ))}
      </motion.div>

      <Transition>
        <AnimatePresence mode="wait">
          <div className='flex justify-center'>
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {filteredProjects.slice(0, visibleProjects).map((project) => (
                <motion.div
                  key={project.id}
                  className="relative flex items-center justify-center w-full overflow-hidden group rounded-xl"
                  variants={projectVariants}
                  layout
                  onClick={() => handleProjectClick(project.id)}
                  onMouseEnter={() => handleProjectHover(project.id)}
                  onMouseLeave={() => handleProjectHover(null)}
                >
                  <motion.div
                    className="absolute inset-0 z-10 flex flex-col items-center justify-between p-6 bg-black bg-opacity-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="space-y-4">
                      <p className="text-lg">
                        <span className="">{project.description[0]}</span>
                        {project.description.slice(1)}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.categories.map((cat) => (
                          <span key={cat} className="px-3 py-1 text-sm rounded-full bg-red-500/30">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.a
                      href={project.url}
                      target='_blank'
                      className="flex items-center self-end gap-2 text-red-500"
                      whileHover={{ color: "#ffffff", x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Visit <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </motion.div>

                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-[250px] w-full object-cover"
                    whileHover={{ scale: isMobile ? 1 : 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatePresence>
      </Transition>

      {filteredProjects.length > visibleProjects && (
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() => setVisibleProjects(prev => prev + 3)}
            className="px-8 py-2 text-red-500 border-0 rounded-full"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <TextReveal>Show more</TextReveal>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}