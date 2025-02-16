import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { perspective, slideIn } from "../utils/anim";
import { TextReveal } from "./ui/typography";
import { ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { SocialHandle } from "../utils/interfaces";

interface NavProps {
  setIsActive: Dispatch<SetStateAction<boolean>>;
  social: SocialHandle[];
}

const Nav = ({ setIsActive, social }: NavProps) => {
  const MotionLink = motion(Link);

  return (
    <div className="flex justify-between flex-col w-full h-full px-10 pt-[100px] pb-[50px]">
      <div className="flex flex-col gap-2">
        {navLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <div
              key={`b_${i}`}
              className="linkContainer"
              onClick={() => setIsActive(false)}
            >
              <Link to={"/"} className="flex flex-wrap overflow-hidden">
                <motion.div
                  variants={perspective}
                  custom={i}
                  initial="initial"
                  animate="enter"
                  whileHover="whileHover"
                  whileTap="whileHover"
                  exit="exit"
                  className="flex items-center justify-between text-5xl text-background"
                >
                  <motion.span
                    variants={{ initial: { x: -20 }, whileHover: { x: 0 } }}
                  >
                    <ArrowRight />
                  </motion.span>
                  <motion.span
                    variants={{ initial: { x: 0 }, whileHover: { x: 20 } }}
                  >
                    {title}
                  </motion.span>
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>
      <motion.div className="flex flex-wrap">
        {social.map((link, i) => {
          const { platform, _id, url } = link;
          return (
            <MotionLink
              to={url}
              className="w-1/2 mt-1 text-background"
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={_id}
            >
              <TextReveal>{platform}</TextReveal>
            </MotionLink>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Nav;

export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
