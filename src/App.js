import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Cards from './components/Cards'

const apiKey = '9781492bddf356d5157ba5a69a1b13ea';
const perPage = 10;
const apiUrlFromTopPhotos = `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${apiKey}&per_page=${perPage}&format=json&nojsoncallback=1`;

function App() {
  const [idPhotos, setIdPhotos] = useState([]);
  const [infoPhotos, setInfoPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get(apiUrlFromTopPhotos)
    .then((response) => {
      if (response.status === 200) {
        const arrayPhoto = response.data.photos.photo;
        let idPhotos = arrayPhoto.map((item) =>  item.id);
        setIdPhotos(idPhotos);
      }
      return;
    })
    .catch(() => {
      alert('Не удалось выгрузить фото!');
    });
  }, []);

  useEffect(() => {
    if (idPhotos === false) {
      return;
    }
    idPhotos.forEach((item) => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${apiKey}&photo_id=${item}&format=json&nojsoncallback=1`)
      .then((response) =>  {
        if(response.status === 200) {
          let {id, secret, server, farm, owner, description, dates, views, location} = response.data.photo;
          setInfoPhotos(lastInfo => [...lastInfo, {id, secret, server, farm, owner, description, dates, views, location}])
        }
      })
      .then(() => setIsLoading(true));
    })
  }, [idPhotos]);
  
  return (
    <>
      <div className="list-cards">
        {isLoading && infoPhotos.length === perPage ? <Cards cards={infoPhotos}/> : 'Загрузка...'}
      </div>
    </>
  );
}

export default App;
