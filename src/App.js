import React from 'react';

import Cards from './components/Cards'

import img12 from './assets/img/12.jpg';
import img13 from './assets/img/13.jpg';
import img14 from './assets/img/14.jpg';
import imgProfile from './assets/img/15.jpg'
const cards = [
  {
    'id': 1, 
    'name': 'Niple',
    'image': imgProfile,
    'location': 'Russia, Podolsk', 
    'shootingTime': '1h', 
    'picture': img12,
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    'id': 2, 
    'name': 'Maxim',
    'image': imgProfile, 
    'location': 'Russia, Moscow', 
    'shootingTime': '3h', 
    'picture': img13,
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    'id': 3, 
    'name': 'Nikita',
    'image': imgProfile,
    'shootingTime': '2s', 
    'picture': img14,
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    'id': 1, 
    'name': 'Niple',
    'image': imgProfile,
    'location': 'Russia, Podolsk', 
    'shootingTime': '1h', 
    'picture': img12,
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    'id': 2, 
    'name': 'Maxim',
    'image': imgProfile, 
    'location': 'Russia, Moscow', 
    'shootingTime': '3h', 
    'picture': img13,
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    'id': 3, 
    'name': 'Nikita',
    'image': imgProfile,
    'shootingTime': '2s', 
    'picture': img14,
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  
]

function App() {
  return (
    <>
      <div className="list-cards">
        <Cards cards={cards}/>
      </div>
    </>
  );
}

export default App;
