import Footer from "../footer/Footer";
import Header from "../header/Header";
import LoginModel from "../../login/LoginModel";

import {Breadcrumb} from "../../index.jsx"
import { Outlet } from "react-router-dom";
import { useState } from "react";
const Layout = ()=>{
    const [showLogin,setShowLogin] = useState(false)
    return (
        <div className="">
            <Header setShowLogin = {setShowLogin}/>
            <Breadcrumb/>
            <Outlet/>     
            <Footer/>
            {showLogin && <LoginModel showLogin={showLogin} setShowLogin = {setShowLogin}/>}
        </div>
    )
}

export default Layout