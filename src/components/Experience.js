import React from 'react';
import Tile from './Tile';
import './General.css';

function Things() {
  let images = [
    'dog_normal.jpg',
    'last_pats.png',
    'dog_disturbed.jpg',
    'space_needle.png'
  ];
  let titles = ['Murphy', 'Rolla', 'Disturbed', 'Seattle'];
  let tiles = [];
  for (let i = 0; i < images.length; i++) {
    tiles.push(<Tile pic={images[i]} title={titles[i]} link={''} />);
  }

  return (
    <div>
      <div className='story-header'>
        <div className='story-header__text fade-in-left'>
          <a href='/'>William Lorey</a>
        </div>
        <div className='hr grow-left'>
          <div className='top-border' />
        </div>
      </div>
      <div className='tiles fade-in-bottom'>{tiles}</div>
    </div>
  );
}

export default Things;
