import React, { useState } from "react";
import axios from "axios";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      setToken(response.data.access_token);
    } catch (error) {
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="mb-3">
      <h4>Iniciar Sesión</h4>
      <input className="form-control mb-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo" />
      <input className="form-control mb-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button className="btn btn-primary" onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;