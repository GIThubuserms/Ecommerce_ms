import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Hero from './components/Hero'
import ProductDetails from "./pages/ProductDetails"; // Ensure correct import
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { ProductProvider } from "./contexts/ProductContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { CartProvider } from "./contexts/CartContext";

function Layout() {
  return (
    <>
      <Header  />
      <Hero    />
      <Outlet  />
      <Sidebar />
      <Footer  />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="product/:id" element={<ProductDetails />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
