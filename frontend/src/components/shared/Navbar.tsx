import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "../../hooks/reduxHook";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";

export const Navbar = () => {
  const navigate = useNavigate();

  const all_cart_items = useAppSelector((state: RootState) => state.cart);

  return (
    <header className="w-full bg-gradient-to-b from-dark to-dark-secondary">
      <div className="flex items-center justify-between padding-custom">
        <div>
          <Link
            to={"/"}
            className="font-semibold text-light select-none cursor-pointer text-2xl tracking-tight leading-tight"
          >
            Sellit 2.0
          </Link>
        </div>
        <Link to={"/cart"} className="flex items-center gap-3 relative">
          <ShoppingCartIcon className="icon-solid" />
          <div className="absolute -right-1 select-none -top-2 text-xs font-semibold bg-accent rounded-full h-5 w-5 flex items-center justify-center">
            {all_cart_items.length}
          </div>
        </Link>
      </div>
    </header>
  );
};
