import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PageLoadProps {
  hideLoader: boolean;
  setHideLoader: (value: boolean) => void;
}

export const PageLoad = ({ setHideLoader }: PageLoadProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      if (counter < 100) {
        setCounter(counter + 2);
      } else {
        clearInterval(count);
      }
    }, 25);

    return () => {
      clearInterval(count);
    };
  }, [counter]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2.5, duration: 1, type: "tween" }}
      onAnimationComplete={() => setHideLoader(false)}
      className="fixed top-0 left-0 z-[9999] w-full h-full bg-black"
    >
      <div className="flex flex-col w-full h-full p-4 md:p-10 md:justify-between max-md:gap-8">
        <span className="font-semibold text-white/90">Mahesh Karri</span>
        <div className="flex flex-col max-md:justify-between max-md:h-full">
          <p className="w-full text-3xl md:text-5xl md:w-2/5">
            I develop FullStack Applications.
          </p>
          <div className="flex items-end justify-between">
            <span className="text-white/60">Loading...</span>
            <motion.span className="font-semibold md:text-9xl text-7xl md:font-bold">
              {counter}%
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
