import React, { useEffect, useState } from 'react';
import { HomeIcon, UserIcon, BriefcaseIcon, WrenchIcon, MessageSquareIcon } from 'lucide-react';

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      
      // Find the current section
      const current = sections.find(section => {
        const element = document.getElementById(section); 
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section "active" when its top is near the viewport top
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset to account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  const navItems = [
    { icon: <HomeIcon size={24} />, label: 'Home', to: '#home' },
    { icon: <UserIcon size={24} />, label: 'About', to: '#about' },
    { icon: <WrenchIcon size={24} />, label: 'Services', to: '#services' },
    { icon: <BriefcaseIcon size={24} />, label: 'Projects', to: '#projects' },
    { icon: <MessageSquareIcon size={24} />, label: 'Contact', to: '#contact' },
  ];

  return (
    <div className="fixed left-0 right-0 z-50 flex justify-center bottom-1 sm:bottom-1">
      <nav className="bg-[#0a0a0a] bg-opacity-90 backdrop-blur-sm max-w-[100vw] rounded-2xl px-3 py-2 mx-4 shadow-2xl border border-zinc-800/30">
        <div className="flex items-center justify-center gap-1">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              to={item.to}
              active={activeSection === item.to.substring(1)}
              onClick={() => handleClick(item.to)}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  to: string;
  onClick: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center 
        px-5 py-3 rounded-xl 
        outline-none focus:outline-none 
        select-none
        ${active
          ? 'text-red-500 bg-gradient-to-b from-zinc-800/80 to-black/40 shadow-lg shadow-red-500/10'
          : 'text-zinc-500 hover:text-red-500 hover:bg-zinc-800/20'
        }
      `}
    >
      {icon}
      <span className="hidden sm:block text-[11px] mt-1.5 font-medium">{label}</span>
    </button>
  );
};

export default BottomNav;