import { Banner, Category } from "../components/unshared";
import { categories } from "../data/categories";

export const Home = () => {
  return (
    <div>
      <div className="flex gap-4 overflow-auto padding-custom scrollbar-hide">
        {categories.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
      <div className="padding-custom text-3xl font-black">Fresh Deals</div>
      {/* <Banner /> */}
    </div>
  );
};
