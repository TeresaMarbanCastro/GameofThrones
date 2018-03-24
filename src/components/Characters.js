import React, { Component } from 'react';
import Daenerys from '../images/dae.jpg';
import Tyrion from '../images/tyrion.jpg';
import Jon from '../images/jonsnow.jpeg';
import Margaery from '../images/margaery.jpg';
import Sansa from '../images/sansa.jpeg';
import Cersei from '../images/cersei.jpg';
import bluestar from '../images/star.png';
import greystar from '../images/greystar.png';
import halfstar from '../images/halfstar.png';

class Editor extends Component {
  render() {
    return (
      <section className="characters__container">
        <nav className="characters__navigation">
          <ul className="characters__menu">
            <li className="characters__menu__item"><a href="">Favoritos</a></li>
            <li className="characters__menu__item"><a href="">Listado de casas</a></li>
            <li className="characters__menu__item"><a href="">Personajes secundarios</a></li>
          </ul>
        </nav>
        <div className="characters__buttons">
          <button className="characters__btn"><a href="">Top(2)</a></button>
          <button className="characters__btn"><a href="">Sin Valorar(3)</a></button>
          <button className="characters__btn"><a href="">Actualizados(4)</a></button>
        </div>
        <div className="characters__list__container">
          <ul className="characters__list">
            <li className="characters__list__item character1">
              <div className="characters__item item__stars"><span className="corner"></span><img src={bluestar} /><img src={bluestar} /><img src={bluestar} /><img src={bluestar} /><img src={bluestar} /></div>
              <div className="characters__item"><img src={Daenerys} className="characters__img--pic"/></div>
              <div className="characters__item characters info">
                <h6 className="characters__name">Daenerys Targaryen</h6>
                <p className="characters__house">Casa Targaryen</p>
              </div>
            </li>
            <li className="characters__list__item character2">
              <div className="characters__item item__stars"><span className="corner__transparent"></span><img src={bluestar} /><img src={bluestar} /><img src={bluestar} /><img src={bluestar} /><img className="halfstar" src={halfstar} /></div>
              <div className="characters__item"><img src={Tyrion} className="characters__img--pic"/></div>
              <div className="characters__item characters info">
                <h6 className="characters__name">Tyrion Lannister</h6>
                <p className="characters__house">Casa Lannister</p>
              </div>
            </li>
            <li className="characters__list__item character3">
              <div className="characters__item item__stars"><span className="corner"></span><img src={bluestar} /><img src={bluestar} /><img src={bluestar} /><img src={greystar} /><img src={greystar} /></div>
              <div className="characters__item"><img src={Jon} className="characters__img--pic"/></div>
              <div className="characters__item characters info">
                <h6 className="characters__name">Jon Snow</h6>
                <p className="characters__house">Lord comandante de la Guardia de la noche</p>
              </div>
            </li>
            <li className="characters__list__item character4">
              <div className="characters__item item__stars"><span className="corner"></span><img src={greystar} /><img src={greystar} /><img src={greystar} /><img src={greystar} /><img src={greystar} /></div>
              <div className="characters__item"><img src={Margaery} className="characters__img--pic"/></div>
              <div className="characters__item characters info">
                <h6 className="characters__name">Margaery Tyrell</h6>
                <p className="characters__house">Casa Tyrell</p>
              </div>
            </li>
            <li className="characters__list__item character5">
              <div className="characters__item item__stars"><span className="corner"></span><img src={greystar} /><img src={greystar} /><img src={greystar} /><img src={greystar} /><img src={greystar} /></div>
              <div className="characters__item"><img src={Sansa} className="characters__img--pic"/></div>
              <div className="characters__item characters info">
                <h6 className="characters__name">Sansa Stark</h6>
                <p className="characters__house">Casa Stark</p>
              </div>
            </li>
            <li className="characters__list__item character6">
              <div className="characters__item item__stars"><span className="corner__transparent"></span><img src={greystar} /><img src={greystar} /><img src={greystar} /><img src={greystar} /><img src={greystar} /></div>
              <div className="characters__item"><img src={Cersei} className="characters__img--pic"/></div>
              <div className="characters__item characters info">
                <h6 className="characters__name">Cersei Lannister</h6>
                <p className="characters__house">Casa Lannister</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Editor;
