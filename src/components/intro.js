import React from 'react';
import { Link } from 'gatsby';
import ExternalLink from './external-link'
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
          <ExternalLink href='https://mst.edu'>
            <strong style={{ color: 'green' }}>S&amp;T</strong>
          </ExternalLink>{' '}
          alum just trying to figure out what life's about.
          <br />
          <br />
          Read s'more{' '}
          <Link style={{ textDecoration: 'underline' }} to='/about'>
            here
          </Link>
          .
        </p>
      </div>
    </div>
  </div>
);
