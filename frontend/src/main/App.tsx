// All @ROUTES here
import { Layout } from "../layouts";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  ProductView,
  Search,
  Profile,
  Notification,
  Register,
  Login,
  Cart,
} from "../pages";
import { store } from "../redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
