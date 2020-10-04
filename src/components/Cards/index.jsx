import React from 'react';

import heart from '../../assets/img/love.svg';
import './index.scss';



const Cards = ({cards}) => {
    console.log(cards)


    function getTimePosted(currentDate) {
      let differenceDate = getTimeDifference(currentDate);
      return dateConverter(differenceDate);
    }

    function getTimeDifference(currentDate) {
      let pastDate = new Date(currentDate.toString())
      let differenceDate = new Date().getTime() - pastDate.getTime();
      
      return (new Date(differenceDate));
    }

    function dateConverter(date) {
      let month = date.getMonth();
      let days = date.getDate();
      let hours = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();

      if (month) {
        return month + 'mo';
      } if (days) {
        return days + 'd';
      } if (hours) {
        return hours + 'h'
      } if (min) {
        return min + 'min';
      } if (sec) {
        return sec + 's'
      }

      return;
    }

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
                {item.description && <div className="info-text">{item.description['_content']}</div>}
            </div>
          </div>
        ))}
      </>
    );
}

export default Cards;