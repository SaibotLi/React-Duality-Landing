import { Link } from "react-router-dom";
import { navItems } from "../constants";

const handleInicioClick = () => {
  window.scrollTo(0, 0);
};

const HandleNavigation = () => {
  return (
    <>
      {navItems.map((item, index) => (
        <li key={index} className="py-4">
          {item.href.startsWith("/") ? (
            <Link
              to={item.href}
              onClick={item.label === "Inicio" ? handleInicioClick : null}
            >
              {item.label}
            </Link>
          ) : (
            <a href={item.href}>{item.label}</a>
          )}
        </li>
      ))}
    </>
  );
};

export default HandleNavigation;
