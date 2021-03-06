import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { name, brewer, price, abv, pints, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brewer: brewer,
          price: price,
          abv: abv,
          pints: pints,
          id: id
        }
      });
    default:
      return state;
  }
};