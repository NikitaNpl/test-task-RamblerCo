import React from 'react';

import heart from '../../assets/img/love.svg';
import './index.scss';
import {getTimePosted} from '../../helper/getTimePosted'

const Cards = ({cards}) => {
    console.log(cards)

    return (
      <>
        {cards.map((item, index) => (
          <div className="card" key={index}>
            <div className="card__header">
              <div className="card__header-profile-image">
                <img src={`http://farm${item.owner.iconfarm}.staticflickr.com/${item.owner.iconserver}/buddyicons/${item.owner.nsid}.jpg`}
                  alt="prof-pic"
                />
              </div>
              <div className="card__header-profile-info">
                <div className="info__name-location">
                  <span className="name">{item.owner.username}</span>
                  {item.location && <span className="location">{item.location.country['_content']}</span>}
                </div>
                <span className="info__shooting-time">{getTimePosted(item.dates.taken)}</span>
              </div>
            </div>

             <div className="card__picture">
              <img src={`http://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt="timg12"/>
            </div>

            <div className="card__info">
              <div className="info-likes">
                <img 
                  onClick={() => alert(`ID записи: ${index}`)} 
                  src={heart} 
                  alt="heart"
                />
                <span>{item.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
              </div>
                {item.description && <div className="info-text" dangerouslySetInnerHTML={{__html: item.description['_content']}}></div>}
            </div>
          </div>
        ))}
      </>
    );
}

export default Cards;