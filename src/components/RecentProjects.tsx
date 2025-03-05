import React from 'react';
import { PinContainer } from './3d-Pin';
import { SectionHeading } from './ui/typography';
import { SlideIn  , Transition} from './ui/transitions';
import grdnaturals from "../assets/pictures/Projects/grdnaturals.png"
import cardiolens from "../assets/pictures/Projects/cardiolens.gif"
import examify from "../assets/pictures/Projects/Examify2.png"

export const projects = [
  {
    id: 1,
    title: "GRD-Naturals Bussiness Page",
    des: "A complete Business & e-commerce website built for GRD Naturals, showcasing and selling their natural products online.",
    img: grdnaturals,
    link: "https://grdnaturals.com",
  },
  {
    id: 2,
    title: "AiCardiolens-Collabration",
    des: "Developed the complete website for AICardiolens an AI-powered project that secured AIR 3rd in an IEEE hackathon",
    img: cardiolens,
    link: "https://github.com/Maheshkarri4444/AI-EchocardiagramProject-Collabration",
  },
  {
    id: 3,
    title: "Examify",
    des: "Built Examify, an online exam platform with tab-switch detection for secure assessments.",
    img: examify,
    link: "https://github.com/Maheshkarri4444/Examify-Rgukt",
  },
];

const ProjectGrid = () =>{
  return (
    <section className="container relative min-w-full px-4 py-12 mx-auto bg-black/30">
        <SectionHeading className="md:pl-16">
         <SlideIn className="text-white/60">Featured</SlideIn>
         <br />
        <SlideIn><span className='text-red-600'>P</span>rojects</SlideIn>
       </SectionHeading>
       <Transition>
      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="h-[400px] flex items-center justify-center">
            <PinContainer title={project.title} href={project.link}>
              <div className="relative flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
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
    </section>
  );
}

export default ProjectGrid;