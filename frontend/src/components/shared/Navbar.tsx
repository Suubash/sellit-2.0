import { Bars2Icon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between padding-custom">
        <div>
          <p className="font-semibold select-none cursor-pointer">Sellit 2.0</p>
        </div>
        <div className="hover:bg-gray-100 cursor-pointer transition-all rounded-full p-2">
          <Bars2Icon className="w-6" />
        </div>
      </div>
    </header>
  );
};
