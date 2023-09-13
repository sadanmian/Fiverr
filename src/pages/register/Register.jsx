import React, { useState } from "react";
import "./register.scss";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSeller = (event) => {
    setUser((prev) => {
      return {
        ...prev,
        isSeller: event.target.checked,
      };
    });
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input name="username" type="text" onChange={handleChange} />

          <label htmlFor="">Email</label>
          <input name="email" type="email" onChange={handleChange} />

          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />

          <label htmlFor="">Profile Picture</label>
          <input
            type="file"
            onChange={(event) => setFile(event.target.files[0])}
          />

          <label htmlFor="">Country</label>
          <input name="country" type="text" onChange={handleChange} />

          <button type="submit">{loading ? "Loading..." : "Register"}</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>

          <label htmlFor="">Phone Number</label>
          <input name="phone" type="text" onChange={handleChange} />

          <label htmlFor="">Description</label>
          <textarea
            onChange={handleChange}
            placeholder="A short description of yourself"
            name="desc"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Register;
