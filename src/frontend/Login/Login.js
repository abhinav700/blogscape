import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css"
const Login = (props) => {
    
    const handlePasswordClick = () => {
      setShowPassword(!showPassword);
    };
    const [credientials, setCerdientials] = useState({
        password: "",
      email: "",
    });
    let history = useHistory();
    
    const onChange = (e) => {
      setCerdientials({ ...credientials, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
      const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
          email: credientials.email,
          password: credientials.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        history.push("/home");
        props.showAlert("Login Successful", "success");
      } else {
        props.showAlert("invalid credientials", "danger");
    }
    };
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className="dummy">
                <h1>User Login</h1>
             <div className="login-container">
                  <form onSubmit={handleSubmit} className="login-form" autoComplete="off">
                      <div className="input-item">
                        Email:<br/>
                        <input onChange={onChange}  type="text" name="email" placeholder="xyz@blogScape.com" />

                      </div>
                      <div className="input-item">
                        Password:<br/>
                    
                        <input onChange={onChange}  
                        name="password"
                         
                        type={`${showPassword ? "text" : "password"}`}
                        minLength={5} />
                        &nbsp;&nbsp;
                   
                        
                      </div>
                      <div className="icons d-flex">
                      <i
              onClick={handlePasswordClick}
              className={`fas fa-eye-slash hidePassword my-3 mx-2 ${
                showPassword ? "" : "d-none"
              }`}
            ></i>
            <i
              onClick={handlePasswordClick}
              className={`fas fa-eye showPassword my-3 mx-2 ${
                !showPassword ? "" : "d-none"
              }`}
            ></i>
                      </div>
                      <div className="">

                      <button type="submit" className="btn form-submit" >Submit</button>
                      </div>
                  </form>
             </div>
            </div>
        </>
    )
}

export default Login
