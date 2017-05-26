import { connect } from 'react-redux';
import TodoList from './TodoList.jsx';

import { receiveTodos, receiveTodo } from '../../actions/todoActions.js';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodos: () => dispatch(receiveTodos()),
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
