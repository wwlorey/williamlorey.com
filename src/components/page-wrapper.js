import React from 'react';

export default props => (
  <div>
    <div className='header'>
      <div className='header__text animateInLeft'>
        <a href='/'>William Lorey</a>
      </div>
      <div className='hr growLeft'>
        <div className='topBorder' />
      </div>
    </div>
    <div className={`animateIn ${props.classNames}`}>{props.children}</div>
  </div>
);
