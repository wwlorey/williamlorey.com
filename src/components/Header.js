import React, { Component } from 'react';
import Typist from 'react-typist';
import './Header.css';

// Name & related states
const NICKNAME = 'Will';
const REST_OF_NAME = 'iam Lorey';

const STATIC_NICKNAME = 0;
const TYPED_FULL_NAME = 1;

// Cursor for TypedName
const cursor = {
  show: true,
  blink: false,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 300,
};

function TypedName(props) {
  if (props.nameState === STATIC_NICKNAME) {
    return <div>{NICKNAME}</div>;
  } else if (props.nameState === TYPED_FULL_NAME) {
    return (
      <div>
        {NICKNAME}
        <Typist cursor={cursor} onTypingDone={props.onTypingDone}>
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
    this.setState({ nameState: TYPED_FULL_NAME });
  };

  shrinkName = () => {
    this.setState({ nameState: STATIC_NICKNAME });
  };

  render() {
    return (
      <div className="header">
        <div className="header__text">
          <div className="header__text__hello">Hi there, I'm</div>
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
