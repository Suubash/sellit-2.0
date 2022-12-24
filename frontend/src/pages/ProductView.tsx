import { MapPinIcon, UserIcon } from "@heroicons/react/24/solid";
import { Button } from "../components/shared/Button";

export const ProductView = () => {
  return (
    <div className="text-light padding-custom leading-tight tracking-tight bg-gradient-to-b from-dark-secondary via-dark to-dark">
      <div className="w-full h-44 rounded-t-sm relative">
        <img
          className="h-full w-full object-cover rounded-t-sm"
          src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Test alt"
        />
        <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-transparent to-dark rounded-sm" />
      </div>
      <div className="pt-10">
        <p className="text-xs text-light-secondary flex items-center gap-2 mb-2 select-none">
          <span>NPR 2,00,000</span>
          <span>•</span>
          <MapPinIcon className="w-3" />
          <span>Kathmandu, Nepal</span>
        </p>
        <h1 className="text-2xl font-bold line-clamp-1 select-none">
          Apple iPhone 13 Pro
        </h1>
      </div>

      <div className="pt-10 space-y-2">
        <Button>Buy Now</Button>
        <Button variant="secondary">Cancel</Button>
      </div>

      <div className="pt-10">
        <h1 className="text-xl font-bold line-clamp-1 select-none mb-3">
          Specification
        </h1>
        <div className="text-sm">
          <ul>
            <li className="flex items-center gap-2">
              <span>Display</span>
              <span>•</span>
              <span className="text-light-secondary">
                LTPO 3.0 OLED XDR Display 120Hz
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span>Processor</span>
              <span>•</span>
              <span className="text-light-secondary">A15 Bionic</span>
            </li>
            <li className="flex items-center gap-2">
              <span>Battery Health</span>
              <span>•</span>
              <span className="text-light-secondary">95%</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-xl font-bold line-clamp-1 select-none mb-3">
          Known Defects
        </h1>
        <div className="text-sm">
          <ul>
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="text-light-secondary">Face ID not working</span>
            </li>
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="text-light-secondary">
                Little back glass crack
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-xl font-bold line-clamp-1 select-none mb-3">
          Owner Information
        </h1>
        <div className="bg-dark-secondary p-3 flex gap-2 items-center rounded-sm">
          <div>
            <UserIcon className="w-20" />
          </div>
          <div>
            <h2 className="text-xl font-bold select-none">Subhash Chaudhary</h2>
            <p className="text-light-secondary font-semibold text-xs select-none">
              subash@gmail.com
            </p>
            <p className="text-light-secondary font-bold text-xs select-none">
              +977 9876543210
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
