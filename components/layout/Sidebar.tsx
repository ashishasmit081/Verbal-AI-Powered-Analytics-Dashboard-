
import React, { ReactNode } from 'react';
import { Icons } from '../ui/Icons';

interface NavLinkProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, label, active }) => (
  <a
    href="#"
    className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
      active
        ? 'bg-primary-500 text-white shadow-lg'
        : 'text-gray-400 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {icon}
    <span className="ml-4">{label}</span>
  </a>
);

interface SidebarProps {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}


export const Sidebar: React.FC<SidebarProps> = ({isOpen, setOpen}) => {
  const navItems = [
    { icon: <Icons.Home className="h-5 w-5" />, label: 'Dashboard', active: true },
    { icon: <Icons.Target className="h-5 w-5" />, label: 'Campaigns' },
    { icon: <Icons.Users className="h-5 w-5" />, label: 'Audience' },
    { icon: <Icons.BarChart className="h-5 w-5" />, label: 'Reports' },
    { icon: <Icons.Settings className="h-5 w-5" />, label: 'Settings' },
  ];

  return (
    <>
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setOpen(false)}></div>
    <aside className={`absolute lg:relative inset-y-0 left-0 bg-gray-800 dark:bg-dark-bg border-r border-gray-700 dark:border-dark-border w-64 p-6 flex-shrink-0 flex flex-col z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="flex items-center mb-10">
        <Icons.Logo className="h-8 w-8 text-primary-400" />
        <span className="ml-3 text-2xl font-bold text-white">ADmyBRAND</span>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink key={item.label} {...item} />
        ))}
      </nav>
      <div className="mt-auto">
          <NavLink icon={<Icons.LogOut className="h-5 w-5"/>} label="Logout" />
      </div>
    </aside>
    </>
  );
};
