import React from 'react';
import { connect } from 'react-redux';
import { AddTodoAction } from '../actions/TodosAction';
import css from '../../css/styles.css';

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

  render() {
    const { todos } = this.props;
    const TodosMapped = todos.map(eachTodo => <li className="item" key={eachTodo.id}><b>{eachTodo.data}</b> on <b>{eachTodo.id}</b></li>);
    return (
      <div className="mainDiv">
        <h1>Add a Todo</h1>
        <br />
        <input className="inp" onKeyPress={this.addTodo.bind(this)} />
        <hr />
        <ul className="list">{TodosMapped}</ul>
      </div>
    );
  }
}

module.exports = Layout;
