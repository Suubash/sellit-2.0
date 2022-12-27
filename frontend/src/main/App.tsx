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
} from "../pages";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
