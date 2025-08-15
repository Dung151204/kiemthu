import './style.scss'
import { IoIosSearch } from "react-icons/io";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoShirtOutline } from "react-icons/io5";
import { PiPants } from "react-icons/pi";
import { FiBell } from "react-icons/fi";

const pages = [
    {
        id : "1",
        namePage : "Trang chủ",
        icon : <AiOutlineHome/>,
        href : "/"
    },
    {
        id : "2",
        namePage : "Sản phẩm",
        icon :<RiShoppingBag3Line/>,
        href : "/"
    },
    {
        id : "3",
        namePage : "Áo",
        icon :<IoShirtOutline/>,
        href : "/"
    },
    {
        id : "4",
        namePage : "Quần",
        icon :<PiPants/>,
        href : "/"
    },
    {
        id : "5",
        namePage : "Thông báo",
        icon :<FiBell/>,
        href : "/"
    },
   
]


const Header = ()=>{
    const [selectPage,setSelectPage] = useState("1")
    const [tab,setTab] = useState("")
    const [widthWindow,setWidthWindow] = useState("")
    const firstLiRef = useRef(null);
    const refLine = useRef("")


    const handelToggeNavbar = ()=>{
        
    }

    useEffect(() => { 
        const handleResize = () => {
            setWidthWindow(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
     }, []);

    useEffect(()=>{
        const line = refLine.current
        line.style.left = tab === "" ? firstLiRef.current.offsetLeft + "px" : tab.offsetLeft + "px";
        line.style.width = tab === "" ? firstLiRef.current.offsetWidth + "px" : tab.offsetWidth + "px";
    },[tab,widthWindow])

    const handelSelectPage = (id,e)=>{
        setSelectPage(id)  
        setTab(e.target)
    }

    return(
       <div className='header-page z-10 pt-1 pb-2 bg-white sticky top-0 left-0 w-full'>
            <div className='heading flex md:flex-nowrap flex-wrap items-center justify-around w-full lg:max-w-[1240px] '>
                <Link to="" className='logo-heading ml-2 mr-1 block w-[200px] md:w-[240px] md:inline'>
                    <img src="/logo.png" alt="" className='w-[240px]'/>
                </Link>
                <div className='flex flex-1 justify-around items-center'>
                    <div className='search-heading w-[70%] md:w-[50%] lg:w-[40%] ml-2'>
                        <input className='input-search' type="text" placeholder='Bạn cần tìm gì ?' />
                        <div className='icon-search flex justify-center items-center'>
                            <IoIosSearch className='w-full' />
                        </div>
                    </div>
                    <div className='contact-heading items-center hidden lg:flex'>
                        <FaPhone />
                        <span className='ml-2'>Hotline : 0987654321</span>
                    </div>
                    
                    <div className='cart-heading flex hover:cursor-pointer ml-3 md:ml-0'>
                        <GrCart className='icon-cart size-7'/>
                        <p>2</p>
                    </div>
                    <div className='info-login-heading flex items-center'>
                    <div className='hidden sm:flex '>
                            <Link to='' className='block w-[88px]'>Đăng nhập |</Link>
                            <Link to='' className='ml-2 block w-[86px]'>Đăng kí</Link>
                    </div>
                        {/* <div className='profile-heading flex items-center hidden md:flex'>
                            <img src='/avt.jpg'  className='avt-profile size-8  '/>
                            <BiSolidDownArrow  className='w-3 ml-1' />
                        </div> */}
                    </div>
                    <div className='block sm:hidden mr-4 hover:cursor-pointer' onClick={handelToggeNavbar}>
                        < GiHamburgerMenu className='size-6'/>
                    </div>
                </div>
            </div>
            <div className='container-nav hidden translate-x-full sm:translate-x-0  sm:flex justify-center'>
                <ul className='list-nav flex flex-wrap justify-center w-full'>
                    {pages.map((page)=>(
                         <li className='min-w-[15%] font-medium' key={page.id} >
                            <Link  to="#" className='w-full' ref={page.id === "1" ? firstLiRef : null } onClick={(e)=>handelSelectPage(page.id,e)} style={selectPage===page.id ? {backgroundColor:"#e1e1e1", color:"#bf3030"}:{}}>
                               <span className='mr-2 relative top-[0.9px] text-[18px]'> {page.icon}</span>
                                {page.namePage}  
                            </Link>
                        </li>
                    ))}
                <div ref={refLine} className='line'></div>
                </ul>
            </div>
       </div>
    )
}

export default Header