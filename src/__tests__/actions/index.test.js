import * as actions from './../../actions';
import * as c from "./../../actions/ActionTypes";

describe('forum actions', () => {
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      name: "Crikey IPA",
      brewer: "Reuben's Brews",
      price: "$165",
      abv: "6.8%",
      pints: "140",
      id: 1
    })).toEqual({
      type: c.ADD_KEG,
      name: "Crikey IPA",
      brewer: "Reuben's Brews",
      price: "$165",
      abv: "6.8%",
      pints: "140",
      id: 1
    });
  });
});