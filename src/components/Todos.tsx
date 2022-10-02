import React, { useContext } from 'react';

import Todo from '../models/todo';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem item={item} onRemoveTodo={todosCtx.removeTodo}></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
