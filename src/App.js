import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { useState, useEffect } from 'react';
import { AddTodos } from './MyComponents/AddTodos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './MyComponents/About';

function App() {
  // Initialize todos from localStorage or set an empty array if not available
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Function to handle deletion of todos
  const onDelete = (todo) => {
    console.log('I am deleting', todo);
    const updatedTodos = todos.filter((e) => e !== todo);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // Function to add a new todo
  const addTodo = (title, description) => {
    console.log(title, description);
    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const newTodo = {
      sno, // Generate a new sno
      title: title,
      desc: description
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header title="My Todo List" searchBar={false} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodos addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
  