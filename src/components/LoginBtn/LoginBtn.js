import React from 'react';
import { Button } from 'reactstrap';

const buttonStyle = {
  marginLeft: '1600px',
  marginTop: '80px'
}
export default class LoginBtn extends React.Component {
  render() {
    return (
      <div>
        <Button style={buttonStyle} className="logBtn" outline color="secondary">Log In</Button>{' '}
      </div>
    );
  }
}

 