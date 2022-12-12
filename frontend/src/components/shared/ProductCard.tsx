import { IProduct } from "interfaces/category";
import { MapPinIcon } from "@heroicons/react/24/solid";

export const ProductCard = (props: IProduct) => {
  const { image, title, price, location } = props;

  return (
    <div className="bg-dark-secondary min-w-[200px] rounded-sm">
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
            {price}
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
    </div>
    // <a
    //   href="#"
    //   className="block min-w-[300px] rounded-lg p-4 shadow-sm shadow-blue-100"
    // >
    //   <img
    //     alt={title}
    //     src={image}
    //     className="h-56 w-full rounded-md object-cover"
    //   />

    //   <div className="mt-2">
    //     <dl>
    //       <div>
    //         <dt className="sr-only">Price</dt>

    //         <dd className="text-sm text-gray-500">{price}</dd>
    //       </div>

    //       <div>
    //         <dt className="sr-only">Product Name</dt>

    //         <dd className="font-medium">{title}</dd>
    //       </div>
    //     </dl>

    //     <div className="mt-6 flex items-center gap-8 text-xs">
    //       <div className="sm:inline-flex sm:shrink-0 sm:items-center">
    //         <svg
    //           className="h-4 w-4 text-blue-700"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
    //           />
    //         </svg>

    //         <div className="mt-1.5 sm:ml-3 sm:mt-0">
    //           <p className="text-gray-500">{location.street}</p>

    //           <p className="font-medium">{location.place}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </a>
  );
};
