import React from 'react';
import PicLink from './piclink';
import styles from './navigation-dash.module.css';

// TODO: condense PicLink components
export default props => (
  <div className={styles.picLinkContainer}>
    {/* <PicLink
      pic="experience.svg"
      label="Experience"
      link={process.env.PUBLIC_URL + '/experience/'}
      className={ props.scrollOcurred ? 'animateInLeft' : 'hidden' }
      newTab={false}
    /> */}
    <PicLink
      pic='github.png'
      label='Work'
      link='https://github.com/wwlorey'
      className={props.scrollOcurred ? 'animateInLeft' : 'hidden'}
      newTab={true}
    />
    {/* <PicLink
      pic='linkedin.png'
      label="Let's connect"
      link='https://linkedin.com/in/williamlorey/'
      className={props.scrollOcurred ? 'animateInLeft' : 'hidden'}
      newTab={true}
    /> */}
    {/* <PicLink
      pic="things.png"
      label="Things"
      link={process.env.PUBLIC_URL + '/things/'}
      className={ props.scrollOcurred ? 'animateInLeft' : 'hidden' }
      newTab={false}
    /> */}
    <PicLink
      pic='music.svg'
      label='Music'
      link={'/music'}
      className={props.scrollOcurred ? 'animateInLeft' : 'hidden'}
      newTab={false}
    />
    {/* <PicLink
      pic='video.png'
      label='Video'
      link={'https://www.youtube.com/watch?v=98H_O-NTBdo'}
      className={props.scrollOcurred ? 'animateInLeft' : 'hidden'}
      newTab={true}
    /> */}
    <PicLink
      pic='writing.png'
      label='Writing'
      link={'/writing'}
      className={props.scrollOcurred ? 'animateInLeft' : 'hidden'}
      newTab={false}
    />
    <PicLink
      pic='resume.svg'
      label='Resume'
      link={'/resume/william_lorey_resume.pdf'}
      className={props.scrollOcurred ? 'animateInLeft' : 'hidden'}
      newTab={true}
    />
  </div>
);
