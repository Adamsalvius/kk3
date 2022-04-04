import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import productsState from "../stores/products/atom";
import usersState from "../stores/users/atom";

function Adminexl() {
  const products = useRecoilValue(productsState);
  const users = useRecoilValue(usersState);
  const [userSearch, setUserSearch] = useState("");

  const [productSearch, setProductSearch] = useState("");

  return (
    <div>
      <div>
        <div className="stil">
          <h3>Products</h3>

          <input
            required
            value={productSearch}
            onChange={(e) => setProductSearch(e.target.value)}
          />
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(productSearch.toLowerCase())
            )
            .map((product) => (
              <p key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.price}$</p>
                --
              </p>
            ))}
        </div>
        <div className="pil">
          <h2>Users</h2>

          <input
            required
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          />
          {users
            .filter((user) =>
              user.username.toLowerCase().includes(userSearch.toLowerCase())
            )
            .map((user) => (
              <h3 key={user.id}>
                <h4>
                  {user.username} phone:{user.phone} password:{user.password}
                </h4>
              </h3>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Adminexl;
