import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = ({ token }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/productos").then((res) => {
      setProductos(res.data);
    });
  }, []);

  return (
    <div>
      <h4>Productos</h4>
      <div className="row">
        {productos.map((p) => (
          <div className="col-md-4 mb-3" key={p.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                <p className="card-text">${p.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;