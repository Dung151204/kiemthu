import {createBrowserRouter } from "react-router-dom";
import Layout from "./pages/users/theme/masterLayout/Layout";
import { ROUTER } from "./utils/router";
import HomePage from "./pages/users/homePage/Home.jsx";
import Product from "./pages/users/productPage/ProductPage";
import ShirtPage from "./pages/users/shirtPage/ShirtPage";
import TrousersPage from "./pages/users/trousersPage/TrousersPage";
import NotificationPage from "./pages/users/notificationPage/NotificationPage";

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