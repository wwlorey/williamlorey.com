import React from 'react';
import styles from './piclink.module.css';

export default props => (
  <div className={`${styles.picLinkWrapper} ${props.className}`}>
    <a
      href={props.link}
      target={props.newTab ? '_blank' : ''}
      rel={props.newTab ? 'noopener noreferrer' : ''}
      className={styles.picLinkLink}
    >
      <div
        style={{
          backgroundImage:
            'url(' + require('../images/icons/' + props.pic) + ')'
        }}
        className={styles.pic}
      />
      <div className={styles.label}>{props.label}</div>
    </a>
  </div>
);
