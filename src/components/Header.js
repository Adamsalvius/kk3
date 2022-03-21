import React, {useState, useContext} from 'react'
import Menu from './svg/bars-solid.png'
import Cart from './svg/cart.svg'
import {Link} from 'react-router-dom'
import {DataContext} from './Data'

export default function Header() {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? -120 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} width="30rem" alt="menu"  />
            </div>

            <div className="logo">
                <h1><Link to="/products"> w|A|L</Link></h1>
            </div>
            <ul className="menuul"style={styleMenu}>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/">About</Link></li>
                <li onClick={toggleMenu}>
                    <p className="menu x" >X</p>
                </li>
            </ul>

            <div className="cartico">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>
            
      </header>
    )
}
