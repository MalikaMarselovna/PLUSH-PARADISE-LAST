import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'

import "./Navbar.css";
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Products from '../../pages/Products/Products';
import Contacts from '../../pages/Contacts/Contacts';
// import CartIcon from '../../components/CartIcon';
// import LoginIcon from '../../components/LoginIcon';
// import FavoritesIcon from '../../components/FavoritesIcon';
// import SearchIcon from '../../components/SearchIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='App-menu'>
      <div>
        <Router>
          <nav className='menu flex' >
            <ul className='menu_in flex'>
              <li>
                <Link to="./Home" className='header_link '>Home</Link>
              </li>
              <li>
                <Link to="./About" className='header_link '>About</Link>
              </li>
              <li>
                <Link to="./Contacts" className='header_link '>Contact</Link>
              </li>
              <li>
                <Link to="./Products" className='header_link '>Products</Link>
              </li>
              {/* <li>
                  <CartIcon />
                </li>
                <li>
                  <LoginIcon />
                </li>
                <li>
                  <FavoritesIcon />
                </li>
                <li>
                  <SearchIcon />
                </li> */}
            </ul>
          </nav>

          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={< About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="products" element={<Products />} />
          </Routes>

        </Router>
      </div>

    </header>
  );
};

export default Navbar;