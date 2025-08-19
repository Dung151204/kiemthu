import {createBrowserRouter } from "react-router-dom";
import Layout from "./components/theme/masterLayout/Layout";
import { ROUTER } from "./utils/router";
import HomePage from "./pages/public/homePage/Home.jsx";
import Product from "./pages/public/productPage/ProductPage";
import ShirtPage from "./pages/public/shirtPage/ShirtPage";
import TrousersPage from "./pages/public/trousersPage/TrousersPage";
import NotificationPage from "./pages/public/notificationPage/NotificationPage";
import DetailNotificationPage from "./pages/public/detailPage/detailNotification/detailNotificationPage";
import DetailProductPage from "./pages/public/detailPage/detailProduct/DetailProductPage";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {path:ROUTER.PUBLIC.HOME, element:<HomePage/>},
            {path:ROUTER.PUBLIC.PRODUCT, element:<Product/>},
            {path:ROUTER.PUBLIC.SHIRT, element:<ShirtPage/>},
            {path:ROUTER.PUBLIC.TROUSERS, element:<TrousersPage/>},
            {path:ROUTER.PUBLIC.NOTIFICATION, element:<NotificationPage/>},
            {path:ROUTER.PUBLIC.DETAIL_PRODUCT, element:<DetailProductPage/>},
            {path:ROUTER.PUBLIC.DETAIL_NOTIFICATION, element:<DetailNotificationPage/>},
        ]
    }
])