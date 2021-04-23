import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <p><em>{props.brewer}</em></p>
        <p><em>{props.price}</em></p>
        <p><em>{props.abv}</em></p>
        <p><em>{props.pints}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  pints: PropTypes.number,
  whenKegClicked: PropTypes.func.isRequired
}

export default Keg;