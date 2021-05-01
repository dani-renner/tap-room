import React from 'react';
import KegDetail from './KegDetail';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brewer, price, abv, pints, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brewer: brewer,
      price: price,
      abv: abv,
      pints: pints
    }
    dispatch(action);
    this.setState({
    formVisibleOnPage: false });
  }

  handleDecrease = () => {
    const keg = this.state.masterKegList.filter(keg => keg.id === this.state.selectedKeg.id)[0];
    parseInt(keg.pints);
    if (keg.pints > 1){
    keg.pints -= 1;
    } else {
      keg.pints = "empty";
    }
    const editedMasterKegList = this.state.masterKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(keg);
    this.setState({
      masterKegList: editedMasterKegList,
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { name, brewer, price, abv, pints, id } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brewer: brewer,
      price: price,
      abv: abv,
      pints: pints
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null){
    currentlyVisibleState = <KegDetail onDecrease = {this.handleDecrease } onClickingEdit = {this.handleEditClick} keg = {this.state.selectedKeg}  />
    buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
KegControl.propTypes = {
  masterKegList: PropTypes.object
}
const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}
KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;