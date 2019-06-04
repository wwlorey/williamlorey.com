import React from 'react';
import { Link } from 'gatsby';
import styles from './intro.module.css';

export default props => (
  <div>
    <hr
      className={`${styles.horizontalLine} ${
        props.scrollOcurred ? styles.animateHrIn : 'hidden'
      }`}
    />
    <div
      className={`${styles.introMeat} ${
        props.scrollOcurred ? styles.animateMeatIn : 'hidden'
      }`}
    >
      <div
        className={styles.headshot}
        style={{
          backgroundImage: 'url(' + require('../images/wl.jpg') + ')'
        }}
      />
      <div className={styles.textSpacer} />
      <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <p className={styles.introText}>
          I'm an incoming software engineer at{' '}
          <strong style={{ color: 'blue' }}>Microsoft</strong>, minimalist,
          runner, and{' '}
          <a href='https://mst.edu' target='_blank' rel='noopener noreferrer'>
            <strong style={{ color: 'green' }}>S&amp;T</strong>
          </a>{' '}
          alum.
          <br />
          <br />
          <Link style={{ textDecoration: 'underline' }} to='/about'>
          Read s'more
          </Link>{' '}
          or check out the links below.
        </p>
      </div>
    </div>
  </div>
);
