import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("password Mismatch!!!", { position: "top-center" });
    } else {
      dispatch(registerUser(formData));
    }
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
    return (
      <h1 className="text-center text-gray-400 my-10 font-black text-3xl">
        Loading....
      </h1>
    );
  }

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center text-2xl font-black">Register Here</h1>

      <div className="my-5 p-5 rounded-md border">
        <form className="my-3" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2  "
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2  "
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="password"
            className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2 "
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <input
            type="password"
            className="border w-full p-2 rounded-md text-sm focus:outline-green-500 my-2 "
            placeholder="Comfirn Password"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
          <button className="my-2 w-full py-2 px-5 bg-green-500 text-white font-bold rounded-md ">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
