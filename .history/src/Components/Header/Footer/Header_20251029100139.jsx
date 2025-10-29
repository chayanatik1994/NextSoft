import { Link, useLocation } from "react-router";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 my-2 px-4">
      <ol className="flex space-x-2">
        <li>
          <Link to="/" className="text-purple-600 hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;
          return (
            <li key={routeTo} className="flex items-center">
              <span className="mx-1">›</span>
              {isLast ? (
                <span className="text-gray-800 font-semibold capitalize">{value}</span>
              ) : (
                <Link to={routeTo} className="text-purple-600 hover:underline capitalize">
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
