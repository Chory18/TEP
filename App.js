import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [token, setToken] = useState("");

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Ecommerce Frontend</h1>
      {!token ? (
        <>
          <Login setToken={setToken} />
          <Register />
        </>
      ) : (
        <ProductList token={token} />
      )}
    </div>
  );
}

export default App;