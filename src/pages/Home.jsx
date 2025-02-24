import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]); 

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center text-2xl font-black">Home</h1>
    </div>
  );
};

export default Home;
