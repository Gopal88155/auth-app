import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/loading";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authSlice";

const Login = () => {
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message, {
        position: "top-center",
      });
    }
  }, [user, isError, message]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center text-2xl font-black">Login Here </h1>

      <div className="my-5 p-5 rounded-md border">
        <form className="my-3" onSubmit={handleSubmit}>
          <input
            value={email}
            name="email"
            onChange={handleChange}
            type="email"
            className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2  "
            placeholder="Enter Email"
          />
          <input
            value={password}
            name="password"
            onChange={handleChange}
            type="password"
            className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2 "
            placeholder="Enter Password"
          />

          <button className="my-2 w-full py-2 px-5 bg-green-500 text-white font-bold rounded-md ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
