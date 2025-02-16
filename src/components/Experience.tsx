import { motion } from "framer-motion";
import { useState } from "react";
import {  SlideIn, Transition } from "./ui/transitions";
import { SectionHeading, PerspectiveText,} from "./ui/typography"

const Experience = () => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="relative px-4 py-12 bg-black/30">
      <span className="blob absolute top-[20%] left-0 w-1/3 h-5/6 blur-[100px] -z-10" />
      <SectionHeading className="py-20 pl-4 md:px-12">
        <SlideIn className="text-white/60">Experience</SlideIn>
        <br />
        <SlideIn><span className="text-red-600">R</span>eady to Work</SlideIn>
      </SectionHeading>
      <div>
        <Transition
          className="px-2 py-4 border-b md:py-8 border-white/10 hover:bg-white/5 md:px-12"
          onMouseEnter={() => setHover(0)}
          onMouseLeave={() => setHover(null)}
        >
          <div className="flex items-center justify-between md:gap-8">
            <span className="font-mono text-red-500 max-md:hidden">01</span>
            <div className="flex-1 text-xl md:text-5xl md:font-semibold">
              <PerspectiveText hover={hover === 0}>
                Ready to Work
              </PerspectiveText>
            </div>
            <div className="flex-col max-md:text-sm max-md:flex text-foreground/50">
              <span className="italic">Available</span>
              <span className="max-md:hidden">{" - "}</span>
              <span className="italic">Immediately</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-2 md:pl-12 text-foreground/50 max-md:text-sm">
            <span >FullStack Developer</span>
            <span className="text-red-500">Open to Opportunities</span>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: hover === 0 ? "auto" : 0,
              opacity: hover === 0 ? 1 : 0
            }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="overflow-hidden"
          >
            <p className="py-2 text-gray-300">
              I am an aspiring developer ready to contribute and grow in a professional environment. 
            </p>
            <ul className="text-gray-300 list-inside">
              <li className="text-foreground/80 max-md:text-sm">
              <span className="mr-2 text-red-500">•</span>
                Skilled in React, Node.js, and modern web development
              </li>
              <li className="text-foreground/80 max-md:text-sm">
              <span className="mr-2 text-red-500">•</span>
                Passionate about solving real-world problems
              </li>
              <li className="text-foreground/80 max-md:text-sm">
              <span className="mr-2 text-red-500">•</span>
                Enthusiastic about learning new technologies
              </li>
            </ul>
          </motion.div>
        </Transition>
      </div>
    </div>
  );
};

export default Experience;