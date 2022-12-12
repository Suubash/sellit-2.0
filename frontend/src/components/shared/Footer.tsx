import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
    <footer className="text-light fixed bottom-0 w-full bg-gradient-to-b from-dark-secondary/70 to-dark-secondary backdrop-blur-sm">
      <div className="py-3 px-12 flex items-center justify-between">
        <div className="text-xs font-semibold flex flex-col items-center">
          <HomeIcon className="w-8" />
          <span className="mt-1">Home</span>
        </div>
        <div className="text-xs font-semibold flex flex-col items-center">
          <MagnifyingGlassIcon className="w-8" />
          <span className="mt-1">Search</span>
        </div>
        <div className="text-xs font-semibold flex flex-col items-center">
          <BellIcon className="w-8" />
          <span className="mt-1">Notif.</span>
        </div>
        <div className="text-xs font-semibold flex flex-col items-center">
          <UserCircleIcon className="w-8" />
          <span className="mt-1">Profile</span>
        </div>
      </div>
    </footer>
  );
};
