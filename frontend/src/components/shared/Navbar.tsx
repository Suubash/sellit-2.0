import { FunnelIcon, Cog6ToothIcon, BellIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  return (
    <header className="w-full bg-gradient-to-b from-dark to-dark-secondary">
      <div className="flex items-center justify-between padding-custom">
        <div>
          <p className="font-semibold text-light select-none cursor-pointer text-2xl tracking-tight leading-tight">
            Sellit 2.0
          </p>
        </div>
        <div className="flex items-center gap-3">
          <BellIcon className="icon-solid" />
          <FunnelIcon className="icon-solid" />
          <Cog6ToothIcon className="icon-solid" />
        </div>
      </div>
    </header>
  );
};
