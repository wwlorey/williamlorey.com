import React from 'react';

export default props => (
  <div>
    <div className='header'>
      <a className='header__text animateInLeft' href='/'>William Lorey</a>
      <div className='hr growLeft'>
        <div className='bottomBorder' />
      </div>
    </div>
    <div className={`animateIn ${props.classNames}`}>{props.children}</div>
  </div>
);
