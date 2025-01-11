import React from 'react';

const DeleteButton = ({ title, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      onDelete();
    }
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
