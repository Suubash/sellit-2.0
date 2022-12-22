// All @ROUTES here
import { Layout } from "../layouts";
import { Routes, Route } from "react-router-dom";
import { Home, ProductView, Search, Profile } from "../pages";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
