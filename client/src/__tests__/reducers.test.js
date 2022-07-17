//A reducer is a function that updates state by returning a new state object and never alters the original state object. 
// state is intended to be immutable, meaning it never should be directly altered in any way. The reason for this is that it goes behind the state management system's back and it isn't informed that something has changed. 

//import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

//create a sample of what our global state will look like
const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
  };

  //write a test for updating products list from UPDATE_PRODUCTS.
  test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });

    expect(newSate.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
  });