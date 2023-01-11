import { MapPinIcon, UserIcon } from "@heroicons/react/24/solid";
import { IProduct } from "interfaces/category";
import { Button } from "../components/shared/Button";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { owners } from "../data/owners";
import { addToCart } from "../redux/slices/cartSlice";
import { RootState } from "../redux/store";

export const ProductView = () => {
  const dispatch = useAppDispatch();
  const all_carts = useAppSelector((state: RootState) => state.cart);

  const { id } = useParams<string>();

  const ifExists = all_carts.find((cart) => cart.id === id);

  const productId = Number(id) - 1;

  const handleAddToCart = () => {
    console.log("Added to cart");
    const prod: IProduct = {
      id: products[productId].id,
      image: products[productId].image,
      title: products[productId].title,
      price: products[productId].price,
      owner_id: products[productId].owner_id,
      location: {
        place: products[productId].location.place,
        street: products[productId].location.street,
      },
    };
    dispatch(addToCart(prod));
  };

  // Finding the owner of the particular product
  const owner = owners.find(
    (owner) => products[productId].owner_id === owner.id
  );

  return (
    <div className="text-light padding-custom leading-tight tracking-tight bg-gradient-to-b from-dark-secondary via-dark to-dark">
      <div className="w-full h-44 rounded-t-sm relative">
        <img
          className="h-full w-full object-cover rounded-t-sm"
          src={products[productId].image}
          alt={products[productId].title}
        />
        <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-transparent to-dark rounded-sm" />
      </div>
      <div className="pt-10">
        <p className="text-xs text-light-secondary flex items-center gap-2 mb-2 select-none">
          <span>{products[productId].price}</span>
          <span>•</span>
          <MapPinIcon className="w-3" />
          <span>{products[productId].location.place}</span>
        </p>
        <h1 className="text-2xl font-bold line-clamp-1 select-none">
          {products[productId].title}
        </h1>
      </div>

      <div className="pt-10 space-y-2">
        <Button onClick={handleAddToCart}>
          {!ifExists ? "ADD TO CART" : "ADD SUCCESSFULL"}
        </Button>
        <Button variant="secondary">Cancel</Button>
      </div>

      <div className="pt-10">
        <h1 className="text-xl font-bold line-clamp-1 select-none mb-3">
          Specification
        </h1>
        <div className="text-sm">
          <ul>
            <li className="flex items-center gap-2">
              <span>Display</span>
              <span>•</span>
              <span className="text-light-secondary">
                LTPO 3.0 OLED XDR Display 120Hz
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span>Processor</span>
              <span>•</span>
              <span className="text-light-secondary">A15 Bionic</span>
            </li>
            <li className="flex items-center gap-2">
              <span>Battery Health</span>
              <span>•</span>
              <span className="text-light-secondary">95%</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-xl font-bold line-clamp-1 select-none mb-3">
          Known Defects
        </h1>
        <div className="text-sm">
          <ul>
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="text-light-secondary">Face ID not working</span>
            </li>
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="text-light-secondary">
                Little back glass crack
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-xl font-bold line-clamp-1 select-none mb-3">
          Owner Information
        </h1>
        <div className="bg-dark-secondary p-3 flex gap-2 items-center rounded-sm">
          <div>
            <UserIcon className="w-20" />
          </div>
          <div>
            <h2 className="text-xl font-bold select-none">
              {owner?.full_name}
            </h2>
            <p className="text-light-secondary font-semibold text-xs select-none">
              {owner?.email}
            </p>
            <p className="text-light-secondary font-bold text-xs select-none">
              +977 {owner?.contact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
