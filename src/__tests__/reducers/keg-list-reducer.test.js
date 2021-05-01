import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: 'Crikey IPA',
    brewer: "Reuben's",
    price: 'Redux action is not working correctly.',
    abv: '6.8%',
    pints: '140'
    id: 1
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
});