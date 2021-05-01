import React from 'react';
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.kegList).map((keg) =>
        <Keg
        whenKegClicked = { props.onKegSelection }
        name={keg.name}
        brewer={keg.brewer}
        price={keg.price}
        abv={keg.abv}
        pints={keg.pints}
        id={keg.id}
        key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;