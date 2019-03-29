import React, { Component } from 'react';
import Typist from 'react-typist';
import './Header.css';

// Typed name states
const INIT_NICKNAME = 0;
const FULL_NAME = 1;
const NICKNAME = 2;

const cursor = {
  show: true,
  blink: false,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 300,
};

function TypedName(props) {
  if (props.nameState === INIT_NICKNAME) {
    return <Typist cursor={cursor}>Will</Typist>;
  } else if (props.nameState === FULL_NAME) {
    return (
      <div>
        Will
        <Typist cursor={cursor} onTypingDone={props.onTypingDone}>
          iam Lorey
          <Typist.Backspace count={9} delay={800} />
        </Typist>
      </div>
    );
  } else {
    // props.nameState === NICKNAME
    return <div>Will</div>;
  }
}

export default class Header extends Component {
  state = {
    nameState: INIT_NICKNAME,
  };

  expandName = () => {
    this.setState({ nameState: FULL_NAME });
  };

  shrinkName = () => {
    this.setState({ nameState: NICKNAME });
  };

  render() {
    return (
      <div className="header">
        <div className="header__hello">Hi there, I'm</div>
        <div className="header__name" onMouseEnter={this.expandName}>
          <TypedName
            nameState={this.state.nameState}
            onTypingDone={this.shrinkName}
          />
        </div>
      </div>
    );
  }
}
