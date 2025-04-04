import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const userInput = document.getElementById("user");
  const passInput = document.getElementById("pass");

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin" && pass === "admin") {
      setError("");
      navigate("/logged/inicio");
    } else {
      setError("Error al ingresar usuario y/o contraseña.");
      setUser("");
      setPass("");
      userInput.value = "";
      passInput.value = "";
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="loginTitle">Bodega v0.1</div>
        <div className="error">{error}</div>
        <form onSubmit={handleSubmit}>
          <div className="user">
            <div className="label">
              <label htmlFor="user">Usuario: </label>
            </div>
            <div className="userInput">
              <input
                type="text"
                id="user"
                onChange={(e) => {
                  setUser(e.target.value);
                  setError("");
                }}
              ></input>
            </div>
          </div>
          <div className="pass">
            <div className="label">
              <label htmlFor="pass">Contraseña: </label>
            </div>
            <div className="passInput">
              <input
                id="pass"
                type="password"
                onChange={(e) => {
                  setPass(e.target.value);
                  setError("");
                }}
              ></input>
            </div>
          </div>
          <div className="btnSubmit">
            <button type="submit">Ingresar</button>
          </div>
        </form>
      </div>
    </>
  );
};
