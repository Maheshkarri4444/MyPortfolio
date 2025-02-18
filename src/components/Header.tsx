import React from 'react';
import { Menu, X } from 'lucide-react';
import { Transition } from './ui/transitions';
import { RedTextReveal, TextReveal } from './ui/typography';


const Header = () => {

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-sm bg-black/60">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Transition className="z-30 flex flex-1 transition-colors duration-200 flex-nowrap reltive md:top-8 top-6 md:left-8 left-6 hover:text-white/100 text-white/100">
              <RedTextReveal className="text-lg font-bold ">Mahesh Karri</RedTextReveal>
          </Transition>

        </div>
      </div>
    </header>
  );
};

export default Header;