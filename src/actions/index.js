import * as c from "./ActionTypes";

export const addKeg = (keg) => {
  const { name, brewer, price, abv, pints, id } = keg;
  return {
    type: c.ADD_KEG,
    name,
    brewer,
    price,
    abv,
    pints,
    id
  }
};
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});