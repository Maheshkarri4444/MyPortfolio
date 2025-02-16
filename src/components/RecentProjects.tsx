// import { FaLocationArrow } from "react-icons/fa6";
// import bgimg from "../assets/remaining/bg.png"
// import { projects } from "../data/index";
// import { PinContainer } from "./ui/Pin";
// import { SectionHeading } from "./ui/typography";
// import { SlideIn } from "./ui/transitions";

// const RecentProjects = () => {
//   return (
//     <div className="py-10 bg-black/30">
//       <SectionHeading className="md:pl-16">
//         <SlideIn className="text-white/60">Selected</SlideIn>
//         <br />
//         <SlideIn>works</SlideIn>
//       </SectionHeading>
//       <div className="flex flex-wrap items-center justify-center gap-16 p-4 mt-10">
//         {projects.map((item) => (
//           <div
//             className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
//             key={item.id}
//           >
//             <PinContainer
//               title="Mahesh"
//               href="https://twitter.com/mannupaaji"
//             >
//               <div className="relative flex items-center  justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
//                 <div
//                   className="relative w-full h-full overflow-hidden lg:rounded-3xl"
//                   style={{ backgroundColor: "#13162D" }}
//                 >
//                   <img src={bgimg} alt="bgimg" />
//                 </div>
//                 <img
//                   src={item.img}
//                   alt="cover"
//                   className="absolute bottom-0 z-10 h-40 rounded-lg w-80"
//                 />
//               </div>

//               <h1 className="text-base font-bold lg:text-2xl md:text-xl line-clamp-1">
//                 {item.title}
//               </h1>

//               <p
//                 className="text-sm font-light lg:text-xl lg:font-normal line-clamp-2"
//                 style={{
//                   color: "#BEC1DD",
//                   margin: "1vh 0",
//                 }}
//               >
//                 {item.des}
//               </p>

//               <div className="flex items-center justify-between mb-3 mt-7">
//                 <div className="flex items-center">
//                   {item.iconLists.map((icon, index) => (
//                     <div
//                       key={index}
//                       className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
//                       style={{
//                         transform: `translateX(-${5 * index + 2}px)`,
//                       }}
//                     >
//                       <img src={icon} alt="icon5" className="p-2" />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-center">
//                   <p className="flex text-sm lg:text-xl md:text-xs text-purple">
//                     Check Live Site
//                   </p>
//                   <FaLocationArrow className="ms-3" color="#CBACF9" />
//                 </div>
//               </div>
//             </PinContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;


import React from 'react';
import { PinContainer } from './3d-Pin';
import { SectionHeading } from './ui/typography';
import { SlideIn  , Transition} from './ui/transitions';

export const projects = [
  {
    id: 1,
    title: "Chatify",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2940&auto=format&fit=crop",
    link: "https://ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2942&auto=format&fit=crop",
    link: "https://ui.yoom.com",
  },
  {
    id: 3,
    title: "Portfolio Pro",
    des: "Showcase your work with style using our modern portfolio platform built for creative professionals.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2938&auto=format&fit=crop",
    link: "https://ui.portfolio.com",
  },
];

export default function ProjectGrid() {
  return (
    <div className="container min-w-full px-4 py-12 mx-auto bg-black/30">
        <SectionHeading className="md:pl-16">
         <SlideIn className="text-white/60">Featured</SlideIn>
         <br />
        <SlideIn><span className='text-red-600'>P</span>rojects</SlideIn>
       </SectionHeading>
       <Transition>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="h-[400px] flex items-center justify-center">
            <PinContainer title={project.title} href={project.link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">{project.des}</span>
                </div>
                <div 
                  className="flex flex-1 w-full mt-4 bg-center bg-cover rounded-lg"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      </Transition>
    </div>
  );
}