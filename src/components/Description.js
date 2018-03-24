import React, { Component } from 'react';
import Daenerys from '../images/dae.jpg';
class Description extends Component {
  render() {
    return (
      <section className="description__container">
        <div className="description__character">
          <div className="description__img"><img className="characters__img--pic" src={Daenerys} /></div>
          <div className="description__info">
            <h5 className="description__title">Daenerys Targaryen</h5>
            <div className="description__info--container">
              <span className="description__info--block">
                <h6 className="description__subtitle">Alias</h6>
                <p className="description__subtitle--info">Dany; Daenerys de la Tormenta; Mhysa; Khaleesi</p>
              </span>
              <span className="description__info--block"><h6 className="description__subtitle">Nacimiento</h6>
              <p className="description__subtitle--info">284 DC</p>
            </span>
            <span className="description__info--block"><h6 className="description__subtitle">Familia</h6>
            <p className="description__subtitle--info">Casa Targaryen</p>
          </span>
        </div>
      </div>
    </div>
    <nav className="description__nav">
      <ul className="desciption__list">
        <a href=""><li className="description__list--item">Descripción</li></a>
        <a href=""><li className="description__list--item">Historia</li></a>
        <a href=""><li className="description__list--item">Actriz</li></a>
      </ul>
    </nav>
    <div className="description__text">
      <p>Daenerys Targaryen es un personaje de ficción de la saga de literatura fantástica Canción de hielo y fuego, escrita por George R. R. Martin. Daenerys es uno de los personajes principales y posee capítulos narrados desde su punto de vista en Juego de tronos, Choque de reyes, Tormenta de espadas y Danza de dragones. En la adaptación televisiva Juego de tronos, el personaje es interpretado por la actriz Emilia Clarke.</p>​

      <p>Daenerys fue la única hija del rey Aerys II Targaryen y de su hermana-esposa, la reina Rhaella. Tras la muerte de su padre y de su hermano mayor en la Guerra del Usurpador, su madre murió dando a luz a la pequeña Daenerys. De esa manera, su hermano mayor Viserys quedó como legítimo rey Targaryen al Trono de Hierro y ella como su heredera.</p><br />

      <p>Se ha señalado que el destinador inicial del personaje de Daenerys es el «deseo de venganza».</p>
    </div>
  </section>
);
}
}

export default Description;
