import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ProductCard } from "../components/shared";
import { products } from "../data/products";

export const Search = () => {
  return (
    <div className="text-light leading-tight tracking-tight bg-gradient-to-b from-dark-secondary to-dark">
      <div className="padding-custom">
        <div className="flex items-center gap-2 bg-dark-tertiary rounded-sm">
          <input
            className="bg-transparent px-3 outline-none flex-1 placeholder:tracking-tight placeholder:leading-tight"
            placeholder="Search"
            type="search"
          />
          <div className="bg-accent text-dark p-3 rounded-r-sm">
            <MagnifyingGlassIcon className="w-6" />
          </div>
        </div>
      </div>

      <div className="pt-4 padding-custom flex items-center gap-2 flex-wrap">
        {/* Chips */}
        {products.map((product) => (
          <div
            className="bg-dark-tertiary px-2 py-1 rounded-sm max-w-[10rem]"
            key={product.id}
          >
            <p className="line-clamp-1">{product.title}</p>
          </div>
        ))}
      </div>

      <div className="pt-10">
        <h1 className="text-2xl padding-custom-x font-bold line-clamp-1 select-none">
          Your Results
        </h1>

        <div className="flex gap-4 padding-custom overflow-auto pt-3 scrollbar-hide">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
