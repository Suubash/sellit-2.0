import { FunnelIcon, Cog6ToothIcon, BellIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between padding-custom">
        <div>
          <p className="font-semibold text-light select-none cursor-pointer text-2xl">
            Sellit 2.0
          </p>
        </div>
        <div className="flex items-center gap-3">
          <BellIcon className="icon-solid" />

          {/* <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all rounded-full p-2"> */}
          <FunnelIcon className="icon-solid" />
          {/* </div> */}
          <Cog6ToothIcon className="icon-solid" />
        </div>
      </div>
    </header>
  );
};
