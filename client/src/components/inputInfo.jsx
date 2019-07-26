import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    // Bind functions here as they get passed down
  }

  render() {
    return (
      <div>
        <div className='newUser' >Not a user?</div>
        <button className='newUser' >Click Here</button>
        <form className ='newInfo'>

          <label>
            Username
            <input type='text' className='inputBoxes'></input>
          </label>

          <label>
            Password
            <input type='password' className='inputBoxes'></input>
          </label>

          <input type='submit' value='Submit' className='submit'></input>

        </form>

      </div>

    )
  }
}
export default Info;