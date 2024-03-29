import React from 'react';
import Clock from './digitalClock.jsx';
import Buttons from './buttons.jsx';
import Info from './inputInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digital: true,
      analog: false,
      alarms:[{
        time: '12:20:00 PM',
      },
    {
      time: '1:40:00 AM'
    }],
    startingOut: true,
    };
    this.changeClockToAnalog = this.changeClockToAnalog.bind(this);
    this.changeClockToDigital = this.changeClockToDigital.bind(this);
    this.changeToClock = this.changeToClock.bind(this);
  }

  // ================ Clock Changes ==================
  changeClockToAnalog() {
    this.setState({
      digital: false,
      analog: true,
    });
  }

  changeClockToDigital() {
    this.setState({
      digital: true,
      analog: false
    });
  }
  // =============== User input is done =================

  changeToClock () {
    console.log('made it here')
    this.setState({ startingOut: false })
  }

  render() {
    if(this.state.startingOut) {
      return (
        <div className='info'>
          <Info change={this.changeToClock}/>
        </div>
      )
    } else {
      //  =========== Digital Clock Display ==============
      if(this.state.digital) {
        return (
        <div>
          <Buttons analog={this.changeClockToAnalog} digital={this.changeClockToDigital} />
          <Clock alarms={this.state.alarms}/>
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
}
export default App