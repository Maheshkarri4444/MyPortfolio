// import React, { useRef, useEffect } from 'react';
// import { SectionHeading } from './ui/typography';
// import { SlideIn } from './ui/transitions';

// interface Testimonial {
//   id: number;
//   content: string;
//   author: string;
//   position: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     content: "Throughout our project, John demonstrated exceptional technical skills and a strong work ethic. He consistently met deadlines and delivered outstanding results.",
//     author: "David Rodriguez",
//     position: "Project Manager"
//   },
//   {
//     id: 2,
//     content: "I had the pleasure of collaborating with John on a complex web application project. His ability to translate design concepts into functional, user-friendly solutions was impressive.",
//     author: "Emily Chen",
//     position: "Lead Designer"
//   },
//   {
//     id: 3,
//     content: "John is a skilled developer with an excellent eye for detail. He proved to be invaluable to our team, consistently delivering clean and efficient code.",
//     author: "Michael Lee",
//     position: "Lead Developer"
//   },
//   // Duplicate testimonials for seamless scrolling
//   {
//     id: 4,
//     content: "Throughout our project, John demonstrated exceptional technical skills and a strong work ethic. He consistently met deadlines and delivered outstanding results.",
//     author: "David Rodriguez",
//     position: "Project Manager"
//   },
//   {
//     id: 5,
//     content: "I had the pleasure of collaborating with John on a complex web application project. His ability to translate design concepts into functional, user-friendly solutions was impressive.",
//     author: "Emily Chen",
//     position: "Lead Designer"
//   }
// ];

// export default function Testimonials() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [isPaused, setIsPaused] = React.useState(false);
//   const lastScrollPosition = useRef(0);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     let animationFrameId: number;

//     const scroll = () => {
//       if (scrollContainer && !isPaused) {
//         lastScrollPosition.current -= 0.5; // Changed to negative for left-to-right scrolling
//         scrollContainer.scrollLeft = lastScrollPosition.current;

//         // Reset scroll position when reaching the start
//         if (lastScrollPosition.current <= 0) {
//           lastScrollPosition.current = scrollContainer.scrollWidth / 2;
//           scrollContainer.scrollLeft = lastScrollPosition.current;
//         }
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     animationFrameId = requestAnimationFrame(scroll);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [isPaused]);

//   return (
//     <div className="w-full py-16 bg-black/30">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <SectionHeading className="md:pl-16">
//          <SlideIn className="text-white/60">What</SlideIn>
//          <br />
//         <SlideIn><span className='text-red-600'>P</span>eople Say</SlideIn>
//        </SectionHeading>
        
//         <div className="relative">
//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-hidden"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {testimonials.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="flex-none w-[400px] p-6 rounded-lg transform transition-all duration-300 hover:scale-105"
//                 style={{
//                     background: 'linear-gradient(135deg, black, #1a1a1a)',
//                     backdropFilter: 'blur(15px)',
//                     border: '1px solid rgba(255, 255, 255, 0.2)',
//                     boxShadow: '0px 4px 10px rgba(255, 0, 0, 0.3)'
//                   }}
//               >
//                 <div className="flex flex-col justify-between h-full">
//                   <p className="mb-6 text-lg text-gray-300">
//                     "{testimonial.content}"
//                   </p>
//                   <div className="flex items-center">
//                     <div className="flex items-center justify-center w-12 h-12 border border-red-600 rounded-full bg-gradient-to-br from-gray-950 to-red-500">
//                       <span className="text-xl text-white">
//                         {testimonial.author[0]}
//                       </span>
//                     </div>
//                     <div className="ml-4">
//                       <h4 className="font-semibold text-white">
//                         {testimonial.author}
//                       </h4>
//                       <p className="text-gray-400">{testimonial.position}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from 'react';
import { SectionHeading } from './ui/typography';
import { SlideIn } from './ui/transitions';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Throughout our project, John demonstrated exceptional technical skills and a strong work ethic. He consistently met deadlines and delivered outstanding results.",
    author: "David Rodriguez",
    position: "Project Manager"
  },
  {
    id: 2,
    content: "I had the pleasure of collaborating with John on a complex web application project. His ability to translate design concepts into functional, user-friendly solutions was impressive.",
    author: "Emily Chen",
    position: "Lead Designer"
  },
  {
    id: 3,
    content: "John is a skilled developer with an excellent eye for detail. He proved to be invaluable to our team, consistently delivering clean and efficient code.",
    author: "Michael Lee",
    position: "Lead Developer"
  }
];

function cn(...inputs: (string | undefined | null | boolean | {[key: string]: boolean})[]) {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ');
}

export default function Testimonials() {
  const [start, setStart] = useState(false);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clone and append items for seamless scrolling
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      // Set animation properties
      containerRef.current.style.setProperty("--animation-duration", "40s");
      containerRef.current.style.setProperty("--animation-direction", "reverse");
      setStart(true);
    }
  }, []);

  return (
    <div className="w-full py-16 bg-black/30">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
         <SectionHeading className="md:pl-8">
          <SlideIn className="text-white/60">What</SlideIn>
          <br />
         <SlideIn><span className='text-red-600'>P</span>eople Say</SlideIn>
        </SectionHeading>
        
        <div 
          ref={containerRef}
          className="scroller relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex min-w-full gap-6 py-4 w-max",
              start && "animate-scroll",
              "hover:[animation-play-state:paused]"
            )}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.id}
                className="flex-none w-[300px] sm:w-[400px] p-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                style={{
                //   background: 'linear-gradient(135deg, black, #1a1a1a)',
                background: 'linear-gradient(to bottom, #0a0a0a, #1a0505)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0px 4px 10px rgba(255, 0, 0, 0.3)'
                }}
              >
                <div className="flex flex-col justify-between h-full">
                  <p className="mb-6 text-lg text-gray-300">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 border border-red-600 rounded-full bg-gradient-to-br from-red-950 to-red-900">
                      <span className="text-xl text-white">
                        {testimonial.author[0]}
                      </span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}