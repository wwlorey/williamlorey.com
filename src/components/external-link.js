import React from 'react';

export default props => (
  <a
    className={props.className}
    href={props.href}
    target='_blank'
    rel='noopener noreferrer'
  >
    {props.children}
  </a>
);
