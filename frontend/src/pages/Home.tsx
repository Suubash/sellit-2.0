import { ProductChip } from "../components/shared";
import { Banner, Category } from "../components/unshared";
import { products } from "../data/products";
import { categories } from "../data/categories";

export const Home = () => {
  return (
    <div>
      <div className="flex gap-4 overflow-auto padding-custom scrollbar-hide">
        {categories.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
      <div className="pt-8 padding-custom-x grid grid-cols-2 gap-2">
        {products.map((product) => (
          <ProductChip key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
