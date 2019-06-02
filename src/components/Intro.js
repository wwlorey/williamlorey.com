import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./Intro.css";

export default class Intro extends Component {
  state = {
    becameVisible: false
  };

  onVisSensorChange = isVisible => {
    if (!this.state.becameVisible) this.setState({ becameVisible: true });
  };

  render() {
    return (
      <div>
        <VisibilitySensor onChange={this.onVisSensorChange}>
          <hr
            className={`${this.state.becameVisible ? "animate-hr-in" : ""}`}
          />
        </VisibilitySensor>
        <VisibilitySensor>
          <div class="intro-meat">
            <div
              className={`headshot ${
                this.state.becameVisible ? "animate-meat-in" : "" }`}
              style={{
                backgroundImage:
                  "url(" + require("../assets/images/wl.jpg") + ")"
              }}
            />
            <div
              className={`intro-text ${
                this.state.becameVisible ? "animate-meat-in" : "" }`}
            >
              I'm an incoming software engineer at <div className="blue">Microsoft</div>, minimalist, runner,
              and <a href="https://mst.edu" target="_blank" rel="noopener noreferrer"><div className="green">S&amp;T</div></a> alum.
              <br /> <br />I love living simply and intentionally.
            </div>
          </div>
        </VisibilitySensor>
      </div>
    );
  }
}
