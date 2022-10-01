import React from 'react';

import Todo from '../models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem item={item}></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
