import React, { Component } from 'react';
import Daenerys from '../images/dae.jpg';
class Description extends Component {
  render() {
    return (
      <div className="description__container">
        <div className="description__character">
          <div className="description__img"><img className="characters__img--pic" src={Daenerys} /></div>
          <h5 className="description__title">Daenerys Targaryen</h5>
          <h6 className="description__subtitle">Alias</h6>
          <p className="description__subtitle--info">Dany; Daenerys de la Tormenta; Mhysa; Khaleesi</p>
          <h6 className="description__subtitle">Nacimiento</h6>
          <p className="description__subtitle--info">284 DC</p>
          <h6 className="description__subtitle">Familia</h6>
          <p className="description__subtitle--info">Casa Targaryen</p>

        </div>
      </div>
    );
  }
}

export default Description;
