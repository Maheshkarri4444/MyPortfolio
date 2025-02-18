import { useState } from "react";
import { motion } from "framer-motion";
import profilepic from "../assets/remaining/MaheshPic2.jpg";
import { SlideIn, Transition } from "./ui/transitions";
import { TextReveal } from "./ui/typography";

const about = {
  quote: "Dream drives excellence.",
  description: "I am a passionate developer who believes in the power of dreams and perseverance. Focused on creating impactful and elegant solutions, I aim to tackle modern challenges with innovative technologies.",
  avatar: {
    url: "../assets/remaining/profilepic.png",
    name: "Mahesh Karri",
  },
};

const education = [
  {
    _id: "1",
    jobTitle: "Full Stack Developer",
    summary: "Developed and maintained full-stack applications for various clients.",
    bulletPoints: ["Built scalable APIs", "Improved Backend performance", "Looking forward to Collabrate"],
    forEducation: true,
    enabled: true,
    sequence: 1,
  },
  {
    _id: "2",
    jobTitle: "Currently Learning",
    summary: "Focusing more on the backend to handle larger and more complex systems efficiently.",
    bulletPoints: ["Golang - Backend", "Web3 - Blockchain/ETH/SOL", "DSA - Problem Solving"],
    forEducation: true,
    enabled: true,
    sequence: 2,
  },
  {
    _id: "3",
    jobTitle: "Future Ambitions",
    summary: "Aspiring to become a versatile developer skilled in Web3.",
    bulletPoints: [
      "Continuously learning and staying updated with cutting-edge technologies",
      "Exploring decentralized systems and Blockchain applications",
      "Want to be a Web3 developer"
    ],
    forEducation: true,
    enabled: true,
    sequence: 3,
  },
  {
    _id: "4",
    jobTitle: "Education",
    summary: "Building a strong foundation in computer science and related fields.",
    bulletPoints: [
      "Completed Bachelor's degree in Computer Science In RGUKT Nuzvid",
      "Engaged in continuous learning through online courses and certifications in React, Node.js, and backend development"
    ],
    forEducation: true,
    enabled: true,
    sequence: 4,
  },
  
  
  
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div  className="grid md:grid-cols-[1fr_1.8fr] gap-x-10 py-20 px-4 md:px-8 relative bg-black/30 text-white" >

      {/* Left Column */}
      <div className="relative mb-2">
        <div className="sticky top-6">
          <Transition>
            <img
              src={profilepic}
              alt={"Mahesh Karri"}
              className="object-cover rounded-xl"
              width="400"
              height="400"
            />
          </Transition>
        </div>
      </div>
      {/* Right Column */}
      <div>
        <h3 className="pb-8 overflow-hidden text-2xl font-bold md:text-5xl">
          <SlideIn><span className="text-red-600">D</span>ream drives excellence.</SlideIn>
        </h3>
        <Transition viewport={{ once: true }}>
          <p className="text-xl text-white/90 md:text-3xl">
            {about.description}
          </p>
        </Transition>
        <div className="pt-10">
          <div className="grid w-full py-10 overflow-hidden">
            {education.map((edu, index) => (
              <Transition key={edu._id}>
                <TimelineCard
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  timeline={edu}
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface Timeline {
  jobTitle: string;
  summary: string;
  bulletPoints: string[];
}

interface TimelineCardProps {
  timeline: Timeline;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ timeline, activeIndex, setActiveIndex, index }) => (
  <div className={`relative ${index !== education.length - 1 ? 'border-b border-gray-600' : ''} transition duration-300`}>
    <div
      className="flex items-center justify-between gap-4 py-8 cursor-pointer select-none"
      onClick={() => setActiveIndex(index)}
    >
      <span className="font-mono text-red-500">0{index + 1}</span>
      <span className="flex-1 text-xl font-bold text-white md:text-3xl">
        <TextReveal>{timeline.jobTitle}</TextReveal>
      </span>
      <motion.div
        className="relative flex items-center justify-center w-6 h-6"
        animate={{ rotate: activeIndex === index ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="absolute w-6 h-0.5 bg-red-500" />
        <span className="absolute w-6 h-0.5 bg-red-500 rotate-90" />
      </motion.div>
    </div>
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: activeIndex === index ? "auto" : 0, opacity: activeIndex === index ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="pb-8">
        <p className="mb-4 text-sm text-gray-300 md:text-base">
          {timeline.summary}
        </p>
        <ul className="space-y-2">
          {timeline.bulletPoints.map((point, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-300">
              <span className="mr-2 text-red-500">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  </div>
);

export default About;
