import { IProduct } from "interfaces/category";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const ProductCard = (props: IProduct) => {
  const { image, title, price, location, id } = props;

  return (
    <Link
      to={`/product/${id}`}
      className="bg-dark-secondary min-w-[200px] rounded-sm"
    >
      <div className="h-32">
        <img
          className="w-full h-full object-cover rounded-sm"
          src={image}
          alt={title}
        />
      </div>
      <div className="py-3 px-2">
        <div>
          <p className="text-xs text-light-secondary leading-tight tracking-tight">
            NPR {price}
          </p>
          <h2 className="leading-tight tracking-tight font-bold line-clamp-1">
            {title}
          </h2>
        </div>
        <div className="mt-6 flex gap-2 items-center text-xs text-light">
          <div>
            <MapPinIcon className="w-6" />
          </div>
          <div className="leading-tight tracking-tight">
            <p className="text-light-secondary">{location.street}</p>
            <p className="text-light font-semibold">{location.place}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
