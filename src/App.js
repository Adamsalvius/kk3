import React from 'react';
import Header from './components/Header'
import Products from './components/Products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Data} from './components/Data'
import Details from './components/Details'
import Cart from './components/Cart'
import Login from './components/Login'
import { useRecoilValue } from "recoil";
import authState from "./stores/auth/atom";
import Adminexl from './components/Adminexl';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';


function App() {
  const auth = useRecoilValue(authState);
  return (
    <Data>
      <div className="App">
        <Router>
          <Header />

          <section>
            <Routes>
              <Route path="/"></Route>
              <Route path="products" element={ <Products /> } />
              <Route path="products/:id" element={ <Details /> } />
              <Route path="cart" element={ <Cart /> } />
              <Route path="login" element={<Login />}/>
              {auth.token ? (
							<>
								<Route path="/profile" element={<Profile />} />
							{	<Route
									path="/dashboard"
									element={<Dashboard />}
								/>}
							</>
						) : (
							<>
								<Route path="/login" element={<Login />} />
								<Route
									path="/register"
									element={<Register />}
								/>
							</>
						)}
						{auth.user.role === "admin" && (
							<Route
								path="/Admininfo"
								element={<Adminexl />}
							/>
						)}
            </Routes>
          </section>
        </Router>
      </div>
    </Data>
  );
}

export default App;
