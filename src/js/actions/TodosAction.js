import md5 from 'md5';

export function AddTodoAction(TodoData) {
  let d = Date(Date.now()).toString().split(" ");
  var newDate = "";
  for(var i=0;i<d.length-2;i++) {
    newDate += (d[i] + " ");
  }
  return {
    type: "ADD_NEW_TODO",
    payload: { id: md5(TodoData) , date: newDate, data: TodoData }
  }
}

export function DeleteTodoAction(TodoID) {
  return {
    type: "DELETE_TODO",
    payload: TodoID,
  }
}
