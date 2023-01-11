import React from "react";
import { RootState } from "../redux/store";
import { useAppSelector } from "../hooks/reduxHook";
import { CartProduct } from "../components/shared";

export const Cart = () => {
  const all_cart_items = useAppSelector((state: RootState) => state.cart);

  React.useEffect(() => {
    console.log({ all_cart_items });
  }, [all_cart_items]);
  return (
    <div className="bg-gradient-to-b from-dark-secondary to-dark text-light">
      <div className="pt-10 padding-custom-x">
        <h2 className="text-xl font-black pb-3 tracking-tight leading-tight">
          Your cart
        </h2>

        {all_cart_items.length ? (
          all_cart_items.map((item) => <CartProduct key={item.id} {...item} />)
        ) : (
          <p className="text-light-secondary">
            You don&apos;t have any items in your cart
          </p>
        )}
      </div>
    </div>
  );
};
