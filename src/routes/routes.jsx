import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/";
import About from "../pages/About/About";
import Add from "../pages/Add";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="add" element={<Add />} />
    </Route>
  )
);

export default router;
