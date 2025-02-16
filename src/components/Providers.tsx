import { ReactNode } from "react";
import SmoothScroll from "./smooth-scroll";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SmoothScroll>
          {children}
      </SmoothScroll>
    </>
  );
};
