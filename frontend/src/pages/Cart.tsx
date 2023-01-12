import React from "react";
import { RootState } from "../redux/store";
import { useAppSelector } from "../hooks/reduxHook";
import { Button, CartProduct } from "../components/shared";

export const Cart = () => {
  const all_cart_items = useAppSelector((state: RootState) => state.cart);

  const total_price = all_cart_items.reduce(
    (total, current) => total + current.price,
    0
  );

  return (
    <div className="bg-gradient-to-b from-dark-secondary to-dark text-light">
      <div className="pt-10 padding-custom-x">
        <h2 className="text-xl font-black pb-3 tracking-tight leading-tight">
          Your cart
        </h2>

        {all_cart_items.length ? (
          <div className="space-y-6">
            <div className="space-y-2">
              {all_cart_items.map((item) => (
                <CartProduct key={item.id} {...item} />
              ))}
            </div>
            <div className="border-t-2 border-dark-tertiary space-y-4">
              <div className="pt-4 flex items-center justify-between text-base font-semibold">
                <span>Total Payable:</span>
                <span className="text-accent ">NPR {total_price}</span>
              </div>
              <Button>CHECKOUT & PAY</Button>
            </div>
          </div>
        ) : (
          <p className="text-light-secondary">
            You don&apos;t have any items in your cart
          </p>
        )}
      </div>
    </div>
  );
};
