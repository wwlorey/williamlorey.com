import React from 'react';
import './Tile.css';

function Tile(props) {
  return (
    <h1
      style={{
        backgroundImage:
          'url(' + require('../assets/images/story/' + props.pic) + ')'
      }}
      className='tile'
    >
      {props.title}
    </h1>
  );
}

export default Tile;
