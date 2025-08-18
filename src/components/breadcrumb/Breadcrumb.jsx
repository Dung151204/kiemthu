// file: Breadcrumbs.jsx
import React from "react";
import { NavLink, useLocation, matchPath } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { ROUTER } from "../../utils/router"; // import đúng đường dẫn file ROUTER

const breadcrumbNameMap = {
  [ROUTER.PUBLIC.PRODUCT]: "Sản phẩm",
  [ROUTER.PUBLIC.SHIRT]: "Áo",
  [ROUTER.PUBLIC.TROUSERS]: "Quần",
  [ROUTER.PUBLIC.NOTIFICATION]: "Thông báo",
  [ROUTER.PUBLIC.DETAIL_PRODUCT]: "Chi tiết sản phẩm",
};
const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Nếu đang ở trang Home thì không hiển thị Breadcrumbs
  if (location.pathname === ROUTER.PUBLIC.HOME) {
    return null;
  }

  return (
    <div className="mt-sm-3 ml-8">
      <NavLink to={ROUTER.PUBLIC.HOME} className="font-medium text-decoration-none text-dark">
        Home
      </NavLink>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        const matchedRoute = Object.keys(breadcrumbNameMap).find((route) =>
          matchPath({ path: route, end: true }, to)
        );

        if (!matchedRoute) return null;

        return (
          <span key={to}>
            {" / "}
            <NavLink to={to} className="text-decoration-none text-dark">
              {breadcrumbNameMap[matchedRoute]}
            </NavLink>
          </span>
        );
      })}
    </div>
  );
};


export default Breadcrumbs;
