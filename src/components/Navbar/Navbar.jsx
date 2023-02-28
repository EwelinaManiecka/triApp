import { Component } from "react";

import { MenuItems } from "../MenuItem/MenuItem";

import css from "./Navbar.module.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className={css.navbarItems}>
        <h1 className={css.navbarLogo}>Trippy</h1>

        <div className={css.menuIcons} onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
          {/* <i className="fas fa-times"></i> */}
        </div>

        {/* class .active don't function */}

        <ul
          className={
            this.state.clicked ? css.navMenu + " " + css.active : css.navMenu
          }
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={css[item.cName]}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
