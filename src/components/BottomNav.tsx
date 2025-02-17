import React, { useEffect, useState } from 'react';
import { HomeIcon, UserIcon, BriefcaseIcon, WrenchIcon, MessageSquareIcon } from 'lucide-react';

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("entry ",entry.target)
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { icon: <HomeIcon size={24} />, label: 'Home', to: '#home' },
    { icon: <UserIcon size={24} />, label: 'About', to: '#about' },
    { icon: <WrenchIcon size={24} />, label: 'Services', to: '#services' },
    { icon: <BriefcaseIcon size={24} />, label: 'Projects', to: '#projects' },
    { icon: <MessageSquareIcon size={24} />, label: 'Contact', to: '#contact' },
  ];

  return (
    <div className="fixed left-0 right-0 z-50 flex justify-center bottom-6">
      <nav className="bg-[#0a0a0a] bg-opacity-90 backdrop-blur-sm max-w-[100vw] rounded-2xl px-3 py-2 mx-4 shadow-2xl border border-zinc-800/30">
        <div className="flex items-center justify-center gap-1">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              to={item.to}
              active={activeSection === item.to.substring(1)}
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
}

const NavItem = ({ icon, label, active, to }: NavItemProps) => {
  return (
    <a
      href={to}
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


// import React, { useEffect, useState } from 'react';
// import { HomeIcon, UserIcon, BriefcaseIcon, WrenchIcon, MessageSquareIcon } from 'lucide-react';

// const BottomNav = () => {
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '-40% 0px',  // Adjusted to better detect section changes
//       threshold: [0.3, 0.7],   // Multiple thresholds for better accuracy
//     };

//     const observerCallback: IntersectionObserverCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
//           console.log("entry",entry.target)
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     // Observe all sections
//     document.querySelectorAll('section[id]').forEach((section) => {
//       observer.observe(section);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   const navItems = [
//     { icon: <HomeIcon size={24} />, label: 'Home', to: '#home' },
//     { icon: <UserIcon size={24} />, label: 'About', to: '#about' },
//     { icon: <WrenchIcon size={24} />, label: 'Services', to: '#services' },
//     { icon: <BriefcaseIcon size={24} />, label: 'Projects', to: '#projects' },
//     { icon: <MessageSquareIcon size={24} />, label: 'Contact', to: '#contact' },
//   ];

//   return (
//     <div className="fixed left-0 right-0 z-50 flex justify-center bottom-6">
//       <nav className="bg-[#0a0a0a] bg-opacity-90 backdrop-blur-sm max-w-[100vw] rounded-2xl px-3 py-2 mx-4 shadow-2xl border border-zinc-800/30">
//         <div className="flex items-center justify-center gap-1">
//           {navItems.map((item) => (
//             <NavItem
//               key={item.label}
//               icon={item.icon}
//               label={item.label}
//               to={item.to}
//               active={activeSection === item.to.substring(1)}
//             />
//           ))}
//         </div>
//       </nav>
//     </div>
//   );
// };

// interface NavItemProps {
//   icon: React.ReactNode;
//   label: string;
//   active?: boolean;
//   to: string;
// }

// const NavItem = ({ icon, label, active, to }: NavItemProps) => {
//   return (
//     <a
//       href={to}
//       className={`flex flex-col items-center justify-center px-5 py-3 rounded-xl transition-all duration-300 ${
//         active
//           ? 'text-red-500 bg-gradient-to-b from-zinc-800/80 to-black/40 shadow-lg shadow-red-500/10 border border-red-500/10'
//           : 'text-zinc-500 hover:text-red-500 hover:bg-zinc-800/20'
//       }`}
//     >
//       {icon}
//       <span className="hidden sm:block text-[11px] mt-1.5 font-medium">{label}</span>
//     </a>
//   );
// };

// export default BottomNav;