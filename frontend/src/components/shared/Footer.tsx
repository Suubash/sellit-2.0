import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export const Footer = () => {
  const location = useLocation();

  const footer_links = [
    { title: "Home", icon: <HomeIcon />, to: "/" },
    { title: "Search", icon: <MagnifyingGlassIcon />, to: "/search" },
    { title: "Notif.", icon: <BellIcon />, to: "/notification" },
    { title: "Profile", icon: <UserCircleIcon />, to: "/profile" },
  ];

  return (
    <footer className="text-light fixed bottom-0 w-full bg-gradient-to-b from-dark-secondary/70 to-dark-secondary backdrop-blur-sm">
      <div className="py-3 px-12 flex items-center justify-between">
        {footer_links.map((link) => (
          <Link
            to={link.to}
            key={link.title}
            className={`text-xs font-semibold flex flex-col items-center ${
              location.pathname === link.to && "text-accent"
            }`}
          >
            <span className="w-8">{link.icon}</span>
            <span className="mt-1">{link.title}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
};
