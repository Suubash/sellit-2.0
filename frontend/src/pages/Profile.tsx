import { MapPinIcon } from "@heroicons/react/24/solid";
import { Button } from "../components/shared/Button";

export const Profile = () => {
  return (
    <div className="text-light leading-tight tracking-tight bg-gradient-to-b from-dark-secondary to-dark">
      <div className="padding-custom">
        <div className="bg-dark-secondary p-4 rounded-sm flex flex-col items-center gap-4">
          <div className="rounded-full h-20 w-20 bg-dark-tertiary overflow-hidden">
            <img
              src="https://images.pexels.com/photos/761115/pexels-photo-761115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile Picture"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-bold text-2xl">Subash Chaudhary</p>
            <div className="text-sm text-light-secondary flex items-center justify-center gap-2">
              <span>subash@gmail.com</span>
              <span>•</span>
              <p className="flex items-center gap-1 text-accent">
                <span>
                  <MapPinIcon className="w-4" />
                </span>
                <span>Kapilvastu</span>
              </p>
            </div>
            <p className="text-light-secondary font-medium">Ph • 9876543210</p>
          </div>
        </div>

        <div className="text-light pt-10 text-xl font-bold line-clamp-1 select-none">
          SellitID: <span className="text-light-secondary">suubash5525</span>
        </div>
        <div className="pt-10">
          <Button>Sell Item</Button>
        </div>

        <div className="pt-10">
          <h1 className="text-xl font-bold line-clamp-1 select-none mb-3">
            Your Items
          </h1>
          <p className="text-sm text-light-secondary">
            Currently no items sold or bought
          </p>
        </div>
      </div>
    </div>
  );
};
