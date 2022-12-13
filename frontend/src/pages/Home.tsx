import { ProductCard, ProductChip } from "../components/shared";
import { Category } from "../components/unshared";
import { products } from "../data/products";
import { categories } from "../data/categories";

export const Home = () => {
  return (
    <div className="bg-gradient-to-b from-dark-secondary to-dark">
      <div className="flex gap-4 overflow-auto padding-custom scrollbar-hide">
        {categories.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
      <div className="pt-10 padding-custom-x grid grid-cols-2 gap-2">
        {products.map((product) => (
          <ProductChip key={product.id} {...product} />
        ))}
      </div>

      <div className="text-light pt-10">
        <h2 className="text-xl font-black padding-custom-x pb-3 tracking-tight leading-tight">
          Featured Products
        </h2>
        <div className="flex gap-4 overflow-auto padding-custom scrollbar-hide">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="text-light pt-10">
        <h2 className="text-xl font-black padding-custom-x pb-3 tracking-tight leading-tight">
          Near You
        </h2>
        <div className="flex gap-4 overflow-auto padding-custom scrollbar-hide">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
