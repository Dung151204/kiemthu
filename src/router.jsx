import {createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import Layout from "./pages/users/theme/masterLayout/Layout";
import { ROUTER } from "./utils/router";
import ProfilePage from "./pages/users/profilePage/Profile";
import Footer from "./pages/users/theme/footer/Footer";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {path:ROUTER.USER.HOME, element:<HomePage/>},
            {path:ROUTER.USER.PROFILE, element:<ProfilePage/>},
        ]
    }
])