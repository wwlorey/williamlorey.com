import React from 'react';
import PicLink from './piclink';

// TODO: condense PicLink components
export default props => 
  <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
    {/* <PicLink
            pic="experience.svg"
            label="Experience"
            link={process.env.PUBLIC_URL + '/experience/'}
            className={ props.scrollOcurred ? 'animateInLeft' : 'hidden' }
            newTab={false}
          /> */}
    <PicLink
      pic='github.png'
      label='Projects'
      link='https://github.com/wwlorey'
      className={props.scrollOcurred ? 'animateInLeft' : 'hidden'}
      newTab={true}
    />
    <PicLink
      pic='resume.svg'
      label='Resume'
      link={'/resume/william_lorey_resume.pdf'}
      className={props.scrollOcurred ? 'animateInLeft' : 'hidden'}
      newTab={true}
    />
    <PicLink
      pic='linkedin.png'
      label="Let's connect"
      link='https://linkedin.com/in/williamlorey/'
      className={props.scrollOcurred ? 'animateInLeft' : 'hidden'}
      newTab={true}
    />
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
  </div>
