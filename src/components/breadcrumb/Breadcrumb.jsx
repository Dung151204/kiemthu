// file: Breadcrumbs.jsx
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


const Breadcrumbs = (prop) => {
  return(
    <div className="h-[34px] bg-[#eee]">
        <div className="w-[90%] h-[34px] m-auto flex items-center">
            <Link to={"/"} className="font-medium  text-blue-600">
               Home
            </Link>
            {
              prop?.parentPages?.map((page,index)=>(
                <div key={index} className="flex items-center">
                  <IoIosArrowForward className="text-[14px] relative top-[1px] ml-1 mr-1"/>
                  <Link className="font-medium " to={page.path}>{page.nameParent}</Link>
                </div>
              ))
            }
            <IoIosArrowForward className="text-[14px] relative top-[1px] ml-1 mr-1"/>
            <Link className="font-medium ">
              {prop.nameCurrent}
            </Link>
        </div>
    </div>
  )
};


export default Breadcrumbs;
