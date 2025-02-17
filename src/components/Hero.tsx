import { ArrowRight } from 'lucide-react';
import { PageLoad } from './ui/page-load';
import { useState } from 'react';
import ProfilePic from "../../../assets/profilepic.png";
import { SlideIn,  Transition } from "./ui/transitions";
import { TextReveal } from './ui/typography';

const Hero = () => {
  const [hideLoader,setHideLoader] = useState(true);

  return (
    <div className="relative overflow-hidden h-dvh w-dvw " >
      <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
    {hideLoader ? (
      <PageLoad hideLoader={hideLoader} setHideLoader={setHideLoader} />
    ) : (
    <div className="relative w-full h-full">
    <div className="flex flex-col items-center justify-center h-full pb-10">
      <Transition>
        <img
          src={ProfilePic}
          width={200}
          height={200}
          alt={"demo pic"}
          className="object-cover rounded-full size-28"
        />
      </Transition>
      <div  className="flex flex-col items-center py-6 mx-4">
        <h2 className="overflow-hidden text-4xl font-bold md:text-7xl">
          <SlideIn>Hello! I&apos;m <span       style={{
        textShadow: "2px 2px 10px rgba(0, 0, 0, 1)",
      }} className='text-red-600'>M</span>ahesh Karri</SlideIn>
        </h2>
        <h1 className="overflow-hidden text-3xl md:text-7xl">
          <SlideIn>FullStack Developer</SlideIn>
        </h1>
      </div>
      <Transition viewport={{ once: true }} className="w-full mx-4">
        <p className="flex flex-wrap justify-center w-10/12 gap-2 py-4 mx-auto opacity-70 md:text-xl md:w-2/3">
        I Develop Web Applications.
        </p>
      </Transition>
      <Transition viewport={{ once: true }} >
        <a
          href={"#contact"}
          className="flex items-center justify-center gap-4 px-5 py-3 mt-4 border rounded-full border-white/80 group"
        >
          <TextReveal>Let&apos;s talk</TextReveal>
          <ArrowRight
            size={20}
            className="text-red-500 transition-transform group-hover:rotate-90"
          />
        </a>
      </Transition>
    </div>
  </div>
    )}
    </div>
  );
};

export default Hero;