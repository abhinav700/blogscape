import React from "react";
import { useState } from "react";
import {useHistory} from "react-router-dom"
import "./Register.css";
const Register = (props) => {
  const [credientials, setCerdientials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const history = useHistory();
  const onChange = (e) => {
    setCerdientials({ ...credientials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, password } = credientials;
    if(email.toString().includes("@blogscape.com"))
    {

      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({ name, email, password }),
      });
      const json = await response.json();
      console.log(json);
      
      if (json.success) {
      if (credientials.password !== credientials.cpassword) {
        props.showAlert("Passwords don't match", "danger");
      } else {
        localStorage.setItem("token", json.authToken);
        history.push("/home");
        props.showAlert("Account Created successfuly", "success");
      }
    } else {
      props.showAlert("Invalid Credientials", "danger");
    }
  }
  else{
    props.showAlert("Invalid email","danger");
  }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };
  const handleCPasswordClick = () => {
    setShowCPassword(!showCPassword);
  };

  return (
    <>
      <div className="root-register">
        <h1>Create an account to use Blogscape</h1>

        <div className="mx-5 my-5">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input    onChange={onChange} 
                required
                name="name"
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input onChange={onChange} 
                required
                name="email"
                placeholder="xyz@blogscape.com"
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="d-flex">
                <input    onChange={onChange} 
                  required
                  name="password"
           
                  type={`${showPassword ? "text" : "password"}`}
                  minLength={5}
                  className="form-control Password"
                  id="password"
                />
                <i
                  onClick={handlePasswordClick}
                  className={`fas fa-eye-slash hidePassword my-3 mx-4 ${
                    showPassword ? "" : "d-none"
                  }`}
                ></i>
                <i
                  onClick={handlePasswordClick}
                  className={`fas fa-eye showPassword my-3 mx-4 ${
                    !showPassword ? "" : "d-none"
                  }`}
                ></i>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">
                Confirm Password
              </label>
              <div className="d-flex">
                <input    onChange={onChange} 
                  required
                  name="cpassword"
                   
                  type={`${showCPassword ? "text" : "password"}`}
                  minLength={5}
                  className="form-control cPassword "
                  id="cpassword"
                />
                <i
                  onClick={handleCPasswordClick}
                  className={`fas fa-eye-slash hideCPassword my-3 mx-4 ${
                    showCPassword ? "" : "d-none"
                  }`}
                ></i>
                <i
                  onClick={handleCPasswordClick}
                  className={`fas fa-eye showCPassword my-3 mx-4 ${
                    !showCPassword ? "" : "d-none"
                  }`}
                ></i>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
