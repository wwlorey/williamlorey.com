import React from 'react';
import Emoji from './emoji'
import styles from './footer.module.css';

export default props => (
  <p
    className={`${styles.footer} ${props.scrollOcurred ? styles.animateFooterIn : 'hidden'}`}
  >
    <Emoji description='love letter' emoji='💌' />{' '}
    Get in touch:{' '}
    <a className={styles.email} href='mailto:will@williamlorey.com'>
      will@williamlorey.com
    </a>
    <br />
    &#169; {new Date().getFullYear()} William Lorey
  </p>
);
