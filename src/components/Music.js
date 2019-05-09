import React from 'react';
import Tile from './Tile';

import './Story.css';

function Story() {
  let images = ['content.png', 'hidden_lanes.png', 'rear_view.png'];
  let titles = ['Content', 'Hidden Lanes', 'Rear-view'];
  let links = [
    '',
    'https://open.spotify.com/artist/5Y1KFkwis810gbRuL8ffOs?si=wfH6tbDvSnKaWTHV6pB9zA',
    'https://open.spotify.com/artist/5Y1KFkwis810gbRuL8ffOs?si=wfH6tbDvSnKaWTHV6pB9zA'
  ];
  let tiles = [];
  for (let i = 0; i < images.length; i++) {
    tiles.push(<Tile pic={images[i]} title={titles[i]} link={links[i]} />);
  }

  return (
    <div>
      <div class='story-header'>
        <div class='story-header__text fade-in-left'>
          <a href='/'>William Lorey</a>
        </div>
        <div class='hr grow-left'>
          <div class='top-border' />
        </div>
      </div>
      <div className='tiles fade-in-bottom'>{tiles}</div>
    </div>
  );
}

export default Story;
