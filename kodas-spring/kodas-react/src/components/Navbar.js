import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/" className="navbar-brand">
            <i class="fas fa-laptop">SalysIrSventes</i>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to="/admin" className="nav-link">
                  Admin<span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <ButtonContainer>Search</ButtonContainer>

              {/* className="btn btn-outline-success my-2 my-sm-0"
              type="submit" */}
            </form>
            <NavLink to="/cart" className="ml-auto">
              <ButtonContainer>
                <span className="mr-2">
                  <i className="fas fa-cart-plus">my cart</i>
                </span>
              </ButtonContainer>
            </NavLink>
          </div>
        </NavWrapper>
      </div>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainRed) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .nav-link:hover {
    color: var(--buttonBlue) !important;
  }
  .navbar-brand {
    color: gold;
  }
  .navbar-brand:hover {
    color: var(--buttonBlue) !important;
  }
`;
