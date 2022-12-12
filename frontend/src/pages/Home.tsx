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
      <p className="padding-custom font-black text-light select-none cursor-pointer text-2xl">
        Fresh Deals
      </p>
      <div className="h-[200vh]"></div>
      {/* <Banner /> */}
    </div>
  );
};
