import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

import { useState } from 'react';
import TodosContextProvider from './store/todos-context';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodohandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.id !== todoId);
    });
  };

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;

/////
// [new Todo('Learn React'), new Todo('Learn TypeScript')];
