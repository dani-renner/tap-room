import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onDecrease, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h2>Keg Detail</h2>
      <h3>"{keg.name}"</h3>
      <p><em>Brewed by: </em>{keg.brewer}</p>
      <p><em>Price/keg: </em>{keg.price}</p>
      <p><em>Alcohol content: </em>{keg.abv}</p>
      <p><em>Pints in keg: </em>{keg.pints}</p>
      <button onClick={()=>onDecrease(keg)}>sell pint</button>
      <hr/>
      <button onClick={ onClickingEdit }>Update Keg</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func
};

export default KegDetail;