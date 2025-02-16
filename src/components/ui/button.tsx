import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <motion.button
      className="relative flex items-center justify-center gap-4 px-6 py-3 mt-6 overflow-hidden border rounded-full group"
      {...props}
    >
      {children}
    </motion.button>
  );
};
