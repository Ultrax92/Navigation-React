import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import Category from "./pages/category/Category.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;