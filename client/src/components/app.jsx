import React from 'react';
import { setInterval } from 'timers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    //bind functions here
  }
  currentTime() {
    this.setState({
      time: new Date()
    })
  }
  componentDidMount() {
    setInterval(() => this.currentTime(), 1000)
  }
  render() {
    return (
    <div className='practice'>
      {this.state.time.toLocaleTimeString()}
    </div>
    )
  }
}
export default App