import React from 'react';

const Buttons = props => {return (
  <div>
    <h3>Types of Clocks</h3>

    <div className='buttons'>
      <button onClick={props.digital}>Digital</button>
      <button onClick={props.analog}>Analog</button>
    </div>

  </div>
)};
export default Buttons