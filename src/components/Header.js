import React, { Component } from 'react';
import logo from '../images/logowhite.png';
import bell from '../images/bell.png';

class Header extends Component {
  render() {
    return (
      <header className="header__container">
        <div className="header__menu">
          <div className="header__logo"><img className="header__logo--img" src={logo} alt="Game of Thrones Logo" /></div>
          <div className="header__title--container"><h5 className="header__title">Game of Thrones</h5></div>
          <div className="header__character1"><h5>Daenerys Targaryen</h5></div>
        </div>
        <div className="header__bell">
          <img className="header__bell-img" src={bell} />
          <span className="header__bell--circle"></span> //Counter
        </div>

      </header>
    );
  }
}

export default Header;
