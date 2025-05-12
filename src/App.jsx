import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import Category from "./pages/category/Category.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path=":category" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
