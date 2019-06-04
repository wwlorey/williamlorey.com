import React, { Component } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import styles from './typed-out-header.module.css';

// Hit that type animation on hover?
let typeNameOnHover = true;

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
    if (typeNameOnHover) this.setState({ nameState: TYPED_FULL_NAME });
  };

  shrinkName = () => {
    this.setState({ nameState: STATIC_NICKNAME });
  };

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.header__text + " " + styles.blackOnWhite}>
          <div className={styles.header__text__hello}>Hey there, I'm</div>
          <div className={styles.header__text__name}>
            <div onMouseEnter={this.expandName}>
              <TypedName
                nameState={this.state.nameState}
                onTypingDone={this.shrinkName}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
