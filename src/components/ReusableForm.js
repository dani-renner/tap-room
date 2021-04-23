import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name of Brew' />
        <input
          type='text'
          name='brewer'
          placeholder='Brewer' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='abv'
          placeholder='Alcohol Content' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;