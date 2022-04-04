import React, {useState, useContext} from 'react'
import Menu from './svg/bars-solid.png'
import Cart from './svg/cart.svg'
import {Link, useNavigate} from 'react-router-dom'
import {DataContext} from './Data'
import { useResetRecoilState, useRecoilValue } from 'recoil'
import authState from '../stores/auth/atom'




export default function Header() {
    const resetAuth = useResetRecoilState(authState);
    const [menu, setMenu] = useState(false)
    const auth = useRecoilValue(authState);
    const value = useContext(DataContext)
    const [cart] = value.cart
    const navigate = useNavigate();
    const handleSignInOut = () => {
		if (auth.token) resetAuth();
		navigate("/login");
	};

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
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><div className='logout' onClick={() => {
									handleSignInOut();
								}}>LOGOUT</div></li>
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
