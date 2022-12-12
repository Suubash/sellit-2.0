import { IProduct } from "interfaces/category";

export const ProductChip = (props: IProduct) => {
  const { title, image } = props;

  return (
    <div className="text-light bg-dark-secondary flex items-center gap-3 rounded-sm">
      <div className="h-[4.5rem] w-14 min-w-[3.5rem] object-cover rounded-sm">
        <img
          className="object-cover w-full h-full rounded-sm"
          src={image}
          alt={title}
        />
      </div>
      <p className="font-semibold pr-2 select-none line-clamp-2">{title}</p>
    </div>
  );
};
