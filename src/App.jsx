import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/home/Home.jsx";

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
