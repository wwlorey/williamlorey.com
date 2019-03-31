import React from 'react';
import PicLink from './PicLink';
import './Links.css';

export default function Links(props) {
  if (props.animateOut) {
    return (
      <div className="links-wrapper">
        <PicLink pic="story.svg" label="My story" link="" />
        <PicLink
          pic="github.png"
          label="Projects"
          link="https://github.com/wwlorey"
        />
        <PicLink
          pic="linkedin.png"
          label="Let's connect"
          link="https://linkedin.com/in/williamlorey/"
        />
        <PicLink
          pic="email.png"
          label="Get in touch"
          link="mailto:mail@williamlorey.com"
        />
        <PicLink
          pic="resume.svg"
          label="Resume"
          link={process.env.PUBLIC_URL + '/resume/william_lorey_resume.pdf'}
        />
        <PicLink
          pic="music.svg"
          label="Jams"
          link="https://open.spotify.com/artist/5Y1KFkwis810gbRuL8ffOs?si=wfH6tbDvSnKaWTHV6pB9zA"
        />
      </div>
    );
  }

  return (
    <div className="links-wrapper">
      <PicLink pic="story.svg" label="My story" link="" />

      <PicLink
        pic="github.png"
        label="Projects"
        link="https://github.com/wwlorey"
      />

      <PicLink
        pic="linkedin.png"
        label="Let's connect"
        link="https://linkedin.com/in/williamlorey/"
      />

      <PicLink
        pic="email.png"
        label="Get in touch"
        link="mailto:mail@williamlorey.com"
      />

      <PicLink
        pic="resume.svg"
        label="Resume"
        link={process.env.PUBLIC_URL + '/resume/william_lorey_resume.pdf'}
      />

      <PicLink
        pic="music.svg"
        label="Jams"
        link="https://open.spotify.com/artist/5Y1KFkwis810gbRuL8ffOs?si=wfH6tbDvSnKaWTHV6pB9zA"
      />
    </div>
  );
}
