import React from 'react';
import Tile from './Tile';
import './General.css';

function Things() {
  let images = [
    'dog_normal.jpg',
    'last_pats.png',
    'space_needle.png',
    'space_needle.png'
  ];
  let titles = ['Photos', 'Books', 'Video', 'Places'];
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
