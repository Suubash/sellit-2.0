import { MapPinIcon } from "@heroicons/react/24/solid";
import { IProduct } from "interfaces/category";

export const CartProduct = (props: IProduct) => {
  const { title, image, price, location } = props;

  return (
    <div className="text-light bg-dark-secondary flex items-center gap-3 rounded-sm">
      <div className="h-[4.5rem] w-14 min-w-[3.5rem] object-cover rounded-sm">
        <img
          className="object-cover w-full h-full rounded-sm"
          src={image}
          alt={title}
        />
      </div>
      <div className="pr-2 select-none leading-tight tracking-tight flex-1">
        <p className="font-bold line-clamp-2 mb-2">{title}</p>
        <div className="flex text-sm items-center justify-between w-full">
          <div className="flex gap-1 items-center text-light-secondary">
            <MapPinIcon className="w-4" />
            <p>{location.street}</p>
          </div>
          <p className="text-accent">{price}</p>
        </div>
      </div>
    </div>
  );
};
