import React from 'react';
import PostWrapper from '../components/post-wrapper';
import Heading from '../components/heading';

export default () => (
  <PostWrapper>
    <Heading>About Will</Heading>
    My path through life has been a lot like one of those{' '}
    <a
      href='https://www.youtube.com/watch?v=ToS-b1KQ8QE'
      target='_blank'
      rel='noopener noreferrer'
    >
      mountaintop roads in a mid-nineties car commercial
    </a>{' '}
    - which is to say, it's had its ups and downs.
    <br />
    <br />
    After coasting through life until my late teens, I graduated college this
    spring and wrapped up what was by far the most transformative period in my
    life. I had some big successes and <strong>big</strong> failures but I left
    my college years a more focused and spiritually awake person than when I
    started.
    <br />
    <br />
    The biggest life lesson I've learned to date is that{' '}
    <strong>I don't know what the hell to do with my life</strong> and I've set
    out to find some answers.
    <br />
    <br />
    That's what this website is about: me trying things out, seeing what I like,
    what I hate, what fuels me, and what makes me want to quit my day job. So if
    you're into that, stick around because that's my journey and I hope watching
    it unfold won't disappoint.
    <br />
    <br />
    <div style={{ marginTop: '1rem', width: '12rem' }}>
      <img
        style={{ display: 'block', width: '12rem', height: 'auto' }}
        src={require('../images/sig.png')}
        alt="Will's signature"
      />
      <p style={{ display: 'block', fontSize: '.8rem' }}>June `19</p>
    </div>
  </PostWrapper>
);
