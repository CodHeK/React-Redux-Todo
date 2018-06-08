import md5 from 'md5';

export function AddTodoAction(TodoData) {
  return {
    type: "ADD_NEW_TODO",
    payload: { id: md5(TodoData) , date: Date(Date.now()).toString(), data: TodoData }
  }
}

export function DeleteTodoAction(TodoID) {
  return {
    type: "DELETE_TODO",
    payload: TodoID,
  }
}
