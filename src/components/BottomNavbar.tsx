
import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, BookmarkCheck, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavbar = () => {
  const location = useLocation();
  
  const navItems = [
    {
      label: 'Home',
      path: '/',
      icon: <Home size={20} />,
    },
    {
      label: 'Destinations',
      path: '/destinations',
      icon: <MapPin size={20} />,
    },
    {
      label: 'Itineraries',
      path: '/itineraries',
      icon: <BookmarkCheck size={20} />,
    },
    {
      label: 'About',
      path: '/about',
      icon: <User size={20} />,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass-effect border-t border-white/20 shadow-lg">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={cn(
                "flex flex-col items-center py-3 px-2 min-w-[60px]",
                location.pathname === item.path 
                  ? "text-primary" 
                  : "text-travel-neutral hover:text-travel-primary"
              )}
            >
              {item.icon}
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
