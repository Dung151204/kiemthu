import Footer from "../footer/Footer";
import Header from "../header/Header";
import LoginModel from "../../login/Login";
import Register from "../../login/Register";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Layout = ()=>{
    const [showLogin,setShowLogin] = useState(false)
    const [showRegister,setShowRegister] = useState(false)
    // const [isLoading,setIsLoading] = useState(false)
    return (
        <div className="relative">
            <Header setShowLogin = {setShowLogin} setShowRegister={setShowRegister}/>
            <Outlet/>     
            <Footer/>
            {showLogin && <LoginModel showLogin={showLogin} setShowLogin = {setShowLogin} setShowRegister = {setShowRegister}/>}
            {showRegister && <Register showRegister={showRegister} setShowRegister = {setShowRegister} setShowLogin = {setShowLogin}/>}
          
        </div>
    )
}

export default Layout