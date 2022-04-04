import React, { useState, useEffect } from "react";

import { useRecoilState } from "recoil";

import axios from "axios";
import authState from "../stores/auth/atom";

function Dashboard() {
  const [auth, setAuth] = useRecoilState(authState);
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      zipcode: "",
      number: 0,
    },
    phone: "",
  });

  useEffect(() => {
    setUser({
      ...auth.user,
      name: { ...auth.user.name },
      address: { ...auth.user.address },
    });
  }, [auth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch("https://k4backend.osuka.dev/users/" + auth.user.id, user)
      .then((response) => {
        setAuth({ ...auth, user: response.data });
      });
  };
  return (
    <>
      <div
        onSubmit={handleSubmit}
        /* component="form" */
      >
        <p
          required
          label="First name"
          value={user.name.firstname}
          onChange={(e) =>
            setUser({
              ...user,
              name: {
                ...user.name,
                firstname: e.target.value,
              },
            })
          }
        />

        <p
          required
          label="Last name"
          value={user.name.lastname}
          onChange={(e) =>
            setUser({
              ...user,
              name: {
                ...user.name,
                lastname: e.target.value,
              },
            })
          }
        />

        <p
          required
          label="Email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <p
          required
          label="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <p
          required
          label="Password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
    </>
  );
}

export default Dashboard;
