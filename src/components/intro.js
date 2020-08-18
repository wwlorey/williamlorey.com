import React from 'react';
import { Link } from 'gatsby';
import Emoji from './emoji';
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
          I'm passionate about mindfulness and using tech to solve important problems.
          I work as a software engineer at{' '}
          <strong style={{ color: 'blue' }}>Microsoft</strong>.
          {/* <br />
          <br />
          <Link style={{ textDecoration: 'underline' }} to='/about'>
            Read more <Emoji description='right arrow' emoji='→' />
          </Link> */}
        </p>
      </div>
    </div>
  </div>
);
