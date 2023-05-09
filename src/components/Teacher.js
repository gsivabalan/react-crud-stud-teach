import React from 'react';

const Teacher = ({ teacher, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{teacher.name}</td>
      <td>{teacher.email}</td>
      <td>{teacher.phone}</td>
      <td>{teacher.qualification}</td>
      <td>
        <button onClick={() => onEdit(teacher)}>Edit</button>
        <button onClick={() => onDelete(teacher)}>Delete</button>
      </td>
    </tr>
  );
};

export default Teacher;
