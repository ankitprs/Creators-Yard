import React from 'react';
import { FaTimes } from 'react-icons/fa';


const EditorCard = ({ name, icon_url, onRemove }) => {
  return (
    <div className="flex container mx-auto justify-between items-center my-2 bg-gray-800 text-white p-2 rounded-lg shadow-md">
      <div className="card-content flex items-center">
        <div className="icon-container mr-4">
          <img
            src={icon_url}
            alt="Icon"
            className="w-12 h-12 rounded-full mr-2 user-icon text-2xl"
          />
        </div>
        <div className="name">{name}</div>
      </div>
      <button
        className="flex remove-button bg-red-500 hover:bg-red-600 text-white py-2 px-2 mt-2 rounded"
        onClick={onRemove}
      >
        <FaTimes className="remove-icon m-1" />
        Remove
      </button>
    </div>
  );
};

export default EditorCard;
