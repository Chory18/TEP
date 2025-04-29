import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/auth/register", {
        email,
        nombre,
        password,
      });
      alert("Registrado correctamente");
    } catch (error) {
      alert("Error al registrar");
    }
  };

  return (
    <div className="mb-3">
      <h4>Registro</h4>
      <input className="form-control mb-2" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
      <input className="form-control mb-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo" />
      <input className="form-control mb-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button className="btn btn-secondary" onClick={handleRegister}>Registrar</button>
    </div>
  );
};

export default Register;