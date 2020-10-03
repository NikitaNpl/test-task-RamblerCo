import React from 'react';

import heart from '../../assets/img/love.svg';
import './index.scss';

const Cards = ({cards}) => {
  console.log(cards)
    return (
      <>
        {cards.map((item, index) => (
          <div className="card" key={index}>
            <div className="card__header">
              <div className="card__header-profile-image">
                <img src={item.image} alt="prof-pic"/>
              </div>
              <div className="card__header-profile-info">
                <div className="info__name-location">
                  <span className="name">{item.name}</span>
                  {item.location && <span className="location">{item.location}</span>}
                </div>
                <span className="info__shooting-time">{item.shootingTime}</span>
              </div>
            </div>

            <div className="card__picture">
              <img src={item.picture} alt="timg12"/>
            </div>

            <div className="card__info">
              <div className="info-likes">
                <img src={heart} alt="heart"/>
                <span>12 345</span>
              </div>
                {item.text && <div className="info-text">{item.text}</div>}
            </div>
          </div>
        ))}
      </>
    );
}

export default Cards;