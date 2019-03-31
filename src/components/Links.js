import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PicLink from './PicLink';
import './Links.css';

export default function Links(props) {
  if (props.animateOut) {
    return (
      <ScrollAnimation animateIn="fade-out" duration={1}>
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
      </ScrollAnimation>
    );
  }

  return (
    <div className="links-wrapper">
      <ScrollAnimation
        animateIn="animate-pic-link"
        delay={0.5}
        duration={1}
        animatePreScroll={false}
        style={{ display: 'inline' }}
      >
        <PicLink pic="story.svg" label="My story" link="" />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="animate-pic-link"
        delay={0.5}
        duration={1}
        animatePreScroll={false}
        style={{ display: 'inline' }}
      >
        <PicLink
          pic="github.png"
          label="Projects"
          link="https://github.com/wwlorey"
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="animate-pic-link"
        delay={0.5}
        duration={1}
        animatePreScroll={false}
        style={{ display: 'inline' }}
      >
        <PicLink
          pic="linkedin.png"
          label="Let's connect"
          link="https://linkedin.com/in/williamlorey/"
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="animate-pic-link"
        delay={0.5}
        duration={1}
        animatePreScroll={false}
        style={{ display: 'inline' }}
      >
        <PicLink
          pic="email.png"
          label="Get in touch"
          link="mailto:mail@williamlorey.com"
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="animate-pic-link"
        delay={0.5}
        duration={1}
        animatePreScroll={false}
        style={{ display: 'inline' }}
      >
        <PicLink
          pic="resume.svg"
          label="Resume"
          link={process.env.PUBLIC_URL + '/resume/william_lorey_resume.pdf'}
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="animate-pic-link"
        delay={0.5}
        duration={1}
        animatePreScroll={false}
        style={{ display: 'inline' }}
      >
        <PicLink
          pic="music.svg"
          label="Jams"
          link="https://open.spotify.com/artist/5Y1KFkwis810gbRuL8ffOs?si=wfH6tbDvSnKaWTHV6pB9zA"
        />
      </ScrollAnimation>
    </div>
  );
}
