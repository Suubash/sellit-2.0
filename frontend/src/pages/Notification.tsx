import { XMarkIcon } from "@heroicons/react/24/solid";

export const Notification = () => {
  return (
    <div className="bg-gradient-to-b from-dark-secondary to-dark text-light">
      <div className="pt-10 padding-custom-x">
        <h2 className="text-xl font-black pb-3 tracking-tight leading-tight">
          Notifications
        </h2>
        <div className="bg-dark-tertiary p-4 rounded-sm tracking-tight flex justify-between gap-2">
          <p className="line-clamp-2 flex-grow">
            Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Non, deleniti quae. Provident iste, labore optio
            necessitatibus voluptatum officiis minima dignissimos, dolor iure
            architecto nulla cum distinctio. Incidunt iure provident fugiat.
          </p>
          <div>
            <XMarkIcon className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
