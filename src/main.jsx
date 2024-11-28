import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import GadgetDetails from "./components/GadgetDetails.jsx";
import DashBoard from "./components/DashBoard.jsx";
import Statistics from "./components/Statistics.jsx";
import AllCart from "./components/AllCart.jsx";
import AllWishList from "./components/AllWishList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/gadgets/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/gadgetData.json"),
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/allcart",
        element: <AllCart></AllCart>,
      },
      {
        path: "/allwishlist",
        element: <AllWishList></AllWishList>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/gadgetData.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
