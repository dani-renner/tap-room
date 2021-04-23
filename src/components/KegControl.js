import React from 'react';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      formVisibleOnPage: false,
      masterKegList: []
    };
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default TicketControl;