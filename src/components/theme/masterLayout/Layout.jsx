import Footer from "../footer/Footer";
import Header from "../header/Header";

import {Breadcrumb} from "../../index.jsx"
import { Outlet } from "react-router-dom";
const Layout = ()=>{
    return (
        <div>
            <Header/>
            <Breadcrumb/>
            <Outlet/>     
            <Footer/>
        </div>
    )
}

export default Layout