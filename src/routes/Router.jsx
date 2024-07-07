import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import ProductView from "../pages/ProductView";
import ProductDetailview from "../pages/ProductDetailview";
import ViewCart from "../pages/ViewCart";



export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {path:"/",element:<Home/>},
            {path:"/view/products/:category",element:<ProductView/>},
            {path:"/products/:id",element:<ProductDetailview/>},
            {path:"/cart",element:<ViewCart/>},
        ]
    }
])