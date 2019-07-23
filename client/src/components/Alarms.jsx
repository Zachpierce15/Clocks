import React from 'react';
import Alarm from './eachAlarm.jsx'

const Alarms = props => {
  return (
    <div className='Alarm'>
      <button>
        Add Alarm
      </button>
      {props.alarms.map((alarm) => {

      return <Alarm alarm={alarm}/>
      })}
    </div>
  )
}
export default Alarms