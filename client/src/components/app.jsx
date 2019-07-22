import React from 'react';
import Clock from './clock.jsx';
import Buttons from './buttons.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digital: true,
      analog: false,
    };
    //bind functions here
    this.changeClockToAnalog = this.changeClockToAnalog.bind(this);
    this.changeClockToDigital = this.changeClockToDigital.bind(this);
  }
  // ================ Clock Changes ==================
  changeClockToAnalog() {
    console.log('made it to analog')
    // this.setState({
    //   digital: false,
    //   analog: true
    // });
  }

  changeClockToDigital() {
    console.log('made it to digital')
    // this.setState({
    //   digital: true,
    //   analog: false
    // });
  }
  // ==================================================
  render() {
    return (
    <div>
      <Buttons analog={this.changeClockToAnalog} digital={this.changeClockToDigital} />
      <Clock />
    </div>
    )
  }
}
export default App