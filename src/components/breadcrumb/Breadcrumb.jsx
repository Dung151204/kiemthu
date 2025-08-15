import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean); // bỏ chuỗi rỗng

  // Nếu đang ở trang chủ (paths rỗng) thì không render
  if (paths.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-100 py-2 px-4 rounded-md text-sm">
      <ol className="flex items-center space-x-2">
        {/* Trang chủ */}
        <li>
          <Link
            to="/"
            className="text-gray-600 hover:text-red-500 hover:underline"
          >
            Trang chủ
          </Link>
        </li>

        {/* Các path còn lại */}
        {paths.map((path, index) => {
          const fullPath = "/" + paths.slice(0, index + 1).join("/");
          const name = decodeURIComponent(path)
            .replace(/-/g, " ") // thay dấu - bằng khoảng trắng
            .replace(/\b\w/g, (char) => char.toUpperCase()); // viết hoa chữ đầu

          return (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {index === paths.length - 1 ? (
                <span className="text-gray-800 font-medium">{name}</span>
              ) : (
                <Link
                  to={fullPath}
                  className="text-gray-600 hover:text-red-500 hover:underline"
                >
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
