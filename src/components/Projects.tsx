import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading, TextReveal } from './ui/typography';
import { SlideIn, Transition } from './ui/transitions';

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
    title: "E-Commerce Dashboard",
    description: "Real-time analytics and sales tracking platform",
    categories: ["Nextjs", "React", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 2,
    title: "Classic Cars Showcase",
    description: "Vintage automobile collection gallery",
    categories: ["React", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 3,
    title: "Fashion Store",
    description: "Modern e-commerce fashion platform",
    categories: ["TailwindCSS", "Nextjs"],
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 4,
    title: "VR Experience",
    description: "Immersive virtual reality showcase",
    categories: ["Mern", "React", "Nodejs"],
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 5,
    title: "Tech Blog",
    description: "Modern technology news platform",
    categories: ["CSS", "React"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 6,
    title: "AI Dashboard",
    description: "Machine learning analytics interface",
    categories: ["React", "Nodejs", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 7,
    title: "E-Commerce Dashboard",
    description: "Real-time analytics and sales tracking platform",
    categories: ["Nextjs", "React", "Nodejs"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 8,
    title: "Classic Cars Showcase",
    description: "Vintage automobile collection gallery",
    categories: ["React", "CSS"],
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 9,
    title: "Fashion Store",
    description: "Modern e-commerce fashion platform",
    categories: ["TailwindCSS", "React"],
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 10,
    title: "VR Experience",
    description: "Immersive virtual reality showcase",
    categories: ["Mern", "Nodejs"],
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 11,
    title: "Tech Blog",
    description: "Modern technology news platform",
    categories: ["CSS", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  },
  {
    id: 12,
    title: "AI Dashboard",
    description: "Machine learning analytics interface",
    categories: ["React", "Nextjs"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2000",
    url: "#"
  }
];

// Get unique categories from all projects
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

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" ? true : project.categories.includes(activeCategory)
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleProjects(4); // Reset visible projects when changing category
  };

  return (
    <div className="px-4 py-12 text-white bg-black/30">
      <SectionHeading className="md:pl-16">
        <SlideIn className="text-white/40">All my</SlideIn>
        <br />
        <SlideIn><span className='text-red-600'>W</span>orks</SlideIn>
      </SectionHeading>

      {/* Filter Options */}
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
                className="relative overflow-hidden group rounded-xl"
                variants={projectVariants}
                layout
              >
                {/* Hover Description */}
                <motion.div
                  className="absolute inset-0 z-10 flex flex-col justify-between p-6 bg-black bg-opacity-80"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
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
                    className="flex items-center self-end gap-2 text-red-500"
                    whileHover={{ color: "#ffffff", x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Visit <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>

                {/* Project Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Project Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Transition>

      {/* Show More Button */}
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