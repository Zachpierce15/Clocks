import React from 'react';
import Clock from './clock.jsx';
import { setInterval } from 'timers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    //bind functions here
  }
  render() {
    return (
    <div>
      <Clock />
    </div>
    )
  }
}
export default App