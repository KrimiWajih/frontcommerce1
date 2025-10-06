import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider, useLoaderData } from "react-router-dom";
import FooterBar from "./components/FooterBar";
import NavigationBar from "./components/NavigationBar";
import ProductList from "./components/ProductList";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import AdminProdList from "./components/admin/AdminProdList";
import AdminUsersList from "./components/admin/AdminUsersList";
import LandingPage from "./components/LandingPage";
import AdminDashboard from "./components/admin/AdminDashboard";
import AddProduct from "./components/admin/AddProduct";
import { getCurrent, getOneProduct, getProducts } from "./Api";
import { ToastContainer } from "react-toastify";
import VerifyAccount from "./components/VerifyAccount";
import { verifyAccount } from "./Api";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const [cartc, setcart] = useState([]);
  const [productsL, setProductsl] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavigationBar  />
          <Outlet />
          <FooterBar />
          <ToastContainer position="top-right" />
        </>
      ),
      loader: getCurrent,
      children: [
        { path: "/", element: <LandingPage />, loader: getProducts },
        { path: "/products", element: <ProductList />, loader: getProducts },
        {
          path: "/products/:id",
          element: <SingleProduct cartc={cartc} setcart={setcart} />,
          loader: getOneProduct,
        },
        { path: "/contact", element: <Contact /> },
        {
          path: "/verifyaccount/:token",
          element: <VerifyAccount />,
          loader: verifyAccount,
        },
        {
          path: "/verifyaccount",
          element: <VerifyAccount />,
        },
        { path: "/about", element: <About /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/cart", element: <Cart /> , loader : getCurrent},
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
          loader: getCurrent,
          children: [
            { index: true, element: <AdminDashboard /> },
            {
              path: "products",
              element: <AdminProdList cartc={cartc} setcart={setcart} />,
              loader: getProducts,
            },
            { path: "users", element: <AdminUsersList /> },
            {
              path: "addproduct",
              element: (
                <AddProduct productsL={productsL} setProductsl={setProductsl} />
              ),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
