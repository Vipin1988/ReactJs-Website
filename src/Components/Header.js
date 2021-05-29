import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function Header(props) {
    return (
    <>
 <section id="topbar" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
      <Link className="nav-link active" to="mailto:vipinkumar353@gmail.com"><i class="bi bi-envelope d-flex align-items-center"></i></Link>
        <i class="bi bi-phone d-flex align-items-center ms-4"><span>{props.mobile}</span></i>
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </section>
  <header id="header" class="d-flex align-items-center">
  <div class="container d-flex align-items-center justify-content-between">
  <h1 class="logo"><Link className="nav-link scrollto" to="/">{props.title}</Link></h1>
  <nav id="navbar" class="navbar">
        <ul>
          <Link className="nav-link active" to="/">Home</Link>
          <Link className="nav-link scrollto" to="/about">About</Link>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
<li><Link className="nav-link scrollto" to="/apicall">Api Data</Link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
  </div>
  </header>
  </>
    )
}

Header.propTypes = {
    title: "Your Title Here",
    mobile: "Your Mobile Here",
    email: "Your Email Here"
}

export default Header

