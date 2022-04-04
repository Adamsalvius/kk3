import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
/* import {DataContext} from './Data'; */
import { useNavigate, Link } from "react-router-dom";
import authState from "../stores/auth/atom";
import axios from "axios";

export default function Login() {
  const API_URL = "https://k4backend.osuka.dev/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usenavi = useNavigate();
  const setAuth = useSetRecoilState(authState);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}auth/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        axios
          .get(`https://k4backend.osuka.dev/users/${response.data.userId}`)
          .then((userData) => {
            setAuth({
              user: userData.data,
              token: response.data.token,
            });
            usenavi("/profile");
          });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
          <p>Username</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
          
        />

        
          <p>Password</p>
 
        <input
          type="password"
          placeholder="Enter Password"
          
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
