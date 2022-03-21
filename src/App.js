import React from 'react';
import Header from './components/Header'
import Products from './components/Products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Data} from './components/Data'
import Details from './components/Details'
import Cart from './components/Cart'



function App() {
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
            </Routes>
          </section>
        </Router>
      </div>
    </Data>
  );
}

export default App;
