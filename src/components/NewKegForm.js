import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";


function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brewer: event.target.brewer.value, price: event.target.price.value, abv: event.target.abv.value, id: v4()});
  }

  return (
    <React.Fragment>
        <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add to Tap Room" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;