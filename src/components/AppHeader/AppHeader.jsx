import { NavLink } from "react-router-dom";

import route from "../../routes/route.json";
import { Badge, Button, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { UserDataContext } from "../../contexts/UserDataContexts";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const AppHeader = () => {
  const cartActiveClasses = ({ isActive }) =>
    isActive ? "bi-cart-fill" : "bi-cart3";

  const iconChangeHandler = () =>
    isDark ? "bi-brightness-high-fill" : "bi-moon";

  const { logoutHandler, isUser } = useContext(UserDataContext);

  const { lightToDarkHandler, darkToLightHandler, isDark } =
    useContext(ThemeContext);

  const cartItems = useSelector((state) => state.addsub.items.length);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{ backgroundColor: "#002244" }}
    >
      <Navbar.Brand className={`fs-4 `}>
        <NavLink
          to={route.HOME}
          className="text-decoration-none text-white ms-4"
        >
          Maharaja Thali
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ backgroundColor: "#3F72AF" }}
      />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink
            to={route.CONSTACT_US}
            className="nav-link text-white"
            activeclassname="active"
          >
            Contact Us
          </NavLink>
          <NavLink
            to={route.SUPPORT}
            className="nav-link text-white"
            activeclassname="active"
          >
            Support
          </NavLink>
        </Nav>
        <Nav className={`fs-4 m-2 `}>
          <Button
            onClick={isDark ? darkToLightHandler : lightToDarkHandler}
            style={{ backgroundColor: "#2E82D6", marginRight: "15px" }}
          >
            <i className={`bi ${iconChangeHandler()} fs-5`}></i>
          </Button>

          {!isUser && (
            <>
              <NavLink
                to={route.LOGIN}
                className="nav-link text-white"
                activeclassname="active"
              >
                Login
              </NavLink>
              <NavLink
                to={route.SIGNUP}
                className="nav-link text-white"
                activeclassname="active"
              >
                Signup
              </NavLink>
            </>
          )}

          {isUser && (
            <Button onClick={logoutHandler} className="me-4">
              Logout
            </Button>
          )}

          <NavLink
            to={route.CART}
            className={`nav-link ${cartActiveClasses} text-white me-5`}
            activeclassname="active"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartItems > 0 && (
              <Badge pill variant="primary">
                {cartItems}
              </Badge>
            )}
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppHeader;
