import React from 'react';
import ExternalLink from './external-link';
import styles from './tile.module.css';

export default props => {
  if (props.link === '') {
    return (
      <h1
        style={{
          backgroundImage: 'url(' + require('../images/' + props.pic) + ')'
        }}
        className={styles.tile}
      >
        {props.title}
      </h1>
    );
  } else {
    return (
      <ExternalLink href={props.link} className={styles.tileLink}>
        <h1
          style={{
            backgroundImage: 'url(' + require('../images/' + props.pic) + ')',
            cursor: 'pointer'
          }}
          className={styles.tile}
        >
          {props.title}
        </h1>
      </ExternalLink>
    );
  }
};
