import React from 'react';
import Alarms from './Alarms.jsx'

class Clock extends React.Component {
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
    <div>

      <div className='practice'>
        {this.state.time.toLocaleTimeString()}
      </div>

        <Alarms alarms={this.props.alarms}/>
    </div>
    )
  }
}
export default Clock;