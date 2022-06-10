import { createStore } from 'redux';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

export function addToDO(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function deleteToDO(text) {
  return {
    type: DELETE_TODO,
    id,
  };
}

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.todo, ...state];
    case DELETE_TODO:
      return [...state.filter((todo) => todo.id !== parseInt(action.id, 10))];
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
