import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./loginpage.css";

function Loginpage() {
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      // DOM is updated
      containerRef.current.className = isActive
        ? "form-container left-right"
        : "form-container";
    }
  }, [isActive]);

  const inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.addEventListener("focus", function () {
      const parentElement = input.parentElement.parentElement;
      parentElement.classList.add("box-animation");
    });
    input.addEventListener("blur", function () {
      const parentElement = input.parentElement.parentElement;
      parentElement.classList.remove("box-animation");
    });
  });

  const { loginUser } = useContext(AuthContext);
  const { registerUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    email.length > 0 && loginUser(email, password);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    registerUser(email, username, password, password2);
  };

  return (
    <div className="login-container">
      <section>
        <div className="main-form-container">
          <div id="form_section" ref={containerRef} className="form-container">
            <form onSubmit={handleLogin}>
              <div className="login-form form-wraper ">
                <div>
                  <div className="form-title">
                    <h2>Login</h2>
                  </div>
                  <div className="input-group">
                    <div className="box">
                      <span>
                        <input
                          name="email"
                          placeholder="Email"
                          className="myInput"
                          type="email"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="box">
                      <span>
                        <input
                          name="password"
                          placeholder="Password"
                          className="myInput"
                          type="password"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="action-button">
                    <button type="submit">Login</button>
                  </div>
                </div>
              </div>
            </form>
            <form onSubmit={handleSignup}>
              <div className="signUp-form form-wraper">
                <div>
                  <div className="form-title">
                    <h2>Sign Up</h2>
                  </div>
                  <div className="input-group">
                    <div className="box">
                      <span>
                        <input
                          name="username"
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Full Name"
                          className="myInput"
                          type="text"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="box">
                      <span>
                        <input
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address"
                          className="myInput"
                          type="email"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="box">
                      <span>
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          name="password"
                          placeholder="Password"
                          className="myInput"
                          type="password"
                        />
                      </span>
                    </div>
                  </div>
                  <div style={{ marginBottom: "0px" }} className="input-group">
                    <div className="box">
                      <span>
                        <input
                          onChange={(e) => setPassword2(e.target.value)}
                          name="confirmpassword"
                          placeholder="Confirm Password"
                          className="myInput"
                          type="password"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="action-button">
                    <button type="submit">Sign Up</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div id="multiple-btn" className="bg-btn-container">
            <div className="action-button">
              <button type="button" onClick={() => setIsActive(!isActive)}>
                Login
              </button>
            </div>
            <div className="action-button">
              <button type="button" onClick={() => setIsActive(!isActive)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loginpage;
