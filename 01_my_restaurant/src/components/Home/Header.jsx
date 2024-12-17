
import { Link,NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="shadow-md sticky z-50 top-0">
      <nav className="">
        <div className="flex justify-around px-3 py-3 bg-orange-200 items-center">
          <div className="bg-orange-500 font-bold py-1 px-2 rounded-xl">
            <Link className="" to="/">
              Logo
            </Link>
          </div>
          <div className="flex justify-around gap-x-10  items-center">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-orange-700 scale-110" : "text-slate-700"}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-orange-700 scale-110" : "text-slate-700"}`
              }
              to="/menu"
            >
              Menu
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-orange-700 scale-110" : "text-slate-700"}`
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-orange-700 scale-110" : "text-slate-700"}`
              }
              to="/contact-us"
            >
              Contact Us
            </NavLink>
          </div>
          <div className="flex justify-around gap-x-10 items-center">
            <NavLink className="bg-blue-300 py-1 px-2 rounded-full" to="/cart">
              Cart
            </NavLink>
            <Link className="" to="/login">
              <button className="py-1 px-3 bg-orange-400 rounded-md">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
