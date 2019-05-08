import React, { Component } from 'react';
import disableScroll from 'disable-scroll';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import './Header.css';

// Hit that type animation on hover?
let typeNameOnHover = false;

// Name & related states
const NICKNAME = 'Will';
const REST_OF_NAME = 'iam Lorey';

const STATIC_NICKNAME = 0;
const TYPED_FULL_NAME = 1;

// Cursor for TypedName
const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: false,
  hideWhenDoneDelay: 300,
};

function TypedName(props) {
  if (props.nameState === STATIC_NICKNAME) {
    return <div>{NICKNAME}</div>;
  } else if (props.nameState === TYPED_FULL_NAME) {
    disableScroll.on();
    return (
      <div>
        {NICKNAME}
        <Typist cursor={cursor} onTypingDone={props.onTypingDone}>
          <Typist.Delay ms={200} />
          {REST_OF_NAME}
          <Typist.Backspace count={REST_OF_NAME.length} delay={800} />
        </Typist>
      </div>
    );
  }
}

export default class Header extends Component {
  state = {
    nameState: TYPED_FULL_NAME,
  };

  expandName = () => {
    if (this.props.allowFullName && typeNameOnHover) this.setState({ nameState: TYPED_FULL_NAME });
  };

  shrinkName = () => {
    this.setState({ nameState: STATIC_NICKNAME });
    disableScroll.off();
  };

  render() {
    return (
      <div className="header">
        <div className="header__text black-on-white">
          <div className="header__text__hello">Hey there, I'm</div>
          <div className="header__text__name" onMouseEnter={this.expandName}>
            <TypedName
              nameState={this.state.nameState}
              onTypingDone={this.shrinkName}
            />
          </div>
        </div>
      </div>
    );
  }
}
