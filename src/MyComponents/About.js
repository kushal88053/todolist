import React from 'react';

export const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="display-4">About Todo App</h1>
      <p className="lead">
        Welcome to the Todo App! This application helps you manage your tasks efficiently. You can add, delete, and keep track of your tasks in a simple and intuitive interface.
      </p>
      <h2 className="mt-4">Features</h2>
      <ul className="list-group">
        <li className="list-group-item">Add new todos with titles and descriptions.</li>
        <li className="list-group-item">Delete todos when they are completed or no longer needed.</li>
        <li className="list-group-item">View a list of all your current todos.</li>
      </ul>
      <h2 className="mt-4">How to Use</h2>
      <p>
        To get started, use the 'Add a Todo' section to enter a new task. Once added, it will appear in the list of todos. You can click on the 'Delete' button to remove a todo from the list when it's completed.
      </p>
      <p>
        Thank you for using our Todo App. We hope it helps you stay organized and productive!
      </p>
    </div>
  );
};
