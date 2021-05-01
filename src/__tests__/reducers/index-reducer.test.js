import * as c from "./../../actions/ActionTypes";
import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import kegListReducer from "../../reducers/keg-list-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => { 
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false
    });
  });

  test("Check that initial state of kegListReducer matches root reducer", () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test("Check that TOGGLE_FORM action works for formVisibleReducer and root reducer", () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
  
  test("Check that ADD_KEG action works for kegListReducer and root reducer", () => {
    const action = {
      type: c.ADD_KEG,
      name: "Crikey IPA",
      brewer: "Reuben's Brews",
      price: "$165",
      abv: "6.8%",
      pints: "140",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });
});
