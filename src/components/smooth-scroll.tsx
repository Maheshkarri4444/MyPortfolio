// import { ReactNode, useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

// export default function SmoothScroll({ children }: { children: ReactNode }) {
//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const lenis = new Lenis({
//       duration: 0.4, // Even shorter duration for snappier response
//       easing: (t) => 1 - Math.pow(1 - t, 4), // Smoother acceleration/deceleration
//       smoothWheel: false,
//       wheelMultiplier: 1.5, // Higher multiplier for more responsive wheel scrolling
//       touchMultiplier: 2, // Increased touch sensitivity
//       touchInertiaMultiplier: 2.5, // Better touch device momentum
//       infinite: false,
//       orientation: "vertical",
//       gestureOrientation: "vertical",
//       smoothTouch: false, // Disable smooth touch for more native feel
//       lerp: 0.0 // Lower lerp value for less "heavy" feeling
//     });

//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => lenis.destroy();
//   }, []);

//   return children;
// }


import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
        lerp:0.1,
        wheelMultiplier:1,
        smoothWheel:false
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return children;
}
