import Footer from "../footer/Footer";
import Header from "../header/Header";
import LoginModel from "../../login/Login";
import Register from "../../login/Register";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { SelectUser } from "../../../redux/selector";
import { fetchCart } from "../../../redux/userCartSlice";
const Layout = ()=>{
    const [showLogin,setShowLogin] = useState(false)
    const [showRegister,setShowRegister] = useState(false)
    const dispatch = useDispatch()
    const dataUser = useSelector(SelectUser)
    useEffect(()=>{
        if(dataUser.role){
            dispatch(fetchCart(dataUser.accessToken))
        }
    },[])

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