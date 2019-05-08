import React from 'react';
import './Tile.css';

function Tile(props) {
  return (
    <div
      style={{
        backgroundImage:
          'url(' + require('../assets/images/story/' + props.pic) + ')'
      }}
      className='tile'
    />
  );
}

export default Tile;
