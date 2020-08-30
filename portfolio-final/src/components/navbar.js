import React, { Component } from "react";
import "./homestyle.css";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <center>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="/project">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
            <li>
              <a href="mycv.pdf" target="_blank">
                My Resume
              </a>
            </li>
          </ul>
        </center>
        <hr />
      </div>
    );
  }
}

export default Navbar;
