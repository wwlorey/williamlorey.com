import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PicLink from './PicLink';
import './Links.css';

export default function Links(props) {
  if (props.show) {
    return (
      <div className="links-wrapper">
        <PicLink
          pic="story.svg"
          label="My story"
          link=""
          animateOut={props.animateOut}
        />
        <PicLink
          pic="github.png"
          label="Projects"
          link="https://github.com/wwlorey"
          animateOut={props.animateOut}
        />
        <PicLink
          pic="linkedin.png"
          label="Let's connect"
          link="https://linkedin.com/in/williamlorey/"
          animateOut={props.animateOut}
        />
        <PicLink
          pic="email.png"
          label="Get in touch"
          link="mailto:mail@williamlorey.com"
          animateOut={props.animateOut}
        />
        <PicLink
          pic="resume.svg"
          label="Resume"
          link={process.env.PUBLIC_URL + '/resume/william_lorey_resume.pdf'}
          animateOut={props.animateOut}
        />
        <PicLink
          pic="music.svg"
          label="Jams"
          link="https://open.spotify.com/artist/5Y1KFkwis810gbRuL8ffOs?si=wfH6tbDvSnKaWTHV6pB9zA"
          animateOut={props.animateOut}
        />
      </div>
    );
  }

  return <div class="links-wrapper" />;
}
