import React, { useState } from 'react';

export const AddTodos = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!title || !description) {
      alert("Title or Description cannot be empty");
      return;
    }

    addTodo(title, description); // Call the addTodo function from props

    setTitle(''); // Clear the title input
    setDescription(''); // Clear the description input
  };

  return (
    <div className='container mt-5'>
      <h2>Add a Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="titleHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="description"
          />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};
