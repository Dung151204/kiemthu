import {createBrowserRouter } from "react-router-dom";
import Layout from "./components/theme/masterLayout/Layout";
import { ROUTER } from "./utils/router";
import HomePage from "./pages/public/homePage/Home.jsx";
import Product from "./pages/public/productPage/ProductPage";
import ShirtPage from "./pages/public/shirtPage/ShirtPage";
import TrousersPage from "./pages/public/trousersPage/TrousersPage";
import NotificationPage from "./pages/public/notificationPage/NotificationPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {path:ROUTER.USER.HOME, element:<HomePage/>},
            {path:ROUTER.USER.PRODUCT, element:<Product/>},
            {path:ROUTER.USER.SHIRT, element:<ShirtPage/>},
            {path:ROUTER.USER.TROUSERS, element:<TrousersPage/>},
            {path:ROUTER.USER.NOTIFICATION, element:<NotificationPage/>},
        ]
    }
])