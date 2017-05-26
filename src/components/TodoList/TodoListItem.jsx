import React from 'react';

export default class TodoListItem extends React.Component {
  render() {
    const { todo, reveiveTodo } = this.props;
    const { title, body } = todo;

    return (
      <div>
        {title}
        {body}
      </div>
    );
  }
}
