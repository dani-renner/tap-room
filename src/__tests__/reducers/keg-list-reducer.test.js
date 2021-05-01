import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: 'Crikey IPA',
    brewer: "Reuben's",
    price: '$165',
    abv: '6.8%',
    pints: '140',
    id: 1
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brewer, price, abv, pints, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brewer: brewer,
      price: price,
      abv: abv,
      pints: pints,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brewer: brewer,
        price: price,
        abv: abv,
        pints: pints,
        id: id
      }
    });
  });
});