import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
  price: string;
}

export const HoverImageLink = ({
  heading,
  imgSrc,
  subheading,
  href,
}: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [isCentered, setIsCentered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["50%", "65%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "60%"]);
  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const checkPosition = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowCenterY = window.innerHeight / 2;

    // Check if the element is near the center
    const isNearCenter =
      rect.top <= windowCenterY + 10 && rect.bottom >= windowCenterY - 10;

    setIsCentered(isNearCenter);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkPosition);
    checkPosition(); // Initial check

    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  }, []);

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative z-0 flex items-center justify-between w-full py-4 overflow-hidden transition-colors duration-500 border-b md:overflow-visible group border-white/10 md:py-6 md:px-16 hover:bg-white/5"
    >
      <div >
        <div className="flex items-center justify-between">
          <h4 className="relative z-10 block text-2xl font-semibold transition-colors duration-500 sm:text-4xl md:font-bold md:text-neutral-200 group-hover:text-white md:text-6xl">
            {heading}
          </h4>
        </div>
        <p className="relative z-10 block mt-2 text-sm transition-colors duration-500 md:text-base text-foreground/50 group-hover:text-neutral-50">
          {subheading}
        </p>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "20%",
          translateY: "-50%",
        }}
        animate={{
          scale: isCentered ? 1 : 0,
          rotate: isCentered ? "12.5deg" : "-12.5deg",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        src={imgSrc}
        className="absolute z-20 object-cover h-20 rounded-lg w-28 md:h-36 md:w-52"
        alt={`Image representing a link for ${heading}`}
      /> 
    </motion.a>
  );
};
