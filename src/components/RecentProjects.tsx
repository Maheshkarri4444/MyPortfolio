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