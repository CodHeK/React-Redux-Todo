export function AddTodoAction(TodoData) {
  return {
    type: "ADD_NEW_TODO",
    payload: { id: Date(Date.now()).toString(), data: TodoData }
  }
}
