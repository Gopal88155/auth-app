import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <nav className="py-3 px-10 bg-emerald-700 flex items-center justify-between">
      <Link to={"/"} className="text-xl font-bold text-white ">
        Auth-App
      </Link>
      <span className="flex space-x-6">
        {!user ? (
          <>
            <Link
              to={"/login"}
              className="py-1 px-3 bg-yellow-600 text-white font-bold text-sm rounded-sm"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="py-1 px-3 bg-yellow-600 text-white font-bold text-sm rounded-sm"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogOut}
            className="py-1 px-3 bg-red-600 text-white font-bold text-sm rounded-sm"
          >
            Logout
          </button>
        )}
      </span>
    </nav>
  );
};

export default Navbar;
