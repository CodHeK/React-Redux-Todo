import React from 'react';
import { connect } from 'react-redux';
import { AddTodoAction, DeleteTodoAction } from '../actions/TodosAction';
import css from '../../css/styles.css';
import md5 from 'md5';

@connect((store) => {
  return {
    todos: store.todoR.todos,
  };
})

class Layout extends React.Component {
  constructor() {
    super();
  }

  addTodo(e) {
    if(e.which === 13) {
      const TodoData = e.target.value;
      this.props.dispatch(AddTodoAction(TodoData));
      e.target.value = "";
    }
  }

  deleteTodo(todoData, e) {
    console.log(todoData);
    //alert(Date(todoID));
    console.log(e);
    const md5Val = md5(todoData);
    console.log(md5Val);
    this.props.dispatch(DeleteTodoAction(md5Val));
  }

  render() {
    const { todos } = this.props;
    let TodosMapped = "";

    if(todos.length === 0) {
       TodosMapped = "You have no Todos to display :'(";
    }
    else {
      TodosMapped = todos.map(eachTodo => <li className="item" key={eachTodo.id} onClick={this.deleteTodo.bind(this, eachTodo.data)}> <b>{eachTodo.data}</b> on <b>{eachTodo.date}</b></li>);
    }
    return (
      <div className="mainDiv">
        <h1>Add a Todo</h1>
        <h5>(Click ENTER to add Todo & click on Todo to DELETE)</h5>
        <br />
        <input className="inp" onKeyPress={this.addTodo.bind(this)} />
        <hr />
        <ul className="list">{TodosMapped}</ul>
      </div>
    );
  }
}

module.exports = Layout;
