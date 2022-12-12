import { ICategory } from "interfaces/category";

export const Category = (props: ICategory) => {
  const { image, title } = props;

  return (
    <div className="min-w-[180px] relative h-24 cursor-pointer group overflow-hidden rounded-lg select-none">
      <img
        className="w-full h-full absolute object-cover rounded-lg group-hover:scale-105 transition duration-200"
        src={image}
        alt={title}
      />
      <div className="absolute h-full w-full bg-gradient-to-t from-black via-black/0 to-transparent rounded-lg"></div>
      <p className="absolute bottom-2 left-2 font-bold text-gray-200 text-sm">
        {title}
      </p>
    </div>
  );
};
