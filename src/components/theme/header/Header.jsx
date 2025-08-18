import './style.scss'
import { IoIosSearch } from "react-icons/io";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { GiCoinsPile, GiHamburgerMenu } from "react-icons/gi";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoShirtOutline } from "react-icons/io5";
import { PiPants } from "react-icons/pi";
import { FiBell } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const tabs = [
    { id: "1", namePage: "Trang chủ", icon: <AiOutlineHome />, href: "/" },
    { id: "2", namePage: "Sản phẩm", icon: <RiShoppingBag3Line />, href: "/product" },
    { id: "3", namePage: "Áo", icon: <IoShirtOutline />, href: "/productShirt" },
    { id: "4", namePage: "Quần", icon: <PiPants />, href: "/productTrousers" },
    { id: "5", namePage: "Thông báo", icon: <FiBell />, href: "/notification" },
];


const Header = ()=>{
    const location = useLocation();
    const [tab,setTab] = useState(location.pathname)   // dùng để set line dưới tab đc chọn
    const [widthWindow,setWidthWindow] = useState("")
    const firstLiRef = useRef(null);
    const refLine = useRef(null)
    const [shownav,setShownav] = useState(false)
  
    

    const handelToggeNavbar = ()=>{ // đóng/ mở navbar 
        setShownav(!shownav)
    }
    useEffect(() => { //set chiều width của line theo kích thước trình duyệt
        const handleResize = () => {
            setWidthWindow(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
     }, []);

    useEffect(()=>{  
       window.scrollTo(0, 0);
          let currentTab = tab;
        const activeTabElement = document.querySelector(
            `.list-nav a[href="${location.pathname}"]`
        );
        if (activeTabElement) {
            setTab(activeTabElement);
            currentTab = activeTabElement
        }
        const line = refLine.current
        line.style.left = tab === "" ? firstLiRef.current?.offsetLeft + "px" : currentTab?.offsetLeft + "px";
        line.style.width = tab === "" ? firstLiRef.current?.offsetWidth + "px" : currentTab?.offsetWidth + "px";
        
    },[location.pathname,widthWindow])

    
    return(
       <div className='header-page z-10 pt-1 pb-2 bg-white sticky top-0 left-0 w-full'>

           {/* nav MOBILE */}
           <div className={'containerNavbar  z-20 ' + `${ shownav ? "shownav" : ""}`} onClick={handelToggeNavbar}  >
               <div onClick={(e) => e.stopPropagation()} className='menuNavbar shadow-xl flex flex-col items-center  w-[40%] h-svh bg-[#fff]  z-30 absolute top-0'>
                    <img src="/logo.png" alt="" className='ml-2 pt-2 pb-2 mr-9 block w-[70%] md:w-[40%] md:inline'/>
                    <ul className='w-full'>
                        {tabs.map((itemTab)=>(
                            <li className='w-full font-medium hover:text-[#bf4040]' key={itemTab.id}>
                                <Link  to={itemTab.href} 
                                    className='w-full flex items-center p-3 pl-6' 
                                    // ref={itemTab.id === "1" ? firstLiRef : null } 
                                    onClick={()=>{
                                        // setSelectTab(itemTab.id);
                                        setShownav(!shownav)
                                    }} 
                                    style={location.pathname===itemTab.href ? {backgroundColor:"#eee", color:"#bf4040"}:{}}
                                >
                                        <span className='mr-2 relative top-[0.9px] text-[18px]'> {itemTab.icon}</span>
                                         {itemTab.namePage}  
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='text-[16px] font-medium absolute bottom-0 bg-[#bf4040] w-full text-center text-white p-3'>Đăng kí</div>
                    <IoClose className='absolute top-3 right-1 text-[24px] hover:cursor-pointer hover:bg-[#ccc]' onClick={handelToggeNavbar}/>
                </div>
           </div>
            <div className='heading flex md:flex-nowrap flex-wrap items-center justify-around w-full lg:max-w-[1240px] '>
                <Link to="/" className='logo-heading ml-2 mr-1 block w-[200px] md:w-[240px] md:inline'>
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
                            <Link to='/' className='block w-[88px]'>Đăng nhập |</Link>
                            <Link to='/' className='ml-2 block w-[86px]'>Đăng kí</Link>
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
            {/* nav PC,TABLE */}
            <div className='container-nav hidden translate-x-full sm:translate-x-0  sm:flex justify-center'>
                <ul className='list-nav flex flex-wrap justify-center w-full'>
                    {tabs.map((itemTab)=>(
                         <li className='min-w-[15%] font-medium' key={itemTab.id} >
                            <Link  to={itemTab.href} className='w-full' ref={itemTab.id === "1" ? firstLiRef : null } style={location.pathname === itemTab.href ? {backgroundColor:"#eee", color:"#bf4040"}:{}}>
                               <span className='mr-2 relative top-[0.9px] text-[18px]'> {itemTab.icon}</span>
                                {itemTab.namePage}  
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