import React from 'react';
import Tile from '../components/tile';
import PostWrapper from '../components/post-wrapper';
import Heading from '../components/heading';
import ExternalLink from '../components/external-link';

export default () => {
  let images = [
    'album_covers/content.jpg',
    'album_covers/hidden_lanes.jpg',
    'album_covers/rear_view.jpg'
  ];
  let titles = ['content', 'Hidden Lanes', 'Rear-view'];
  let links = [
    'https://open.spotify.com/album/7M4KYtLzfcnj0YekYrBQjh',
    'https://open.spotify.com/album/6G9G52Ma7W5xwnHJZInmvn',
    'https://open.spotify.com/album/5wtJFH5KB7YuUkBoefifIM'
  ];
  let tiles = [];
  for (let i = 0; i < images.length; i++) {
    tiles.push(<Tile pic={images[i]} title={titles[i]} link={links[i]} />);
  }

  return (
    <PostWrapper>
      <Heading>Music</Heading>
      {/* I started writing music after a particularly bad
      breakup and I'm glad I did. It's been a fun creative outlet and a good way
      to spend time with a good buddy of mine,{' '}
      <ExternalLink href='https://twitter.com/Jschoonie52'>Josh</ExternalLink>
      .
      <br />
      <br />
      Check out my favorite{' '}
      <ExternalLink href='https://www.youtube.com/watch?v=zGaet4wmmeo'>
        song
      </ExternalLink>{' '}
      we wrote. */}
      <div className='tiles'>{tiles}</div>
    </PostWrapper>
  );
};
