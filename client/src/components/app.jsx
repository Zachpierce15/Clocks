import React from 'react';
import Clock from './digitalClock.jsx';
import Buttons from './buttons.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digital: true,
      analog: false,
    };
    this.changeClockToAnalog = this.changeClockToAnalog.bind(this);
    this.changeClockToDigital = this.changeClockToDigital.bind(this);
  }

  // ================ Clock Changes ==================
  changeClockToAnalog() {
    this.setState({
      digital: false,
      analog: true
    });
  }

  changeClockToDigital() {
    this.setState({
      digital: true,
      analog: false
    });
  }

  render() {
    //  =========== Digital Clock Display ==============
    if(this.state.digital) {
      return (
      <div>
        <Buttons analog={this.changeClockToAnalog} digital={this.changeClockToDigital} />
        <Clock />
      </div>
      )
    }
    // ============= Analog Clock Display ===============
    if(this.state.analog) {
      return (
        <div>
          <Buttons analog={this.changeClockToAnalog} digital={this.changeClockToDigital} />
          {/* <Clock /> */}
        </div>
        )
    }
  }
}
export default App