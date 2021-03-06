export default function reducer(state={
    todos: [],
}, action) {
  switch(action.type) {
    case "ADD_NEW_TODO": {
      state = {...state, todos: [action.payload, ...state.todos]}
      break;
    }
    case "DELETE_TODO": {
      state = {...state, todos: state.todos.filter(eachTodo => eachTodo.id !== action.payload)}
      break;
    }
  }
  return state;
}
