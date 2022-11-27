// All @ROUTES here
import { Layout } from "../layouts";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
