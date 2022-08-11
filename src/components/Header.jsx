import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
        <div className="Header-up">
          <h1 className="Header-title"><Link to="/">Tiramuto Store</Link></h1>
          <div className="Header-checkout">
            <Link to="/checkout">
              <i className="fas fa-shopping-basket" />
            </Link>
            {cart.length > 0 && <div className="Header-alert"> {cart.length} </div>}
          </div>
        </div>
        <div className="Header-menu">
           <h3><Link to="/">Home</Link></h3>
           <h3><Link to="/aboutme">About Me</Link></h3>
           <h3><Link to="/store">Store</Link></h3>
           <h3><Link to="/blog">Blog</Link></h3>
           <h3><Link to="/apishow">API Show Run</Link></h3>
        </div>
    </div>
  );
};

export default Header;