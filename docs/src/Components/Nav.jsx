import React from "react";
import "../Style/Nav.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

// REACT ICONS
import { TfiSearch } from "react-icons/tfi";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";

// IMÁGENES
import logo from "../Img/logo200.png";

export default function Nav() {
  const { user, isAuthenticated,loginWithRedirect,logout } = useAuth0();
  return (
    <div className="header">

      <div className="header__mid">
        <div className="container__logo"><img src={logo} alt="Logo" /></div>
        <div className="container__serch">
          <input type="text" id="search" placeholder="SEARCH" />
          <button id="searchBtn"><TfiSearch /></button>
        </div>
        {
          isAuthenticated ?
            <div className="container__login">
              <div className="icon"><RiLogoutBoxLine /></div>
              <div className="btn">
                <button id="logoutBtn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  LOGOUT
                </button>
              </div>
            </div>
          :
            <div className="container__login">
              <div className="icon"><RiLoginBoxLine /></div>
              <div className="btn"><button id="loginBtn" onClick={() => loginWithRedirect()}>LOGIN</button></div>
            </div>
        }
      </div>
      <div className="header__bottom">
        <div className="user__profile">
          {
            isAuthenticated ?
              <div className="authenticated">
                <div className="icon">
                  <img src={user.picture} alt={user.name} />
                </div>
                <div className="info">
                  <h2>{user.name}</h2>
                </div>
              </div>
            :
              <div className="authenticated">
                <div className="userNone">
                  <FaRegUserCircle />
                </div>
                <div className="info">
                  <h2>Please Login</h2>
                </div>
              </div>
          }
        </div>
        <div className="nav__container">
          <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/shop" className="link">Shop</Link></li>
            <li><Link to="/collection" className="link">Collection</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
            <li><Link to="/cartShop" className="link">Cart Shop <IoIosCart /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}