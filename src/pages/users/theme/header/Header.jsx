import './style.scss'
import { IoIosSearch } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidDownArrow } from "react-icons/bi";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const pages = [
    {
        id : "1",
        namePage : "Trang chủ",
        href : "/"
    },
    {
        id : "2",
        namePage : "Sản phẩm",
        href : "/"
    },
    {
        id : "3",
        namePage : "Áo",
        href : "/"
    },
    {
        id : "4",
        namePage : "Quần",
        href : "/"
    },
    {
        id : "5",
        namePage : "Thông báo",
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
       <div className='header-page pt-2 pb-2 bg-white sticky top-0 left-0 w-full'>
            <div className='heading pb-[20px]  flex md:flex-nowrap flex-wrap items-center justify-around w-full lg:max-w-[1240px] '>
                <Link to="" className='logo-heading ml-2 mr-2 pt-1 pb-2 block w-[240px] md:inline'>
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
                            <Link className='w-full' ref={page.id === "1" ? firstLiRef : null } onClick={(e)=>handelSelectPage(page.id,e)} style={selectPage===page.id ? {backgroundColor:"#e9e9e9", color:"#bf3030"}:{}} to="#">
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