import React from 'react';

const Alarm = props => {
  return (
    <div className='alarm-item'>
      {props.alarm.time}
    </div>
  )
}
export default Alarm;