import React, { useEffect, useState } from "react";

function ProductList(){

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => setProducts(data));

  }, []);

  return (

    <div>

      <h2>Products</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>

          {products.map(p => (

            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>${p.price}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default ProductList;