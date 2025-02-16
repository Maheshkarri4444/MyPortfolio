import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsBriefcase, BsChat } from 'react-icons/bs';
import { RiFileListLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="fixed left-0 right-0 z-50 flex justify-center bottom-6">
      <nav className="bg-[#0a0a0a] bg-opacity-90 backdrop-blur-sm max-w-[100vw] rounded-2xl px-3 py-2 mx-4 shadow-2xl border border-zinc-800/30">
        <div className="flex items-center justify-center gap-1">
          <NavItem icon={<AiOutlineHome size={24} />} label="Home" to="#home" active  />
          <NavItem icon={<AiOutlineUser size={24} />} label="About" to="#about" />
          <NavItem icon={<BsBriefcase size={24} />} label="Projects" to="#projects"/>
          <NavItem icon={<RiFileListLine size={24} />} label="Resume" to="#resume"/>
          <NavItem icon={<BsChat size={24} />} label="Contact" to="#contact" />
        </div>
      </nav>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  to:string;
}

const NavItem = ({ icon, label, active ,to }: NavItemProps) => {
  return (
    <a href={to}
      className={`flex flex-col items-center justify-center px-5 py-3 rounded-xl transition-all duration-300 ${
        active 
          ? 'text-red-500 bg-gradient-to-b from-zinc-800/80 to-black/40 shadow-lg shadow-red-500/10 border border-red-500/10' 
          : 'text-zinc-500 hover:text-red-500 hover:bg-zinc-800/20'
      }`}
    >
      {icon}
      <span className="hidden sm:block text-[11px] mt-1.5 font-medium">{label}</span>
    </a>
  );
};

export default BottomNav;